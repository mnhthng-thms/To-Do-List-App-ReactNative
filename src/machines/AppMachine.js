import { Machine, assign } from 'xstate'
import * as R from 'ramda'

const ANIMATION_DURATION = 1000

/* 
interface Task: {
  id: Number, 
  content: String
  isActive: Boolean, 
} 
*/

/* R.has :: k -> {k: v} -> Boolean */
const isNotBlankRequest = (_, event) => 
  R.has('content')(event) && (event.content.length > 0) 

const isTaskExisted = (context, event) => {
  /* type Idx = String | Int
     R.prop :: Idx -> {Idx: v} -> ?v
  */
  const tasks = R.prop ('tasks') (context)
  const idEvent = R.prop ('id') (event)
  /* R.any    :: (a -> Boolean) -> [a] -> Boolean
     R.whereEq :: {String: *} -> {String: *} -> Boolean
  */
  const specObj = {
    id: idEvent, 
    isActive: true
  }

  return R.any (R.whereEq (specObj)) (tasks) 
}

const assignNewTask = (context, event) => {
  const newTask = {
    id: R.prop ('id') (event), 
    content: R.prop ('content') (event), 
    isActive: true, 
  }
  const tasks = R.prop ('tasks') (context)

  /* `R.append` behaves similarly to vanilla JS `Array.concat`
  */
  return R.append (newTask) (tasks)
}

const purgeTask = (context, event) => {
  const tasks = R.prop ('tasks') (context)

  /* R.reject :: (a -> Boolean) -> [a] -> [a]
        # the complement of `filter`, which return the array in which
        # the elements satifying the given predicate are left out 
     R.eqProps :: k -> {k: v} -> {k: v} -> Boolean
        # reports whether two objects have the same value  
        # for the specified property
  */
  return R.reject (R.eqProps('id', event)) (tasks)
}

const archiveTask = (context, event) => {
  const idEvent = R.prop ('id') (event)
  const tasks = R.prop ('tasks') (context)

  const queryObj = { id: idEvent, isActive: true }
  /* `modifiedActiveProp` :: {...isActive: any } -> { ...isActive: false } */
  const modifiedActiveProp = R.assoc ('isActive', false)
  /* `doObjsEquals` :: Object -> Boolean 
        # check if given object equals `queryObj` 
  */
  const doObjEqQuery = R.whereEq (queryObj)

  /* @TODO:
      if the item is the desired one, append its modified version to `acc`,
      else: append itself to `acc`
     @TRIVIA: 
      `Array.prototype.concat` is applied instead of `R.append` because
      the initial value fetched into this reducer is an empty array

  */
  const reducer = (acc, item) => doObjEqQuery(item) ? 
    acc.concat(modifiedActiveProp(item)) : 
    acc.concat(item)

  return R.reduce(
    reducer, 
    [], 
    tasks
  )
}   

const AppMachine = Machine(
  {
    id: 'ToDoApp',
    context: {
      tasks: [],
    }, 
    initial: 'NORMAL',
    states: {
      NORMAL: {
        on: {
          GET_NEW_TASK: {
            target: 'NEW_TASK_ADDED', 
            actions: ['AddTask'],
            cond: 'isNotBlankRequest'
          },
          ACHIEVE_TASK: {
            target: 'TASK_ARCHIVED',
            actions: ['ArchiveTask'],  
            cond: 'isTaskExisted'
          }, 
          DELETE_TASK: {
            target: 'TASK_DELETED', 
            actions: ['DeleteTask'], 
          }
        }
      }, 
      NEW_TASK_ADDED: {
        /* this transition time will prevent the cases in which user 
           sends duplicated requests
        */
        after: {
          TRANSITION_TIME: 'NORMAL' 
        }
      },
      TASK_ARCHIVED: {
        after: {
          TRANSITION_TIME: 'NORMAL'
        }
      },
      TASK_DELETED: {
        after: {
          TRANSITION_TIME: 'NORMAL'
        }
      }
    }
  }, 
  {
    actions: {
      AddTask: assign({
        tasks: assignNewTask
      }), 
      ArchiveTask: assign({
        tasks: archiveTask,
      }),
      DeleteTask: assign({
        tasks: purgeTask
      })
    },
    guards: {
      isNotBlankRequest: isNotBlankRequest,
      isTaskExisted: isTaskExisted
    }, 
    delays: {
      TRANSITION_TIME: ANIMATION_DURATION
    }
  }
)

export default AppMachine
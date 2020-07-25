import { Machine, assign } from 'xstate'
import * as R from 'rambda'

const ANIMATION_DURATION = 1000

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
            cond: 'isTaskExisted'
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

const _taskStrategies = (query) => (context, event) => {
  const idEvent = R.prop ('id') (event)
  const tasks = R.prop ('tasks') (context)
  
  const queryObj = (query === 0) ? 
    { id: idEvent, isActive: true } :
    { id: idEvent } 
  
  /* modifyActiveProp :: {...isActive: any } -> { ...isActive: false }
     doObjsEquals     :: Object -> Boolean 
        # check if given object equals `queryObj`
  */
  const modifyActiveProp = R.assoc ('isActive', false)
  const doObjsEquals = R.whereEq (queryObj)

  /* R.findIndex :: (a -> Boolean) -> [a] -> ?Number
        # return index (if exists) in the given array of 
        # the first element satisfying the given predicate  
     R.reject :: (a -> Boolean) -> [a] -> [a]
        # the complement of `filter`, which return the array in which
        # the elements satifying the given predicate are left out
     R.juxt :: [(a, b, …, m) -> n] -> ((a, b, …, m) -> [n])
        # applies a list of function to a list of values
        # read more at: https://ramdajs.com/docs/#juxt
  */
  const [taskId, filteredTasks] = R.juxt ([
    R.findIndex, 
    R.reject
  ]) (doObjsEquals) (tasks)

  /*  R.adjust :: Number -> (a -> a) -> [a] -> [a]
         # applies a function to the value at the given index of an array, 
         # returning a new copy of the array with the element at the given  
         # index replaced with the result of the function application
  */
  if (query === 0) return R.adjust (taskId) (modifyActiveProp) (tasks)
  if (query === 1) return filteredTasks
}

const archiveTask = _taskStrategies(0)   
const purgeTask = _taskStrategies(1)

export default AppMachine
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { Divider } from 'react-native-paper'
import TaskCard from './TaskCard'
import ListEmpty from './ListEmpty'

const TaskCardList = ({ serviceState, serviceSend, navigation, dataFilterer }) => {
  return (
    <FlatList
        {... (typeof dataFilterer === 'function') ? 
            { data : serviceState.context.tasks.filter(dataFilterer) } :
            { data : serviceState.context.tasks }
        }
        ListEmptyComponent={() => <ListEmpty />}
        ItemSeparatorComponent={() => (<Divider />)}
        renderItem={
          ({ item }) => (
            <TaskCard 
              item={item}
              {...navigation ? 
                { onMore: () => navigation.navigate('Task Details', { task: item }) } :
                { onMore: () => { console.log('This feature will be developed soon!') }}  
              }
              onDeleted={() =>  serviceSend('DELETE_TASK', { id: item.id })} 
              onMarked={() => serviceSend('ACHIEVE_TASK', { id: item.id })}
            />
          )
        }
        keyExtractor={(item) => String(item.id)}
      />
  )
}

export default TaskCardList
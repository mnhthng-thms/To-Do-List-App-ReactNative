import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useService } from '@xstate/react'
import { FlatList } from 'react-native-gesture-handler'
import { Divider } from 'react-native-paper'

import TaskCard from '../components/TaskCard'
import TextInputCard from '../components/TextInputCard'
import ListEmpty from '../components/ListEmpty'
import { colours } from '../styles/index'
import { normalise } from '../helpers/Constants'

const MainScreen = ({ service }) => {
  const navigation = useNavigation()
  const [state, send] = useService(service)

  const _sendNewTask = (content) => {
    /* content :: string */
    send('GET_NEW_TASK', { id: Date.now(), content: content })
  }
  try {
    console.log(`18: 06`)
    console.log(state.context.tasks)

    return (
      <View
        style={styles.container}
      >
        <TextInputCard
          onSubmitted={t => _sendNewTask(t)}
        />
        <FlatList
          data={state.context.tasks}
          ListEmptyComponent={() => <ListEmpty />}
          ItemSeparatorComponent={() => (<Divider />)}
          renderItem={
            ({ item }) => (
              <TaskCard 
                item={item} 
                onMore={() => navigation.navigate('Task Details', { task: item })}
                onDeleted={() => send('DELETE_TASK', { id: item.id })}
                onMarked={() => send('ACHIEVE_TASK', { id: item.id })}
              />
            )
          }
          keyExtractor={
            (_) => String(Math.floor(Math.random() * 100000))
          }
        />
      </View>
    )
  } catch (e) {
    console.log('Bug caught while rendering MainScreen')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
  },
  taskList: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  textInput: {
    flex: 1,
    borderWidth: 3,
    borderColor: colours.sapphire,
    width: 90 + '%',
    marginTop: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})

export default MainScreen
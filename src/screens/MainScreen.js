import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useService } from '@xstate/react'

import { colours } from '../styles/index'
import TaskCardList from '../components/TaskCardList'
import TextInputCard from '../components/TextInputCard'

const MainScreen = ({ service }) => {
  const navigation = useNavigation()
  const [state, send] = useService(service)

  const _sendNewTask = (content) => {
    /* content :: string */
    send('GET_NEW_TASK', { id: Date.now(), content: content })
  }

  return (
    <View
      style={styles.container}
    >
      <TextInputCard
        onSubmitted={t => _sendNewTask(t)}
      />
      <TaskCardList
        navigation={navigation}
        serviceState={state}
        serviceSend={send}
      />
    </View>
  )
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
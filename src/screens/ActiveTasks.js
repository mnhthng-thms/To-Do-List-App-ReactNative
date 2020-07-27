import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useService } from '@xstate/react'
import { useNavigation } from '@react-navigation/native'

import { colours } from '../styles/index'
import TaskCardList from '../components/TaskCardList'

const ActiveTasks = ({ service }) => {
  const navigation = useNavigation()
  const [state, send] = useService(service)

  return (
    <View
      style={styles.container}
    >
      <TaskCardList
        navigation={navigation}
        serviceState={state}
        serviceSend={send}
        dataFilterer={task => task.isActive}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
  }
})

export default ActiveTasks
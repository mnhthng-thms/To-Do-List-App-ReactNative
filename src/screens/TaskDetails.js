import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import * as dt from '../utils/datetime'
import { colours } from '../styles/index'
import { normalise } from '../helpers/Constants'

const TaskDetails = ({ route }) => {
  const { task } = route.params
  const { id, content, isActive } = task

  const _fontColor = (isActive) => {
    if (isActive) return { color: colours.greenZelyony }
    return { color: colours.toryBlue }
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.headerTxt, _fontColor(isActive)]}>
        {content}
      </Text>
      <Text style={[styles.normalTxt, { color: colours.purple1 }]}>
        Created at: {dt.toString(id)}
      </Text>
      <Text style={[styles.normalTxt, _fontColor(isActive)]}>
        Status: {isActive ? `Pending` : `Completed`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colours.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: normalise(20),
    fontWeight: 'bold'
  },
  normalTxt: {
    fontSize: normalise(16)
  }
})

export default TaskDetails
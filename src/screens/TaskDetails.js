import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import * as dt from '../utils/datetime'
import { colours } from '../styles/index'

const TaskDetails = ({ route }) => {
  const navigation = useNavigation()
  const { task } = route.params
  const { id, content, isActive } = task 

  return (
    <View style={styles.container}>
      <Text>
        {content}
      </Text>
      <Text>
        {dt.toString(id)}
      </Text>
      <Text>
        Status: { isActive ? `Pending` : `Completed` }
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
})

export default TaskDetails
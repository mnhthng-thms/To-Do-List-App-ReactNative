import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import * as dt from '../utils/datetime'

const TaskDetails = ({ route, navigation }) => {
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
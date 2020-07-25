import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ActiveTasks = () => {
  return (
    <View style={styles.container}>
      <Text>
        Bootstrapping Active Tasks Screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default ActiveTasks
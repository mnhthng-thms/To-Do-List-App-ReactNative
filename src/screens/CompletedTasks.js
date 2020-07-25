import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const CompletedTasks = () => {
  return (
    <View style={styles.container}>
      <Text>
        Bootstrapping Completed Tasks Screen
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


export default CompletedTasks
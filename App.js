import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'

import MainScreen from './src/screens/MainScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MainScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default App
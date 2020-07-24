import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import BottomNavBar from './src/components/BottomNavBar'
import MainScreen from './src/screens/MainScreen'

const App = () => {
  return (
      <StatusBar style="auto" />
      <BottomNavBar />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default App
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

// import MainScreen from './src/screens/MainScreen'
import NavigationContainer from './src/navigation/NavigationContainer'

const App = () => {
  return (
    <NavigationContainer />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default App
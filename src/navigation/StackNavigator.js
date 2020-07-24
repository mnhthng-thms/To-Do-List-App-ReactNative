import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MainScreen, TaskDetails } from '../screens/index'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='All Tasks' 
        component={MainScreen}
        headerShown={false}
      />
      <Stack.Screen 
        name='Task Details' 
        component={TaskDetails}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
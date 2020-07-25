import React from 'react'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { MainScreen, TaskDetails } from '../screens/index'

enableScreens()
const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='All Tasks' 
        component={MainScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name='Task Details' 
        component={TaskDetails}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
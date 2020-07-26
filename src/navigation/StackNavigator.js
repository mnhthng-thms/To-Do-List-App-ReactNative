import React from 'react'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { MainScreen, TaskDetails } from '../screens/index'

enableScreens()
const Stack = createNativeStackNavigator()

const StackNavigator = ({ service }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='All Tasks' 
        options={{
          headerShown: false
        }}
      >
        {() => <MainScreen service={service}/>}
      </Stack.Screen>
      <Stack.Screen 
        name='Task Details' 
        component={TaskDetails}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
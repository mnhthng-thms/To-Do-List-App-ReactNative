import React from 'react'
import { enableScreens } from 'react-native-screens'
import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { MainScreen, CompletedTasks, ActiveTasks, TaskDetails } from '../screens/index'

enableScreens()
const Stack = createNativeStackNavigator()

const HomeStackNavigator = ({ service }) => {
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

const ActiveStackNavigator = ({ service }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Active Tasks' 
        options={{
          headerShown: false
        }}
      >
        {() => <ActiveTasks service={service}/>}
      </Stack.Screen>
      <Stack.Screen 
        name='Task Details' 
        component={TaskDetails}
      />
    </Stack.Navigator>
  )
}

const CompletedStackNavigator = ({ service }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Completed Tasks' 
        options={{
          headerShown: false
        }}
      >
        {() => <CompletedTasks service={service}/>}
      </Stack.Screen>
      <Stack.Screen 
        name='Task Details' 
        component={TaskDetails}
      />
    </Stack.Navigator>
  )
}

export { 
  HomeStackNavigator, 
  ActiveStackNavigator, 
  CompletedStackNavigator
}
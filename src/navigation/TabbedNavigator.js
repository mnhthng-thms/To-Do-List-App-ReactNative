import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colours } from '../styles/index'
import { MainScreen, CompletedTasks, ActiveTasks } from '../screens/index'

const Tab = createBottomTabNavigator()

const constructIcon = (route) => ({ focused, color, size }) => {
  const iconName = (() => {
    switch (route.name) {
      case 'Completed Tasks': 
        return focused ? 'md-checkmark-circle' : 'md-checkmark-circle-outline'
      case 'Active Tasks': 
        return focused ? 'ios-list-box' : 'ios-list'
      case 'Main': 
        return 'md-home' 
    }
  })()

  return <Ionicons name={iconName} size={size} color={color} />
}

const TabbedNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colours.purple1, 
        inactiveTintColor: colours.lavenderLight
      }}
      screenOptions={ ({ route }) => ({
        tabBarIcon: constructIcon(route)
      })}
    >
      <Tab.Screen 
        name='Main' 
        component={MainScreen}
      />
      <Tab.Screen 
        name='Completed Tasks' 
        component={CompletedTasks}
      />
      <Tab.Screen 
        name='Active Tasks' 
        component={ActiveTasks}
      />
    </Tab.Navigator>  
  )
}

export default TabbedNavigator
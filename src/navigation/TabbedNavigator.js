import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { colours } from '../styles/index'
import StackNavigator from './StackNavigator'
import { CompletedTasks, ActiveTasks } from '../screens/index'

const Tab = createMaterialBottomTabNavigator()

const TabbedNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Main'
      activeColor={colours.purple1}
      inactiveColor={colours.lavenderLight}
      screenOptions={({ route }) => ({
        tabBarIcon: constructIcon(route)
      })}
    >
      <Tab.Screen
        name='Completed Tasks'
        component={CompletedTasks}
      />
      {/* Stack Navigator is nested inside this Tabbed Navigator,
          which serves as the primary navigator for the whole project */}
      <Tab.Screen
        name='Main'
        component={StackNavigator}
      />
      <Tab.Screen
        name='Active Tasks'
        component={ActiveTasks}
      />
    </Tab.Navigator>
  )
}

const constructIcon = (route) => ({ focused, color, size = 22 }) => {
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

export default TabbedNavigator
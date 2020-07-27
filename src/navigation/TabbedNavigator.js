import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { colours } from '../styles/index'
import { 
  HomeStackNavigator, 
  ActiveStackNavigator, 
  CompletedStackNavigator 
} from './StackNavigators'

const Tab = createMaterialBottomTabNavigator()

const TabbedNavigator = ({ service }) => {
  return (
    <Tab.Navigator
      initialRouteName='Main'
      activeColor={colours.white}
      inactiveColor={colours.sapphire}
      barStyle={{
        backgroundColor: colours.purple1
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: constructIcon(route)
      })}
    >
      <Tab.Screen
        name='Completed Tasks'
      >
        {() => <CompletedStackNavigator service={service}/>}
      </Tab.Screen>
      <Tab.Screen
        name='Main'
      >
        {() => <HomeStackNavigator service={service}/>}
      </Tab.Screen>
      <Tab.Screen
        name='Active Tasks'
      >
        {() => <ActiveStackNavigator service={service}/>}
      </Tab.Screen>
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
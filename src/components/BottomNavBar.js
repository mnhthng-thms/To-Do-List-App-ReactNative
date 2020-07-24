import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import TabbedNavigator from '../navigation/TabbedNavigator'

export default BottomNavBar = function () {
  return (
    <NavigationContainer>
      <TabbedNavigator/>
    </NavigationContainer>  
  )
}
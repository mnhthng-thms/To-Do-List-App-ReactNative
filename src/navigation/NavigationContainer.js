import React from 'react'
import { NavigationContainer as RNNavContainer } from '@react-navigation/native'
import TabbedNavigator from './TabbedNavigator'

const NavigationContainer = () => (
  <RNNavContainer>
    <TabbedNavigator/>
  </RNNavContainer>
)

export default NavigationContainer
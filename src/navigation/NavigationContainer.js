import React from 'react'
import { NavigationContainer as RNNavContainer } from '@react-navigation/native'
import TabbedNavigator from './TabbedNavigator'

const NavigationContainer = ({ service }) => (
  <RNNavContainer>
    <TabbedNavigator service={service}/>
  </RNNavContainer>
)

export default NavigationContainer
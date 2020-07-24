import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

import FloatingPlusButton from '../components/FloatingPlusButton'
import { colours, images } from '../styles/index'
import { 
  normalise, 
  STATUS_BAR_HEIGHT, 
  SCREEN_HEIGHT, 
  SCREEN_WIDTH 
} from '../helpers/Constants'

const MainScreen = (props) => {
  return (
    <View style={styles.container}>
      <FloatingPlusButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
    marginTop: STATUS_BAR_HEIGHT
  },
  background: {
    position: 'absolute', 
    top: 0, 
    bottom: 0, 
    left: 0,
    right: 0,
    width: SCREEN_WIDTH, 
    height: SCREEN_HEIGHT, 
    zIndex: 0,
  }
})

export default MainScreen
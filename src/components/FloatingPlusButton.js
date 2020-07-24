import React from 'react'
import { StyleSheet, View, Text, NativeModules } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'

import { colours } from '../styles/index'

const FloatingPlusButton = ({ onPressed }) => {
  return (
    <BorderlessButton
      style={styles.iconContainer}
      rippleColor={colours.redVenetian}
      onPress={onPressed}
    >
      <AntDesign
        name='plus'
        size={36}
        color={colours.white}
      />
    </BorderlessButton>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: colours.redVenetian,
    position: 'absolute',
    bottom: 15,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 65,
    width: 65,
  }
})

export default FloatingPlusButton
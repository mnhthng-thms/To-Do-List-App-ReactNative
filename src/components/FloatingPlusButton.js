import React from 'react'
import { StyleSheet, View, Text, NativeModules } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'

import { colours } from '../styles/index'

const FloatingPlusButton = ({ onPressed }) => {
  return (
    <BaseButton
      style={styles.iconContainer}
      rippleColor={colours.white}
      onPress={onPressed}
    >
      <AntDesign
        name='plus'
        size={32}
        color={colours.white}
      />
    </BaseButton>
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
    height: 48,
    width: 48,
    zIndex: 3,
    elevation: 15,
  }
})

export default FloatingPlusButton
import React, { useRef, createRef } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { juxt } from 'ramda'
import { RectButton } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import  { AntDesign, MaterialIcons } from '@expo/vector-icons'

import colours from '../styles/colours'

const SwipeableTask = (props) => {
  const { children, onMore, onMarked, onDeleted, hasRightActions } = props
  /* to persist the reference to a component instance 
     throughout its lifecycle
  */

  const swipeableRow = useRef(createRef())

  /* type AnimatedValue = [Number, Number] 
     type ProgressAnimatedValue = ?Animated.Interpolation 
                                | ?Animated.Value
     type DragAnimatedValue = Animated.Interpolation

     renderRightActions :: ( ProgressAnimatedValue = [0, 1] 
                           , DragAnimatedValue = [0, -Infinity]
                           ) -> React.Node
     renderLeftActions :: ( ProgressAnimatedValue = [0, 1]
                          , DragAnimatedValue = [0, Infinity]
                          )  -> React.Node
  */

  const renderLeftActions = (_, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 60, 120],
      outputRange: [-2, 0, 1],
      
    })
    return (
      <Animated.View
        style={[
          styles.deleteAction,
          {
            transform: [{ translateX: trans }],
          }
        ]}
      >
        <RectButton
          onPress={juxt([
            swipeableRow.current.close,
            onDeleted
          ])}
        >
          <AntDesign
            name='delete'
            size={20}
            color='white'
            style={styles.actionIcon}
          />
        </RectButton>
      </Animated.View>
    )
  }

  const renderRightActions = (progress) => {
    const RightAction = ({ text, colour, x, children, onPressed }) => {
      const trans = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [x, 0],
        extrapolate: 'clamp'
      })

      return (
        <Animated.View
          style={{
            flex: 1,
            transform: [{
              translateX: trans
            }]
          }}
        >
          <RectButton
            style={[
              styles.rightActionContainer,
              { backgroundColor: colour },
              { borderRadius: 1 }
            ]}
            onPress={juxt([
              swipeableRow.current.close,
              onPressed
            ])}
          >
            {text ?
              (<Text style={styles.actionText}>
                {text}
              </Text>
              ) : children}
          </RectButton>
        </Animated.View>
      )
    }

    return (
      <View
        style={{
          width: 100,
          flexDirection: 'row',
        }}
      >
        <RightAction
          colour='#440166'
          x={100}
          style={{ borderRadius: 10 }}
          onPressed={onMore}
        >
          <MaterialIcons
            name='more-horiz'
            size={24}
            color='white'
            style={{ padding: 10, marginRight: 1 }}
          />
        </RightAction>
        <RightAction
          colour={colours.greenZelyony}
          x={50}
          onPressed={onMarked}
        >
          <MaterialIcons
            name='done'
            size={20}
            color='white'
            style={{ padding: 10 }}
          />
        </RightAction>
      </View>
    )
  }

  const updateRef = (ref) => { swipeableRow.current = ref }

  return (
    <Swipeable
      ref={updateRef}
      friction={1}
      leftThreshold={15}
      rightThreshold={10}
      renderLeftActions={renderLeftActions}
      { ...hasRightActions && {renderRightActions: renderRightActions}}
    >
      {children}
    </Swipeable>
  )
}

/*
  <SwipeableTask
    hasRightActions
    onMore={() => / navigate to the respective Details screen /}
    onMarked={() => / send ACHIEVE_TASK message to the app machine /}
    onDeleted={() => / send DELETE_TASK message to the app machine /}
  >
    {children}
  </SwipeableTask>
*/

const styles = StyleSheet.create({
  deleteAction: {
    backgroundColor: colours.redVenetian,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    padding: 10
  },
  actionIcon: {
    padding: 20,
  },
  rightActionContainer: {
    flex: 1,
    backgroundColor: colours.greenZelyony,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default SwipeableTask
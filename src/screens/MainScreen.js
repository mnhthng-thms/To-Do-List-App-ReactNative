import React, { useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Divider } from 'react-native-paper'

import FloatingPlusButton from '../components/FloatingPlusButton'
import TaskCard from '../components/TaskCard'
import TextInputCard from '../components/TextInputCard'
import { colours } from '../styles/index'
import {
  normalise,
  SCREEN_HEIGHT,
  SCREEN_WIDTH
} from '../helpers/Constants'

const DATA = [
  {
    content: 'Whatever you do in this life, it’s not legendary unless your friends are there to see it.',
    date: 'Barney Stinson, (\“Sunrise\”)'
  },
  {
    content: 'If you’re not scared, you’re not taking a chance, and if you’re not taking a chance, then what the hell are you doing?',
    date: 'Ted Mosby (\“The Window\”)'
  },
  {
    content: 'Every night can’t be legendary. If all nights are legendary, no nights are legendary.',
    date: 'Ted Mosby (\“Now We’re Even\”)'
  },
  {
    content: 'It\’s only once you\’ve stopped that you realize how hard it is to start again.',
    date: 'Ted Mosby, (\“Unfinished\”)'
  },
  {
    content: 'It\’s not about proof; it\’s about faith. Faith is what gives life shape and meaning.',
    date: 'Marshall Eriksen, (\“Tailgate\”)'
  },
  {
    content: 'Never underestimate the power of destiny. Because when you least expect it, the littlest thing can cause a ripple effect that changes your life.',
    date: ' Ted Mosby (\“Lucky Penny\”)'
  },
  {
    content: 'Never underestimate the power of destiny. Because when you least expect it, the littlest thing can cause a ripple effect that changes your life.',
    date: ' Ted Mosby (\“Lucky Penny\”)'
  },
  {
    content: 'Never underestimate the power of destiny. Because when you least expect it, the littlest thing can cause a ripple effect that changes your life.',
    date: ' Ted Mosby (\“Lucky Penny\”)'
  },
  {
    content: 'It\’s not about proof; it\’s about faith. Faith is what gives life shape and meaning.',
    date: 'Marshall Eriksen, (\“Tailgate\”)'
  },
]

const MainScreen = ({ navigation }) => {
  const [shouldUpdate, setShouldUpdate] = useState(false)

  return (
    <View
      enabled
      behavior='padding'
      style={styles.container}
    >
      <FlatList
        data={DATA}
        ItemSeparatorComponent={() => (<Divider />)}
        ListFooterComponent={() => (<TextInputCard/>)}
        renderItem={
          ({ item }) => (<TaskCard item={item} />)
        }
        keyExtractor={
          (_) => String(Math.floor(Math.random() * 100000))
        }
        keyboardDismissMode='none'
        extraData={shouldUpdate}
      />
      <FloatingPlusButton />
    </View>
  )

  // on a list item click: navigator.navigate('Task Details', { task: TaskObj })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
  },
  taskList: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  textInput: {
    flex: 1,
    borderWidth: 3,
    borderColor: colours.sapphire,
    width: 90 + '%',
    marginTop: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
})

export default MainScreen
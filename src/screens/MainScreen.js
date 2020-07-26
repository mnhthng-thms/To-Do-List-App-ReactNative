import React, { useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
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

const MainScreen = ({ service }) => {
  const navigation = useNavigation()
  const _sendNewTask = (content) => {
    /* content :: string */
    service.send('GET_NEW_TASK', { id: Date.now(), content: content })
  }

  try {
    console.log(service.state.context)

    return (
      <View
        style={styles.container}
      >
        <TextInputCard
          onSubmitted={t => _sendNewTask(t)}
        />
        <FlatList
          data={DATA}
          ItemSeparatorComponent={() => (<Divider />)}
          renderItem={
            ({ item }) => (<TaskCard item={item} />)
          }
          keyExtractor={
            (_) => String(Math.floor(Math.random() * 100000))
          }
        />
        <FloatingPlusButton />
      </View>
    )
  } catch (e) {
    console.log('Bug caught while rendering MainScreen')
  }
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
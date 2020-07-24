import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import FloatingPlusButton from '../components/FloatingPlusButton'
import TaskCard from '../components/TaskCard'
import { colours } from '../styles/index'
import { 
  normalise, 
  STATUS_BAR_HEIGHT, 
  SCREEN_HEIGHT, 
  SCREEN_WIDTH 
} from '../helpers/Constants'

const DATA=[
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

  return (
    <View 
      style={styles.container}
    >
      <FlatList
        data={DATA}
        ItemSeparatorComponent={() => (<View style={styles.separator}/>)}
        renderItem={({item}) => (<TaskCard item={item}/>)}
        keyExtractor={(_) => Math.floor(Math.random() * 100000)}  
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
    marginTop: STATUS_BAR_HEIGHT
  },
  taskList: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 1, 
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
  },
  separator: {
    backgroundColor: 'black',
    height: StyleSheet.hairlineWidth
  }
})

export default MainScreen
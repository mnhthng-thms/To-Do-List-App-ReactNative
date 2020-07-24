import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { colours } from '../styles/index'
import { normalise } from '../helpers/Constants'
import SwipeableTask from './SwipeableTask'


const TaskCard = ({ item }) => {
  const { content, date } = item

  return (
    <SwipeableTask
      onMore={() => alert('details')}
      onMarked={() => alert('done with this shit')}
      onDeleted={() => alert('oops, what task?')}
    >
      <RectButton style={styles.container}>
        <Text 
          numberOfLines={2}
          ellipsizeMode='tail'
          style={styles.contentTxt}
        >
          {content}
        </Text>
        <Text style={styles.dateTxt}>
          {date} &gt;
        </Text>
      </RectButton>
    </SwipeableTask>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 80,
    paddingVertical: 20,
    paddingHorizontal: 5,
    backgroundColor: colours.white, 
    elevation: 5
  },
  contentTxt: {
    paddingLeft: 2+'%',
    marginRight: 80,
    fontSize: normalise(18),
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  },
  dateTxt: {
    position: 'absolute',
    right: 2+'%',
    top: 0,
    color: '#202020',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  }
})

export default TaskCard
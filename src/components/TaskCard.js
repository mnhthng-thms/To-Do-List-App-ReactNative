import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { colours } from '../styles/index'
import { normalise } from '../helpers/Constants'
import * as dt from '../utils/datetime'
import SwipeableTask from './SwipeableTask'


const TaskCard = ({ item, onMore, onMarked, onDeleted }) => {
  const { content, id, isActive } = item

  return (
    <SwipeableTask
      hasRightActions={isActive}
      onMore={onMore}
      onMarked={onMarked}
      onDeleted={onDeleted}
    >
      <RectButton style={styles.container}>
        <Text 
          numberOfLines={2}
          ellipsizeMode='tail'
          style={[
            styles.contentTxt,
            isActive ? 
              { color: colours.greenZelyony } :
              { color: colours.toryBlue } 
          ]}
        >
          {content}
        </Text>
        <Text style={styles.dateTxt}>
          {dt.toString(id, 'date')} &gt;
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
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  }
})

export default TaskCard
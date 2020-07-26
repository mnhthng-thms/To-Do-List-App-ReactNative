import React from 'react'
import { StyleSheet, View, ImageBackground, Text } from 'react-native'
import { colours, images } from '../styles/index'
import { normalise, SCREEN_WIDTH, SCREEN_HEIGHT } from '../helpers/Constants'

const ListEmpty = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.background}
        style={styles.background}
      >
        <Text
          style={styles.txt}
        >
          Nothing to show yet!
        </Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    width: SCREEN_WIDTH * 0.98, 
    height: SCREEN_HEIGHT * 0.9,
    marginHorizontal: SCREEN_WIDTH * 0.01,
  },
  background: {
    flex: 1, 
    resizeMode: 'cover',
    justifyContent: 'center',
  }, 
  txt: {
    color: colours.royalBlue, 
    fontSize: normalise(16),
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})

export default ListEmpty
import React, { useState, useRef, createRef } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { colours } from '../styles/index'

const TextInputCard = ({ onSubmitted }) => {
  const [ content, setContent ] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Type new to-do task...'
        value={content}
        onChangeText={setContent}
        onSubmitEditing={() => onSubmitted(content)} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 1+'%',
    borderWidth: 3,
    borderColor: colours.purple1,
    borderRadius: 1,
    backgroundColor: colours.white,
    elevation: 3,
  },
})

export default TextInputCard
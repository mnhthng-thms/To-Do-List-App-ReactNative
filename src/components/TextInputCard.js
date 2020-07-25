import React, { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { colours } from '../styles/index'

const TextInputCard = function () {
  const [ content, setContent ] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='New To-Do Task'
        value={content}
        onChange={text => setContent(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: colours.purple1,
    borderRadius: 1,
    backgroundColor: colours.white,
  },
})

export default TextInputCard
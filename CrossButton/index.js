
import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'

type Props = {
  onPress: Function,
}

const crossImageSource = require('./assets/cross.png')

const CrossButton = (props: Props) => {
  const { onPress } = props

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={{ marginRight: 5 }}>
        <Image source={crossImageSource} />
      </View>
    </TouchableOpacity>
  )
}

export default CrossButton

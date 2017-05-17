
import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  onPress: Function,
}

const CrossButton = (props: Props) => {
  const { onPress } = props

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={{ marginRight: 5 }}>
      <Icon
         name='times-circle'
         size={20}
         color='lightgrey'
       />
      </View>
    </TouchableOpacity>
  )
}

export default CrossButton

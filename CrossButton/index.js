
import React from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  onPress: Function,
}

const CrossButton = (props: Props) => {
  const { onPress, crossButtonStyle, crossButtonSize, crossButtonColor, crossButtonName } = props

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={{ marginRight: 5 }}>
      <Icon
         name={crossButtonName || 'times-circle' }
         size={crossButtonSize || 20}
         color={crossButtonColor || 'lightgrey'}
       />
      </View>
    </TouchableOpacity>
  )
}

export default CrossButton

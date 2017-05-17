import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import CrossButton from './CrossButton'

export default class CrossTextInput extends Component {
  
  // static defaultProps = {
  //   hideCrossButton: false,
  // }
  
  constructor(props)
  {
    super(props)
  }
  
  clearInput() {
  //  const { reference } = this.props
    this.input.clear()
    if (this.props.onInputCleared) {
      this.props.onInputCleared();
    }
  }

  
  render() {
    const { containerStyle, hideCrossButton } = this.props
    
    if(hideCrossButton)
    {
      return (    
        <View style = {[styles.container,containerStyle]}>
            <TextInput {...this.props} ref={input => this.input = input}  />  
        </View>
      )
    }
    else 
    {
      return (
        
        <View style = {[styles.container,containerStyle]}>
            <TextInput {...this.props } ref={input => this.input = input} />  
            <CrossButton onPress={() => this.clearInput()} />  
        </View>
      )     
    }
  }
  
}

const styles = StyleSheet.create({
  
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
  },
  
  textInput: {
     height: 40,
     fontFamily: 'System',
     fontSize: 12,
     padding:10,
     flex: 1
  },
  
});
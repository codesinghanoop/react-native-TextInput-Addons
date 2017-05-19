import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import CrossButton from './CrossButton'
import Progress from './ActivityIndicator'

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
    const { containerStyle, hideCrossButton, crossButtonStyle, crossButtonSize, crossButtonColor, crossButtonName, isLoading, hideProgress, progressStyle, progressColor } = this.props

    if(hideCrossButton && hideProgress)
    {
      return (
        <View style = {[styles.container,containerStyle]}>
            <TextInput {...this.props} ref={input => this.input = input}  />
        </View>
      )
    }
    else if(hideProgress && !hideCrossButton)
    {
      return (

        <View style = {[styles.container,containerStyle]}>
            <TextInput {...this.props } ref={input => this.input = input} />
            <CrossButton {...this.props } onPress={() => this.clearInput()} />
        </View>
      )
    }
   else if(!hideProgress && hideCrossButton)
   {
     if(isLoading)
     {
      return(
        <View style = {[styles.container,containerStyle]}>
            <TextInput {...this.props } ref={input => this.input = input} />
            <Progress {...this.props } />
        </View>
      )
     }
     else
     {
       return(
         <View style = {[styles.container,containerStyle]}>
             <TextInput {...this.props} ref={input => this.input = input}  />
         </View>
       )
     }
   }
   else
   {
      if(isLoading)
      {
        return(
          <View style = {[styles.container,containerStyle]}>
              <TextInput {...this.props } ref={input => this.input = input} />
              <Progress {...this.props } />
          </View>
        )
      }
      else
      {
        return(
          <View style = {[styles.container,containerStyle]}>
              <TextInput {...this.props } ref={input => this.input = input} />
              <CrossButton {...this.props } onPress={() => this.clearInput()} />
          </View>
        )
      }
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

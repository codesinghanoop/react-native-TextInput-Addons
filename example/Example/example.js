import React, { Component } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import CrossTextInput from 'react-native-cross-button'
export default class CrossButtonExample extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
    }  
    this.onEmailInputCleared = this.onEmailInputCleared.bind(this)
    this.onNameInputCleared = this.onNameInputCleared.bind(this)
  }
  
  onEmailInputCleared() {
   this.setState({ email: ''});
 }
 onNameInputCleared() {
  this.setState({ name: ''});
 }
  
  render() {
  
    return (
      
      <View style = {styles.container}>
        <CrossTextInput underlineColorAndroid="transparent" value = {this.state.email} style={styles.textInput} autoCorrect={false} autoCapitalize="none" keyboardType="email-address" placeholder={'EMAIL'} placeholderTextColor="#adadad" onChangeText={(text) => this.setState({ email: text })}
         containerStyle= {{backgroundColor: 'green'}} onInputCleared={this.onEmailInputCleared} />
        <CrossTextInput underlineColorAndroid="transparent" value = {this.state.name} style={styles.textInput} autoCorrect={false} autoCapitalize="none" keyboardType="email-address" placeholder={'NAME'} placeholderTextColor="#adadad" onChangeText={(text) => this.setState({ name: text })}
        containerStyle= {{backgroundColor: 'red'}} onInputCleared={this.onNameInputCleared} />
      </View>
      
    )    
    
  }
  
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
  },
  
  textInput: {
     height: 40,
     fontFamily: 'System',
     fontSize: 12,
     padding:10,
     flex: 1
  },
  
});
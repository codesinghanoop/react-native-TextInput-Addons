import React, { Component } from 'react'
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import CrossTextInput from 'react-native-cross-button'
export default class CrossButtonExample extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      emailLoading: false,
      nameLoading: false,
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
 fetchingEmail() {
   this.setState({ emailLoading: !this.state.emailLoading});
 }

 fetchingName() {
   this.setState({ nameLoading: !this.state.nameLoading});
 }
  render() {

    return (

      <View style = {styles.container}>
        <CrossTextInput underlineColorAndroid="transparent"  hideProgress={false} isLoading= {this.state.emailLoading} value = {this.state.email} style={styles.textInput} autoCorrect={false} autoCapitalize="none" keyboardType="email-address" placeholder={'EMAIL'} placeholderTextColor="#adadad" onChangeText={(text) => this.setState({ email: text })}
         containerStyle= {{backgroundColor: 'green'}} onInputCleared={this.onEmailInputCleared} />
       <CrossTextInput underlineColorAndroid="transparent" hideProgress={false} isLoading= {this.state.nameLoading} value = {this.state.name} style={styles.textInput} autoCorrect={false} autoCapitalize="none" keyboardType="email-address" placeholder={'NAME'} placeholderTextColor="#adadad" onChangeText={(text) => this.setState({ name: text })}
        containerStyle= {{backgroundColor: 'red'}} onInputCleared={this.onNameInputCleared} />
      <TouchableOpacity onPress={() => this.fetchingEmail()}  underlayColor={'#00000000'}>
          <Text style={styles.buttonTextStyle}>Stop Loading Emails</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.fetchingName()}  underlayColor={'#00000000'}>
          <Text style={styles.buttonTextStyle}>Stop Loading Emails</Text>
        </TouchableOpacity>
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

  buttonStyle: {
    height: 50,
    width: 124,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0)',
    borderColor: 'red',
    borderWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  buttonTextStyle: {
    fontSize: 12,
    color: 'green',
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: 'bold'
  },

});

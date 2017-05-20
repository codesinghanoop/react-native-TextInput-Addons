# react-native-TextInput-Addons
A simple easy to use cross button, spinner, popOver(dropdown) and many other things in textInput (Android and iOS) 

----------

**Getting started**

 - Step 1-
           npm install react-native-cross-button --save
 - Step 2-
        npm install react-native-vector-icons --save
 - Step 3-
        react-native link
 - Step 4-
       Build your project and you are good to go.
       
----------       

**Usage**

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

----------

**Properties**

|  Name         | Type          |
| ------------- |:-------------:| 
| autoCorrect   | PropTypes.bool|
| keyboardType      | TextInput.propTypes.keyboardType |      
| multiline | PropTypes.bool |  
| placeholderTextColor |	PropTypes.string |
| returnKeyType	| TextInput.propTypes.returnKeyType |
| selectTextOnFocus | PropTypes.bool | 
| placeholder	| PropTypes.string |
| editable |	PropTypes.bool |
| autoCapitalize | PropTypes.bool |
| maxLength | PropTypes.number |
| multiline | PropTypes.bool |
| onEndEditing | PropTypes.func |
| onChange | PropTypes.func |
| value | PropTypes.string |    
| onBlur | PropTypes.func |
|  onChangeText |	PropTypes.func |
|   onFocus | PropTypes.func |
| hideCrossButton | PropTypes.bool |
| containerStyle | PropTypes.object |
| onInputCleared | PropTypes.func | 
| crossButtonStyle | PropTypes.object |
| crossButtonSize | PropTypes.number |
| crossButtonColor | PropTypes.string |
| crossButtonName | PropTypes.string |
| isLoading | PropTypes.bool |
| hideProgress | PropTypes.bool |
| progressStyle | PropTypes.object |
| progressColor | PropTypes.string |


----------

**Todo list:-**    

 -  Display popovers on pressing button or TextInput dropdown.

 -  Multiple select dropdown.

 -  Dynamic modals with animation

 -  Add test   
 
 ----------

**Author**

    Anoop Singh (codesingh)
    Email: anoop100singh@gmail.com
    Stack Overflow: codesingh(username)
    
----------    

**License**
    
MIT



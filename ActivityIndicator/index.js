import React, { Component } from 'react';

import {
  Platform,
  ActivityIndicator,
  ProgressBarAndroid
} from  'react-native';

export default class Progress extends Component {
  render() {
    if (Platform.OS === 'ios') {
      return (
        <ActivityIndicator color={this.props.color} style={{marginLeft: 5,marginRight: 5}}/>
      );
    } else {
      return (
        <ProgressBarAndroid color={this.props.color} style={{marginLeft: 5,marginRight: 5}} styleAttr={"Small"}/>
      );
    }
  }
}

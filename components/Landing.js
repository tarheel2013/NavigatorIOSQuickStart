'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Main from './Main.js';
import Right from './Right.js';
import Left from './Left.js';

class Landing extends Component {
  constructor(props){
    super(props);
  }

  openMain() {
    this.props.navigator.push({
      title: 'Main Page',
      component: Main,
      rightButtonTitle: 'Right',
      onRightButtonPress: () => this.openRight(),
      leftButtonTitle: 'Left',
      onLeftButtonPress: () => this.openLeft()
    });
  }

  openRight() {
    this.props.navigator.push({
      title: 'Right Page',
      component: Right
    });
  }

  openLeft() {
    this.props.navigator.push({
      title: 'Left Page',
      component: Left
    });
  }

  render() {
    return(
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Landing Page</Text>
        <TouchableHighlight
          onPress={() => this.openMain()}
        >
          <Text>Press for Main Page</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Landing;

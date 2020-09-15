import React, {Component, useState} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';

export default class FirstScreen extends Component{
    render() {
      const {navigate} = this.props.navigation;
      return (    
          <Button
            title="Go to Main Screen"
            onPress={() => navigate('SecondScreen')}
          />
      );
    }
  };
  
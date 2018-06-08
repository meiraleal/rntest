import React from 'react';
import {Picker, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AddForm from './AddForm';
import Header from './Header';
import Event from './Event';
class Events extends React.Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 30}}>
        <Header />
        <Event />
        <AddForm />
      </View>
    );
  }
}

export default Events;

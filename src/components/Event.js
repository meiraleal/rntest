import React from 'react';
import {Picker, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const Event = () => [
<View style={styles.event} key="infoBox">
  <Text>Name: USC Trojans at Notre Dame Fighting Irish</Text>
  <Text>Date: Oct 17 7:30 PM</Text>
  <Text>Venue: Notre Dame Stadium</Text>
  <Text>City: Notre Dame</Text>
  <Text>State: IN</Text>
</View>,
<View style={{alignItems: 'flex-start'}} key="addButton">
  <TouchableOpacity style={styles.button}><Text>Add Event</Text></TouchableOpacity>
</View>]

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    margin: 5,
    padding: 5
  },
  event: {
    margin: 5,
    borderRadius: 5,
    borderWidth: 1
  }
});
export default Event;

import React from 'react';
import {Picker, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const Event = ({index, item}) => {
  console.log(item);
  return (<View style={styles.event} key="infoBox">
  <Text>Name: {item.name}</Text>
  <Text>Date: {item.date}</Text>
  <Text>Venue: {item.venue.name}</Text>
  <Text>City: {item.venue.city}</Text>
  <Text>State: {item.venue.state}</Text>
</View>)
};
const styles = StyleSheet.create({
  event: {
    margin: 5,
    borderRadius: 5,
    borderWidth: 1
  }
});
export default Event;

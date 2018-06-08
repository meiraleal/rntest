import React from 'react';
import {Picker, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const Event = ({index, item}) => {
  console.log(item);
  return (<View style={styles.event} key="infoBox">
  <Text>Name: {item.name}</Text>
  <Text>Date: {item.date}</Text>
  <Text>Venue: {item.venueName || item.venue && item.venue.name}</Text>
  <Text>City: {item.venueCity || item.venue && item.venue.city}</Text>
  <Text>State: {item.venueState || item.venue && item.venue.state}</Text>
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

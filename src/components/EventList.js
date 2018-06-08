import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Event from './Event';

const EventList = (props) => (<View>
    <FlatList
    data={props.rows.reverse()}
    renderItem={Event}
    />
  </View>);

const styles = StyleSheet.create({
  event: {
    margin: 5,
    borderRadius: 5,
    borderWidth: 1
  }
});

export default EventList;

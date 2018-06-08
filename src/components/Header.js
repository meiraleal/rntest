import React from 'react';
import {Picker, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const Header = () => (<View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
  <TouchableOpacity style={[styles.tab, styles.tabSelected]}><Text>All Events</Text></TouchableOpacity>
  <TouchableOpacity style={styles.tab}><Text>Upcoming Events</Text></TouchableOpacity>
  <TouchableOpacity style={styles.tab}><Text>Local Events</Text></TouchableOpacity>
</View>);


const styles = StyleSheet.create({
  tab: {
    backgroundColor: 'grey',
    margin: 5,
    padding: 5
  },
  tabSelected: {
    backgroundColor: 'blue',
    margin: 5,
    padding: 5
  }
});
export default Header;

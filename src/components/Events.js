import React from 'react';
import {Picker, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AddForm from './AddForm';
import Header from './Header';
import EventList from './EventList';
class Events extends React.Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 30}}>
        <Header />
        <View style={{alignItems: 'flex-start'}} key="addButton">
          <TouchableOpacity style={styles.button}><Text>Add Event</Text></TouchableOpacity>
        </View>
        <AddForm handleInput={this.props.handleInput}
        addEvent={this.props.addEvent}/>
        <EventList rows={this.props.rows} />
      </View>
    );
  }
}

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

export default Events;

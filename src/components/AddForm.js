import React from 'react';
import {Picker, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const AddForm = (props) => (
  <View style={styles.form}>
  <Text>Event Information</Text>
  <TextInput onChangeText={(event) => props.handleInput("name", event)}
  style={{height: 40}} placeholder="Event Name"/>
  <TextInput style={{height: 40}} placeholder="Date"
  onChangeText={(event) => props.handleInput("date", event)}/>
  <TextInput style={{height: 40}} placeholder="Time"
  onChangeText={(event) => props.handleInput("time", event)}/>
  <Text>Venue Information</Text>
  <TextInput style={{height: 40}} placeholder="Venue Name"
  onChangeText={(event) => props.handleInput("venueName", event)}/>
  <TextInput style={{height: 40}} placeholder="Venue City"
  onChangeText={(event) => props.handleInput("venueCity", event)}/>
  <Picker style={{height: 40}}
  onChangeText={(event) => props.handleInput("venueState", event)}>
    <Picker.Item label="AK" value="AK"/>
    <Picker.Item label="AL" value="AL"/>
    <Picker.Item label="AR" value="AR"/>
    <Picker.Item label="AZ" value="AZ"/>
    <Picker.Item label="CA" value="CA"/>
    <Picker.Item label="CO" value="CO"/>
    <Picker.Item label="CT" value="CT"/>
    <Picker.Item label="DC" value="DC"/>
    <Picker.Item label="DE" value="DE"/>
    <Picker.Item label="FL" value="FL"/>
    <Picker.Item label="GA" value="GA"/>
    <Picker.Item label="HI" value="HI"/>
    <Picker.Item label="IA" value="IA"/>
    <Picker.Item label="ID" value="ID"/>
    <Picker.Item label="IL" value="IL"/>
    <Picker.Item label="IN" value="IN"/>
    <Picker.Item label="KS" value="KS"/>
    <Picker.Item label="KY" value="KY"/>
    <Picker.Item label="LA" value="LA"/>
    <Picker.Item label="MA" value="MA"/>
    <Picker.Item label="MD" value="MD"/>
    <Picker.Item label="ME" value="ME"/>
    <Picker.Item label="MI" value="MI"/>
    <Picker.Item label="MN" value="MN"/>
    <Picker.Item label="MO" value="MO"/>
    <Picker.Item label="MS" value="MS"/>
    <Picker.Item label="MT" value="MT"/>
    <Picker.Item label="NC" value="NC"/>
    <Picker.Item label="ND" value="ND"/>
    <Picker.Item label="NE" value="NE"/>
    <Picker.Item label="NH" value="NH"/>
    <Picker.Item label="NJ" value="NJ"/>
    <Picker.Item label="NM" value="NM"/>
    <Picker.Item label="NV" value="NV"/>
    <Picker.Item label="NY" value="NY"/>
    <Picker.Item label="OH" value="OH"/>
    <Picker.Item label="OK" value="OK"/>
    <Picker.Item label="OR" value="OR"/>
    <Picker.Item label="PA" value="PA"/>
    <Picker.Item label="RI" value="RI"/>
    <Picker.Item label="SC" value="SC"/>
    <Picker.Item label="SD" value="SD"/>
    <Picker.Item label="TN" value="TN"/>
    <Picker.Item label="TX" value="TX"/>
    <Picker.Item label="UT" value="UT"/>
    <Picker.Item label="VA" value="VA"/>
    <Picker.Item label="VT" value="VT"/>
    <Picker.Item label="WA" value="WA"/>
    <Picker.Item label="WI" value="WI"/>
    <Picker.Item label="WV" value="WV"/>
    <Picker.Item label="WY" value="WY"/>
  </Picker>
  <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
    <TouchableOpacity style={styles.button}><Text>Cancel</Text></TouchableOpacity>
    <TouchableOpacity style={styles.button}
    onPress={props.addEvent}><Text>Add Event</Text></TouchableOpacity>
  </View>
</View>);


const styles = StyleSheet.create({
  form: {
    margin: 5
  },
  button: {
    backgroundColor: 'grey',
    margin: 5,
    padding: 5
  }
});

export default AddForm;

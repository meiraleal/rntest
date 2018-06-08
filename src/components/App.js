/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';
import {fetchData, addEvent, handleInput} from '../actions'
import Events from './Events';

type Props = {};

class App extends Component<Props> {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (<Events rows={this.props.rows}
      handleInput={this.props.handleInput}
      addEvent={this.props.addEvent}/>);
  }
}

const connectedApp = connect(
  state => ({rows: state.rows}),
  { fetchData, addEvent, handleInput },
)(App);

export default connectedApp;

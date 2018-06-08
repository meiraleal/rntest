import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './src/components/App';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './src/reducer'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('vividseats', () => Main)

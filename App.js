import React from 'react';
import HomeScreen from './components/HomeScreen';
import WriteTodo from './components/WriteTodo';
const { Navigation } = require('react-native-navigation');

HomeScreen.options = {
  topBar: {
    visible:false,
    height:0
  }
};

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Write', () => WriteTodo);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
              id:'HOME'
            }
          }
        ]
      }
    }
  });
});







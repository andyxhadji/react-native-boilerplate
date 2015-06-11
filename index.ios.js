'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS,
} = React;
var BoilerplateTabBar = require('./BoilerplateTabBar');
 
var ReactNativeBoilerplate = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'React Native Boilerplate',
          component: BoilerplateTabBar,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    margin: 80,
    fontSize: 20,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('ReactNativeBoilerplate', () => ReactNativeBoilerplate);

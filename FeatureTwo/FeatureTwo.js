'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;
var styles = require('./css/styles');

var FeatureTwo = React.createClass({
  render: function() {
    return (
      <View style={[styles.tabContent, {backgroundColor: 'green'}]}>
        <Text style={styles.tabText}>Feature Two</Text>
        <Text style={styles.tabText}>Welcome!</Text>
      </View>
    );
  }
});

module.exports = FeatureTwo;

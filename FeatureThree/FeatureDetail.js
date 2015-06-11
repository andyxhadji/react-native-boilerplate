'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;
var styles = require('./css/styles');

var FeatureDetail = React.createClass({
  render: function() {
    return (
      <View style={[styles.tabContent, {backgroundColor: 'purple'}]}>
        <Text style={styles.tabText}>Feature Detail</Text>
        <Text style={styles.tabText}>Navigation!</Text>
      </View>
    );
  }
});

module.exports = FeatureDetail;

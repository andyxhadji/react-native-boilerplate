'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;
var styles = require('./css/styles');

var FeatureOne = React.createClass({

  getInitialState: function() {
    return {
      presses: 0,
    }
  },

  _onPressButton: function() {
    console.log("Pressed!");
    this.setState({presses: this.state.presses + 1});
  },

  render: function() {
    return (
      <View style={[styles.tabContent, {backgroundColor: 'lightgrey'}]}>
        <Text style={styles.tabText}>Feature One</Text>
        <TouchableHighlight onPress={this._onPressButton}>
          <Text style={styles.tabText}>Press me!</Text>
        </TouchableHighlight>
        <Text>{this.state.presses}</Text>
      </View>
    );
  }
});

module.exports = FeatureOne;

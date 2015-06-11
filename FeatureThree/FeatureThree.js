'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
} = React;
var FeatureDetail = require('./FeatureDetail');
var styles = require('./css/styles');

var FeatureThree = React.createClass({
  _onPress: function() {
    var detailRoute = {
      component: FeatureDetail,
      title: 'Feature Detail',
      passProps: {},
    };
    this.props.navigator.push(detailRoute);
  },
  render: function() {
    return (
      <View style={[styles.tabContent, {backgroundColor: 'darkblue'}]}>
        <Text style={styles.tabText}>Feature Two</Text>
        <Text style={styles.tabText}>Re-renders: {this.props.presses}</Text>
        <TouchableWithoutFeedback onPress={this._onPress}>
          <Image style={styles.image} source={{uri: "https://facebook.github.io/react-native/img/header_logo.png"}} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
});

module.exports = FeatureThree;

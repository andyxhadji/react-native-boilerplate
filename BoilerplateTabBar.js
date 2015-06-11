'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;
var FeatureOne = require('./FeatureOne/FeatureOne');
var FeatureTwo = require('./FeatureTwo/FeatureTwo');
var FeatureThree = require('./FeatureThree/FeatureThree');

var BoilerplateTabBar = React.createClass({

  getInitialState: function() {
    return {
      selectedTab: 'secondTab',
      notifCount: 0,
      presses: 0,
    };
  },

  render: function() {
    return (
      <TabBarIOS
        tintColor="black"
        barTintColor="#3abeff">
        <TabBarIOS.Item
          title="First Tab"
          selected={this.state.selectedTab === 'firstTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'firstTab',
            });
          }}>

          <FeatureOne />

        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'secondTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'secondTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>

          <FeatureTwo />

        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === 'thirdTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'thirdTab',
              presses: this.state.presses + 1
            });
          }}>

          <FeatureThree presses={this.state.presses} navigator={this.props.navigator} />

        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = BoilerplateTabBar;

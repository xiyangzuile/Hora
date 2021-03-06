'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import {
  List,
  ListItem
} from 'react-native-elements';

import { StackNavigator } from 'react-navigation';

import { Market, MarketIndex } from '../Containers';

const MarketScreen = ({navigation}) => (
  <Market banner="Market" navigation={navigation}/>
);

const MarketIndexScreen = ({navigation}) => (
  <MarketIndex banner="Market Index" navigation={navigation}/>
);

const MarketTab = StackNavigator({
  Home: {
    screen: MarketScreen,
    path: '/',
    navigationOptions: () => ({
      title: 'Market',
    }),
  },
  MarketIndex: {
    screen: MarketIndexScreen,
    path: '/',
    navigationOptions: () => ({
      title: 'Market Index',
    }),
  }
});

export default MarketTab;

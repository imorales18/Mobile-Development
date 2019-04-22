import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import Detail from '../screens/Detail';
import Detail_2 from '../screens/Detail_2';
import Detail_3 from '../screens/Detail_3';
import Detail_4 from '../screens/Detail_4';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Detail: Detail,
  Detail_2: Detail_2,
  Detail_3: Detail_3,
  Detail_4: Detail_4,
}, {initialRouteName:"Home"});

export default HomeStack;

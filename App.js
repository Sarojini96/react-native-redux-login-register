/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Users from './src/getusers';
import Register from './src/register';
import SignIn from './src/login';

const App = () => {
  return <SignIn />;
};

export default App;

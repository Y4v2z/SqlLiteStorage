//import liraries
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import RootNavigator from './src/router/rootNavigator';
import {creatTable} from './src/utils/dataBase';

// create a component
const App = () => {
  useEffect(() => {
    creatTable();
  }, []);
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

//make this component available to the app
export default App;

// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import UserList from '../screens/userList';
import {USERADD, USERLİST} from '../utils/routes';
import UserAdd from '../screens/userAdd';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name={USERLİST} component={UserList} />
      <Stack.Screen name={USERADD} component={UserAdd} />
    </Stack.Navigator>
  );
}

export default RootNavigator;

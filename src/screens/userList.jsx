//import liraries
import React, {useEffect} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {Screenstyle} from '../style/screenStyle';
import FlatActionButton from '../components/uı/flatActionButton';
import {USERS} from '../utils/mockData';
import UserCard from '../components/userCard';
import {USERADD} from '../utils/routes';

// create a component
const UserList = ({navigation}) => {
  return (
    <SafeAreaView style={Screenstyle.safeAreaContainer}>
      <View style={Screenstyle.container}>
        <FlatList
          data={USERS}
          renderItem={({item}) => <UserCard item={item} />}
        />
        <FlatActionButton onPress={() => navigation.navigate(USERADD)} />
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default UserList;

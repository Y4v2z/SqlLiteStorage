//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import Colors from '../theme/colors';
import Avatar from './uı/avatar';
import {Call} from 'iconsax-react-native';
import {compareUserName} from '../utils/function';

// create a component
const UserCard = ({item}) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.imageContainer}>
        <Avatar photo={item.photo} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>
          {compareUserName(item.name, item.surname)}
        </Text>
        <Text style={styles.phone}>{item.phone}</Text>
      </View>
      <View style={styles.callContainer}>
        <Pressable>
          <Call size={30} color={Colors.GREEN} />
        </Pressable>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 0.3,
    borderColor: Colors.GRAY,
    // justifyContent: 'center',
  },

  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  phone: {
    color: Colors.GRAY,
    fontSize: 18,
  },
  infoContainer: {
    flex: 3,
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

//make this component available to the app
export default UserCard;

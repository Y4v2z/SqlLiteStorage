//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../theme/colors';

// create a component
const CustomButton = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity {...props} style={styles.button}>
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
  button: {
    backgroundColor: Colors.GREEN,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: '500',
  },
});

//make this component available to the app
export default CustomButton;

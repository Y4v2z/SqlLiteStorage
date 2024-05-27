//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Colors from '../../theme/colors';

// create a component
const CustomInput = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  input: {
    backgroundColor: Colors.INPUT,
    height: 45,
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: Colors.GRAY,
    padding: 5,
    fontSize: 16,
    fontWeight: '300',
  },
  title: {
    fontSize: 14,
    fontWeight: '800',
    marginVertical: 5,
  },
});

//make this component available to the app
export default CustomInput;

//import liraries
import {Add} from 'iconsax-react-native';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Colors from '../../theme/colors';
import {Screenstyle} from '../../style/screenStyle';

// create a component
const FlatActionButton = props => {
  return (
    <SafeAreaView style={Screenstyle.container}>
      <TouchableOpacity {...props} style={styles.container}>
        <Add size={40} color={Colors.WHITE} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREEN,
    width: 80,
    height: 80,
    borderRadius: 80,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

//make this component available to the app
export default FlatActionButton;

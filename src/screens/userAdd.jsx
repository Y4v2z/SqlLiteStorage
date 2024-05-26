//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Screenstyle} from '../style/screenStyle';
import CustomInput from '../components/uı/customInput';
import CustomButton from '../components/uı/customButton';

// create a component
const UserAdd = () => {
  return (
    <View style={Screenstyle.container}>
      <ScrollView>
        <CustomInput placeholder="Name" title="Name" />
        <CustomInput placeholder="Surname" title="Surname" />
        <CustomInput placeholder="Phone" title="Phone" />
        <CustomInput placeholder="Age" title="Age" />
        <CustomButton title={'SAVE'} />
      </ScrollView>
    </View>
  );
};

export default UserAdd;

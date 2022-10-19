import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {mainStyle} from '../../components/styles/ScreenStyle';
import Logo from '../../assets/SVG/logo.svg';
import Fonts from '../../theme/Fonts';

const Profile = () => {
  return (
    <View style={mainStyle}>
      <View style={styles.container}>
        <Logo />
        <Text style={styles.textStyle}>Boilerplate for React-Native </Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: Fonts.size.large,
    marginTop: 10,
  },
});

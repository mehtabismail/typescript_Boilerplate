/* eslint-disable react-hooks/exhaustive-deps */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {mainStyle} from '../../components/styles/ScreenStyle';
import navigationStrings from '../../constants/navigationStrings';

// MAIN FUNCTION
const Splash = ({navigation}: any): JSX.Element => {
  // SCREEN RENDERING

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(navigationStrings.PROFILE);
    }, 0);
  }, []);
  return (
    <SafeAreaView style={mainStyle}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>Splash Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

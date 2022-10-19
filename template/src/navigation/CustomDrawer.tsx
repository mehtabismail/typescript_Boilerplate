import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import LogoutSVG from '../assets/SVG/drawer/logout.svg';

const CustomDrawer = (props: any) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 1}}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{backgroundColor: 'transparent'}}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/images/FB_IMG_15650941132375750.jpeg')}
              style={styles.imageStyle}
            />
            <View style={styles.profileText}>
              <Text>MEHTAB ISMAIL</Text>
              <Text>mehtab@gmail.com</Text>
            </View>
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.bottom}>
            <View style={styles.logoutSvg}>
              <LogoutSVG />
            </View>
            <Text style={styles.logoutText}>SIGNOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  imageContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  imageStyle: {width: 60, height: 60, borderRadius: 30},
  profileText: {marginLeft: 10},
  bottom: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutSvg: {marginRight: 3},
  logoutText: {fontSize: 14, color: 'red'},
  bottomContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});

import * as React from 'react';
// import {StyleSheet, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../theme/Colors';
// import metrics from '../theme/Metrics';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      // initialRouteName={navigationStrings.WALLET}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 48,
          right: 48,
          alignSelf: 'center',
          elevation: 0,
          backgroundColor: Colors.bottomTabBackground,
          height: 70,
          borderRadius: 15,
        },
      }}>
      {/* WALLET SCREEN */}
      {/* <Tab.Screen
        name={navigationStrings.WALLET}
        component={Wallet}
        options={{
          title: navigationStrings.WALLET,
          tabBarIcon: ({focused}: any) => {
            return (
              <View style={styles.tabBarStyle}>
                <View>
                  <WalletSVG height={30} width={30} fill={focused ? Colors.Primary: Colors.Secondary} />
                </View>
                <View>
                  <Text
                    style={{
                      color: focused ? Colors.Primary : Colors.Secondary,
                      fontFamily: 'RedHatDisplay-Medium',
                      fontSize: 14
                    }}>
                    Wallet
                  </Text>
                </View>
              </View>
            );
          },
        }}
      /> */}
    </Tab.Navigator>
  );
}

// const styles = StyleSheet.create({
//   tabBarStyle: {
//     marginTop: Platform.OS === 'ios' ? metrics.doubleBaseMargin : null,
//     alignItems: 'center',
//   },
// });

import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationProp} from '../components/Types';
import navigationStrings from '../constants/navigationStrings';
import {
  BuyToken,
  Calculator,
  Dashboard,
  Profile,
  Subscription,
} from '../screens';
import CustomDrawer from './CustomDrawer';
import DashboardSVG from '../assets/SVG/drawer/dashboard.svg';
import SubscriptionSVG from '../assets/SVG/drawer/subscription.svg';
import BuyTokenSVG from '../assets/SVG/drawer/buy_token.svg';
import CalculatorSVG from '../assets/SVG/drawer/calculator.svg';
import ProfileSVG from '../assets/SVG/drawer/profile.svg';
import DashboardSVGBlue from '../assets/SVG/drawer/dashboard-blue.svg';
import SubscriptionSVGBlue from '../assets/SVG/drawer/subscription-blue.svg';
import BuyTokenSVGBlue from '../assets/SVG/drawer/buy_token-blue.svg';
import CalculatorSVGBlue from '../assets/SVG/drawer/calculator-blue.svg';
import ProfileSVGBlue from '../assets/SVG/drawer/profile-blue.svg';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerLabelStyle: {marginLeft: -20},
        drawerStyle: {
          // height: 700,
          borderBottomRightRadius: 10,
        },
      }}
      initialRouteName={navigationStrings.DASHBOARD}>
      <Drawer.Screen
        name={navigationStrings.DASHBOARD}
        component={Dashboard}
        options={{
          drawerIcon: (props) => props?.focused === true ? <DashboardSVGBlue /> : <DashboardSVG />,
        }}
      />
      <Drawer.Screen
        name={navigationStrings.SUBSCRIPTION}
        component={Subscription}
        options={{drawerIcon: (props) => props?.focused === true ? <SubscriptionSVGBlue /> :<SubscriptionSVG />}}
      />
      <Drawer.Screen
        name={navigationStrings.BUY_TOKEN}
        component={BuyToken}
        options={{drawerIcon: (props) => props?.focused === true ? <BuyTokenSVGBlue /> :<BuyTokenSVG />}}
      />
      <Drawer.Screen
        name={navigationStrings.CALCULATOR}
        component={Calculator}
        options={{drawerIcon: (props) => props?.focused === true ? <CalculatorSVGBlue /> :<CalculatorSVG />}}
      />
      <Drawer.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{drawerIcon: (props) => props?.focused === true ? <ProfileSVGBlue /> :<ProfileSVG />}}
      />
    </Drawer.Navigator>
  );
}

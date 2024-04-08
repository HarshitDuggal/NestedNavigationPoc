import React from 'react';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// Import your screen components
import Home from '../screens/home';
import Profile from '../screens/profile';
import Orders from '../screens/orders';
import Activities from '../screens/activities';
import Learn from '../screens/learn';
import MarketPlace from '../screens/marketPlace';
import Community from '../screens/community';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const DrawerContent = ({navigation}) => {
  return (
    <View>
      <DrawerItem
        label="My Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <DrawerItem
        label="My Orders"
        onPress={() => navigation.navigate('My Orders')}
      />
      <DrawerItem
        label="My Activities"
        onPress={() => navigation.navigate('My Activities')}
      />
    </View>
  );
};

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Home">
      <Drawer.Screen name="My Profile" component={MyProfile} />
      <Drawer.Screen name="My Orders" component={MyOrders} />
      <Drawer.Screen name="My Activities" component={MyActivities} />
    </Drawer.Navigator>
  );
};

const MyOrders = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName="Orders">
        <Tab.Screen options={{headerShown:false, tabBarIcon: () => (
            <Foundation name="home" size={24} /> 
          )}} name="Home" component={Home} />
      <Tab.Screen options={{headerShown:false, tabBarIcon: () => (
            <Foundation name="foundation" size={24} /> 
          )}} name="Learn" component={Learn} />
      <Tab.Screen options={{headerShown:false, tabBarIcon: () => (
            <MaterialIcons name="shopping-bag" size={24} /> 
          )}} name="MarketPlace" component={MarketPlace} />
      <Tab.Screen options={{headerShown:false, tabBarIcon: () => (
            <MaterialIcons name="people-alt" size={24} /> 
          )}} name="Community" component={Community} />
      <Tab.Screen options={{headerShown:false, tabBarButton: () => null}} name="Orders" component={Orders} />
    </Tab.Navigator>
  );
};
const MyProfile = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName="Home">
       <Tab.Screen options={{headerShown:false, tabBarIcon: () => (
            <Foundation name="home" size={24} /> 
          )}} name="Home" component={Home} />
      <Tab.Screen options={{headerShown:false, tabBarIcon: () => (
            <Foundation name="foundation" size={24} /> 
          )}} name="Learn" component={Learn} />
      <Tab.Screen options={{headerShown:false, tabBarIcon: () => (
            <MaterialIcons name="shopping-bag" size={24} /> 
          )}} name="MarketPlace" component={MarketPlace} />
      <Tab.Screen options={{headerShown:false, tabBarIcon: () => (
            <MaterialIcons name="people-alt" size={24} /> 
          )}} name="Community" component={Community} />
      <Tab.Screen options={{headerShown:false, tabBarButton: () => null}} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const MyActivities = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName="Activities">
      <Tab.Screen options={{headerShown:false, tabBarIcon: () => (
            <Foundation name="home" size={24} /> 
          )}} name="Home" component={Home} />
      <Tab.Screen options={{headerShown:false, tabBarIcon: () => (
            <Foundation name="foundation" size={24} /> 
          )}} name="Learn" component={Learn} />
      <Tab.Screen options={{headerShown:false, tabBarIcon: () => (
            <MaterialIcons name="shopping-bag" size={24} /> 
          )}} name="MarketPlace" component={MarketPlace} />
      <Tab.Screen options={{headerShown:false, tabBarIcon: () => (
            <MaterialIcons name="people-alt" size={24} /> 
          )}} name="Community" component={Community} />
      <Tab.Screen options={{headerShown:false, tabBarButton: () => null}} name="Activities" component={Activities} />
    </Tab.Navigator>
  );
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}

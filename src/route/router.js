import * as React from 'react';
import styled from 'styled-components';
import {Button, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const StyledView = styled(View)`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

function SplashScreen({navigation}) {
  return (
    <StyledView>
      <Button
        onPress={() => navigation.navigate('Drawer')}
        title="Main으로 이동"
      />
    </StyledView>
  );
}

function HomeScreen({navigation}) {
  return (
    <StyledView>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="다른 화면으로 이동"
      />
    </StyledView>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <StyledView>
      <Button onPress={() => navigation.navigate('Tab')} title="Go back home" />
    </StyledView>
  );
}

function SettingsScreen() {
  return (
    <StyledView>
      <Text>Settings!</Text>
    </StyledView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Stack.Screen name="Tab" component={MyTab} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Tab" component={MyTab} />
        <Stack.Screen name="Drawer" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

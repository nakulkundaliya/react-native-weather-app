import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import WeatherScreen from '../Containers/WeatherScreen';
import WeatherDetailScreen from '../Containers/WeatherDetailScreen';
import {WeatherDataProps} from '../Interfaces';

export type RootStackParamList = {
  WeatherScreen: undefined;
  WeatherDetailScreen: {detailData: WeatherDataProps};
};

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WeatherScreen">
        <Stack.Screen
          name="WeatherScreen"
          component={WeatherScreen}
          options={{
            title: 'WeatherScreen',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WeatherDetailScreen"
          component={WeatherDetailScreen}
          options={{
            title: 'WeatherDetail',
            headerShown: false,
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;

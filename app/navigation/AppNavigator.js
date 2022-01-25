import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomepageScreen from '../screens/HomepageScreen';
import DetailsScreen from '../screens/DetailsScreen';

function AppNavigator({navigation}) {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homepage"
        component={HomepageScreen}
        options={{headerShown: false, title: 'Home'}}
      />
      <Stack.Screen
        name="DetailPage"
        component={DetailsScreen}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;

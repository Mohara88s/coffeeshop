import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './HomeStack';
import { BucketScreen } from '../screens/BucketScreen/BucketScreen.tsx';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';
import { MainTabParamList } from './types.ts';
import { ROUTES } from '../constants/routes';
import Icon from 'react-native-vector-icons/Fontisto';

const Tab = createBottomTabNavigator<MainTabParamList>();

const renderTabBarIcon = (route: any, color: string, size: number) => {
  let iconName = 'dot-fill';

  if (route.name === ROUTES.HomeStack) {
    iconName = 'home';
  } else if (route.name === ROUTES.BucketScreen) {
    iconName = 'shopping-bag';
  } else if (route.name === ROUTES.ProfileScreen) {
    iconName = 'person';
  }
  return <Icon name={iconName} size={size} color={color} />;
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => renderTabBarIcon(route, color, size),
          tabBarActiveTintColor: '#006ffd',
          tabBarInactiveTintColor: '#828282',
        })}
      >
        <Tab.Screen
          name={ROUTES.HomeStack}
          component={HomeStack}
          options={{
            title: 'Home',
          }}
        />
        <Tab.Screen
          name={ROUTES.BucketScreen}
          component={BucketScreen}
          options={{
            title: 'Bucket',
          }}
        />
        <Tab.Screen
          name={ROUTES.ProfileScreen}
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

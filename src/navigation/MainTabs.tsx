import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './HomeStack.tsx';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen.tsx';
import { MainTabParamList } from './types.ts';
import { ROUTES } from '../constants/routes.ts';
import Icon from 'react-native-vector-icons/Fontisto';

const Tab = createBottomTabNavigator<MainTabParamList>();

const renderTabBarIcon = (route: any, color: string) => {
  let iconName = 'dot-fill';
  const CUSTOM_SIZE = 20;

  if (route.name === ROUTES.HomeStack) {
    iconName = 'home';
  } else if (route.name === ROUTES.BucketTab) {
    iconName = 'shopping-bag';
  } else if (route.name === ROUTES.ProfileScreen) {
    iconName = 'person';
  }
  return <Icon name={iconName} size={CUSTOM_SIZE} color={color} />;
};

const EmptyComponent = () => null;

export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => renderTabBarIcon(route, color, size),
        tabBarActiveTintColor: '#006ffd',
        tabBarInactiveTintColor: '#828282',
        tabBarStyle: {
          paddingTop:10,
        },
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
        name={ROUTES.BucketTab}
        component={EmptyComponent}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault(); // Забороняємо перемикання вкладки всередині табів
            navigation.getParent()?.navigate(ROUTES.BucketScreen); // Відкриваємо справжній Bucket у RootStack
          },
        })}
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
  );
};

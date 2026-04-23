import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamList } from './types';
import { ROUTES } from '../constants/routes';
import { HomeScreen } from '../screens/HomeScreen/HomeScreen.tsx';
import { CategoryScreen } from '../screens/CategoryScreen/CategoryScreen.tsx';
import { ProductDetailsScreen } from '../screens/ProductDetailsScreen/ProductDetailsScreen.tsx';
import { Platform } from 'react-native';
import { BackButton } from '../components/BackButton/BackButton.tsx';

const Stack = createStackNavigator<HomeStackParamList>();

const renderHeaderLeft = (navigation: any) => {
  if (Platform.OS === 'ios') return undefined;

  return <BackButton onPress={() => navigation.goBack()} />;
};

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HomeScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={ROUTES.HomeScreen}
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />

      <Stack.Screen
        name={ROUTES.CategoryScreen}
        component={CategoryScreen}
        options={({ route, navigation }) => ({
          headerShown: true,
          headerTitleAlign: 'center',
          title: route.params?.category || 'Category',
          headerLeft: () => renderHeaderLeft(navigation),
        })}
      />

      <Stack.Screen
        name={ROUTES.ProductDetailsScreen}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};

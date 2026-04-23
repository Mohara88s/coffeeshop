import type { NavigatorScreenParams } from '@react-navigation/native';

export type HomeStackParamList = {
  HomeScreen: undefined;
  CategoryScreen: { category: string };
  ProductDetailsScreen: {
    productId: number;
  };
};
export type MainTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  BucketScreen: undefined;
  ProfileScreen: undefined;
};

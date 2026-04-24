import type { NavigatorScreenParams } from '@react-navigation/native';

export type HomeStackParamList = {
  HomeScreen: undefined;
  CategoryScreen: { category: string };
};
export type MainTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  BucketTab: undefined;
  ProfileScreen: undefined;
};

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>;
  ProductDetailsScreen: {
    productId: number;
  };
  BucketScreen: undefined;
};

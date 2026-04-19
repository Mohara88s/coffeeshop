/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PRODUCTS_DATA } from './src/store/products.ts';
import { ProductCardsList } from './src/components/ProductCardsList/ProductCardsList.tsx';
import { ProductCardDetailed } from './src/components/ProductCardDetailed/ProductCardDetailed.tsx';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <ProductCardsList title='Perfect for you' list={PRODUCTS_DATA} />
        <ProductCardsList title='Hot offers' list={PRODUCTS_DATA} />
        <ProductCardDetailed {...PRODUCTS_DATA[0]}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 10,
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 1,
  },
});

export default App;

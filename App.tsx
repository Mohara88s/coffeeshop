import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppNavigator } from './src/navigation/AppNavigator.tsx';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './src/store/store.ts';

function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <SafeAreaProvider>
          <ThemeProvider>
            <AppNavigator />
          </ThemeProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;

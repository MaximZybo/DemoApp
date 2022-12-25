import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootStackNavigator} from '@/Navigation/RootStackNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootStackNavigator />
    </SafeAreaProvider>
  );
};

export default App;

import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from '@/Store/index';
import {RootStackNavigator} from '@/Navigation/RootStackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootStackNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

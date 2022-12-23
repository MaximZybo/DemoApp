import React from 'react';
import {SafeAreaView} from 'react-native';
import {RootStackNavigator} from '@/Navigation/RootStackNavigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootStackNavigator />
    </SafeAreaView>
  );
};

export default App;

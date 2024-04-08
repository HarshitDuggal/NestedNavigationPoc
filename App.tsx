import * as React from 'react';
import {View} from 'react-native';
import AppNavigation from './src/navigation/appNavigation';


export default function App() {
  return (
    <View style={{flex: 1}}>
      <AppNavigation />
    </View>
  );
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';
import {
  View,
} from 'react-native';
import RootNavigation from './src/navigation/RootNavigationView';
import { NavigationContainer } from '@react-navigation/native';


function App(): JSX.Element {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <View style={{ flex: 1, backgroundColor: '#FFEEDD' }}>
          <RootNavigation />
        </View>
      </NavigationContainer>
    </GestureHandlerRootView>

  );
}

export default App;

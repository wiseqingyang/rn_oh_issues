import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeNavigation from './HomeNavigation';
import PdfPage from '../pages/PdfPage';
import KeyboardPage from '../pages/KeyboardPage';
import GesturePage from '../pages/GesturePage';
import VideoPage from '../pages/VideoPage';

interface IProps { }

const Stack = createStackNavigator()

const RootNavigation: FC<IProps> = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

      }}>
        <Stack.Screen name='HomeNavigation' component={HomeNavigation} />
        <Stack.Screen name='Pdf' component={PdfPage} />
        <Stack.Screen name='Keyboard' component={KeyboardPage} />
        <Stack.Screen name='Gesture' component={GesturePage} />
        <Stack.Screen name='Video' component={VideoPage} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default RootNavigation;

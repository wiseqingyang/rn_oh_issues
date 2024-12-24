import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import HomeNavigation from './HomeNavigation';
import ListPage from '../pages/ListPage';

interface IProps { }

const Stack = createStackNavigator()

const RootNavigation: FC<IProps> = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

      }}>
        <Stack.Screen name='HomeNavigation' component={HomeNavigation} />
        <Stack.Screen name='List' component={ListPage} />
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

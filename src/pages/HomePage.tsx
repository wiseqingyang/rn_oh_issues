import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

interface IProps { }

const HomePage: FC<IProps> = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header level={1} >
        HomePage
      </Header>
      <Button title='跳转' onPress={() => {
        navigation.navigate('List')
      }} />
      <View style={{ flex: 1 }} />
      <Text style={{ color: 'white', margin: 16 }}>⬇️⬇️⬇️⬇️切换Tab 会导致tab不显示⬇️⬇️⬇️⬇️</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#770033'
  }
});
export default HomePage;
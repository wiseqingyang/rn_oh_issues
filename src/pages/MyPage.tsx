import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

interface IProps { }

const MyPage: FC<IProps> = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header level={1} >
        MyPage
      </Header>
      <Button title='跳转' onPress={() => {
        navigation.navigate('List')
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'cyan'
  }
});
export default MyPage;
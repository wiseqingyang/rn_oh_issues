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
      <View style={{ flex: 1 }} />
      <Text style={{ color: 'white', margin: 16 }}>⬇️⬇️切换Tab 会导致带lottie的tab不显示⬇️⬇️</Text>
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
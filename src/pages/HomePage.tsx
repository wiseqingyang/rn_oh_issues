import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';

interface IProps { }

const HomePage: FC<IProps> = () => {
  const navigation = useNavigation();

  const problems = [
    {
      title: 'pdf展示和放大问题',
      route: 'Pdf'
    },
    {
      title: '键盘事件问题',
      route: 'Keyboard'
    },
    {
      title: '手势问题',
      route: 'Gesture'
    },
    {
      title: '视频问题',
      route: 'Video'
    }
  ]
  return (
    <View style={styles.container}>
      <Header level={1} >
        HomePage
      </Header>
      <Button disabled title={'点击底部tab，复现 lottie icon问题'} onPress={() => {
      }} />
      {
        problems.map((item, index) => {
          return (
            <View key={index}>
              <Button title={item.title} onPress={() => {
                navigation.navigate(item.route as unknown as never)
              }} />
            </View>
          )
        })
      }
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
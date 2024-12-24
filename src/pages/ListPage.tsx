import React, { FC, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { TabView } from '@react-native-oh-tpl/react-native-tab-view';
import Pdf from '@react-native-oh-tpl/react-native-pdf';
import Video from '@react-native-oh-tpl/react-native-video';

interface IProps { }

const routes = [
  { key: 'first', title: 'First' },
  { key: 'second', title: 'Second' },
]

const ListPage: FC<IProps> = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Header level={1} >
        ListPage
      </Header>
      <Button title='返回' onPress={() => {
        navigation.goBack()
      }} />

      <TabView
        onIndexChange={setIndex}
        navigationState={{ index, routes }}
        renderScene={({ route }) => {
          if (route.key === 'first') {
            return (
              <View style={{ flex: 1 }}>
                <Text>PDF双指放大会抖动</Text>
                <Pdf
                  source={{ uri: 'https://cxp-pubcos.yili.com/prod-yida-center/af547e2321eb48e7a0466197298cb22a.pdf' }}
                  trustAllCerts={false}
                  style={{ flex: 1, backgroundColor: 'transparent' }}
                />
              </View>

            );
          } else if (route.key === 'second') {
            return (
              <View style={{ flex: 1 }}>
                <Text>视频无法全屏</Text>
                <Video
                  controls
                  resizeMode='contain'
                  style={{ margin: 16, width: 300, height: 100, backgroundColor: 'cyan' }}
                  source={{ uri: 'https://cxp-pubcos.yili.com/prod-yida-center/830a1b76ccdd4a229721e08482fc503d.mp4' }}
                />
              </View>)
          }
          else {
            return (
              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={({ item }) => (
                  <View style={{
                    backgroundColor: 'orange',
                    margin: 16
                  }}>
                    <Header level={item} >
                      {route.title}
                    </Header>
                  </View>
                )}
              />
            )
          }
        }

        }
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default ListPage;
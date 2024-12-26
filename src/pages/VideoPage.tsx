import Video, { VideoRef } from '@react-native-oh-tpl/react-native-video';
import React, { FC, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

interface IProps { }

const VideoPage: FC<IProps> = () => {
  const ref = useRef<VideoRef>(null);
  return (
    <View style={styles.container}>
      <Text>问题：视频无法全屏播放</Text>
      <Button title='全屏' onPress={() => {
        ref.current?.presentFullscreenPlayer()
      }}
      />
      <Video
        controls
        ref={ref}
        resizeMode='contain'
        style={{ margin: 16, width: 300, height: 200 * 9 / 16, backgroundColor: 'cyan' }}
        source={{ uri: 'https://cxp-pubcos.yili.com/prod-yida-center/c8c58cb983b14d7b889c57edaf2a599d.mp4' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default VideoPage;
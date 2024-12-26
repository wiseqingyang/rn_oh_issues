import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useSharedValue } from 'react-native-reanimated';

interface IProps { }

const GesturePage: FC<IProps> = () => {
  const dragging = useSharedValue(false);

  const { width } = useWindowDimensions();

  const total = 100;
  const [progress, setProgress] = useState(0);

  const sharedProgress = useSharedValue(progress);


  const panGesture = Gesture.Pan()
    .activeOffsetX([-10, 10])
    .onStart(() => {
      dragging.value = true;
    })
    .onChange(e => {
      if (total > 0) {
        const addRate = (e.changeX / width) * 0.9;
        const newCurrent =
          sharedProgress.value + addRate * total;

        const newPos = Math.max(Math.min(newCurrent, total), 0);
        runOnJS(setProgress)(newPos);
        sharedProgress.value = newPos;
        console.log('newPos', newPos, dragging.value);
      }
    })
    .onEnd(() => {
      dragging.value = false;
      console.log('end', dragging.value);
    })
    .onFinalize(() => {
      dragging.value = false;
      console.log('finalize', dragging.value);
    });


  return (
    <View style={styles.container}>
      <Text>问题：手势事件延迟</Text>
      <Text>{"复现步骤: \n 持续多次快速左右滑动下面青色区域,持续滑动几秒"}</Text>
      <Text>手势停止后动画和事件存在明显的延迟</Text>
      <Text>在页面元素较多时会更加明显</Text>
      <View style={{ width: '100%', height: 200, backgroundColor: 'cyan' }}>
        <GestureDetector gesture={panGesture}>
          <Animated.View style={StyleSheet.absoluteFillObject}>
            <Text style={{ marginTop: 30 }}>{`手势进度：${progress}`}</Text>
            <View style={{
              width: '100%',
              height: 10,
              backgroundColor: '#444',
              marginTop: 'auto'
            }}>
              <View style={{
                width: `${progress}%`,
                height: 10,
                backgroundColor: '#f00',
                position: 'absolute',
                top: 0,
                left: 0,
              }} />
            </View>
          </Animated.View>
        </GestureDetector>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default GesturePage;
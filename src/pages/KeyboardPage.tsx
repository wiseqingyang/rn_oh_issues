import { TextInput } from '@react-native-oh-tpl/react-native-gesture-handler';
import React, { FC, useEffect, useState } from 'react';
import { View, Text, Keyboard, StyleSheet, KeyboardEvent, KeyboardAvoidingView } from 'react-native';
import Animated, { useAnimatedKeyboard, useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface IProps { }


type ScreenRect = {
  screenX: number;
  screenY: number;
  width: number;
  height: number;
};

const emptyCoordinates: ScreenRect = Object.freeze({
  screenX: 0,
  screenY: 0,
  width: 0,
  height: 0,
});

type Coordinates = {
  start?: ScreenRect;
  end?: ScreenRect;
};

const initialValue: Coordinates = {
  start: emptyCoordinates,
  end: emptyCoordinates,
};

const KeyboardPage: FC<IProps> = () => {

  const [shown, setShown] = useState<boolean>(false);
  const [coordinates, setCoordinates] = useState<Coordinates>(initialValue);
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  const handleKeyboardWillShow = (e: KeyboardEvent) => {
    console.log('keyboardWillShow', e.startCoordinates, e.endCoordinates);
    setCoordinates({ start: e.startCoordinates, end: e.endCoordinates });
    setKeyboardHeight(e.endCoordinates.height);
  };
  const handleKeyboardDidShow = (e: KeyboardEvent) => {
    setShown(true);
    console.log('keyboardDidShow', e.startCoordinates, e.endCoordinates);
    setCoordinates({ start: e.startCoordinates, end: e.endCoordinates });
    setKeyboardHeight(e.endCoordinates.height);
  };
  const handleKeyboardWillHide = (e: KeyboardEvent) => {
    console.log('keyboardWillHide', e.startCoordinates, e.endCoordinates);
    setCoordinates({ start: e.startCoordinates, end: e.endCoordinates });
    setKeyboardHeight(0);
  };
  const handleKeyboardDidHide = (e: KeyboardEvent) => {
    console.log('keyboardDidHide', e.startCoordinates, e.endCoordinates);
    setShown(false);
    if (e) {
      setCoordinates({ start: e.startCoordinates, end: e.endCoordinates });
      setKeyboardHeight(0);
    } else {
      setCoordinates(initialValue);
      setKeyboardHeight(0);
    }
  };

  useEffect(() => {
    const listeners = [
      Keyboard.addListener('keyboardWillShow', handleKeyboardWillShow),
      Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow),
      Keyboard.addListener('keyboardWillHide', handleKeyboardWillHide),
      Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide),
    ];
    return () => listeners.forEach(listener => listener.remove());
  }, []);


  const { height: animatedHeight } = useAnimatedKeyboard();

  const animatedStyle = useAnimatedStyle(() => ({
    height: withTiming(animatedHeight.value + 50),
    backgroundColor: 'cyan',
    width: 200
  }));


  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <Text>问题：useAnimatedKeyboard 返回键盘高度无变化 </Text>
      <Text>问题：KeyboardAvoidingView 不会把输入框顶到应有的位置 </Text>
      <Text>{`是否显示键盘：${shown}`}</Text>
      <Text>{`键盘高度:${keyboardHeight}`}</Text>
      <Animated.View style={animatedStyle} >
        <Text>此View高度为 animatedKeyboard 的高度，最低50</Text>
      </Animated.View>
      <TextInput placeholder='点我呼出键盘' style={{
        width: 200,
        height: 40,
        borderWidth: 1,
        marginTop: 'auto',
      }} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default KeyboardPage;
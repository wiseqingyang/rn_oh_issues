import React, { FC, useEffect, useState } from 'react';
import { View, Text, DeviceEventEmitter } from 'react-native';
import Lottie from 'lottie-react-native';

interface ICustomTabProps {
  icon: string | { uri: string };
  name: string;
  focused: boolean;
  routeName: string;
  tintColor: string;
}

const CustomTab: FC<ICustomTabProps> = ({
  icon,
  name,
  focused,
  routeName,
  tintColor,
}) => {

  const ref = React.useRef<Lottie | null>(null);


  useEffect(() => {
    const listener = DeviceEventEmitter.addListener('tabPress', data => {
      if (data?.name === routeName && focused) {
        ref.current?.play();
      }
      if (data.name !== routeName && focused) {
        ref.current?.reset();
      }
    });

    return () => {
      listener.remove();
    };
  }, [])

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {!!icon && (
        <>
          <Lottie
            style={{
              width: 22,
              height: 22,
            }}
            ref={ref}
            source={icon}
            autoPlay={focused}
            loop={false}
            speed={1.5}
            progress={0}
          />
          {!!name && (
            <Text
              style={{
                marginTop: 6,
                fontSize: 11,
                textAlign: 'center',
                color: focused ? tintColor : '#69696B',
              }}>
              {name}
            </Text>
          )}
        </>
      )}
    </View>
  );
};

export default CustomTab;

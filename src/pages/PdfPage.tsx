import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Pdf from '@react-native-oh-tpl/react-native-pdf';


interface IProps { }

const PdfPage: FC<IProps> = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>PDF双指放大会抖动</Text>
      <Text>PDF不能自适应大小</Text>
      <Pdf
        page={0}
        source={{ uri: 'https://cxp-pubcos.yili.com/prod-yida-center/af547e2321eb48e7a0466197298cb22a.pdf' }}
        trustAllCerts={false}
        style={{ flex: 1, backgroundColor: 'transparent', padding: 0 }}
      />
    </View>
  );
};


export default PdfPage;
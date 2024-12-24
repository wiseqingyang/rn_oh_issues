import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';

interface IProps {
  level: number;
  children: React.ReactNode;
}

const fontSizes = [24, 24, 20, 16, 12, 8]

const Header: FC<IProps> = ({ level, children }) => {
  return (
    <Text style={{
      fontSize: fontSizes[level] || 14, color: '#112233'
    }}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({ container: {} });
export default Header;
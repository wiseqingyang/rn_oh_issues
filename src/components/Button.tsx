import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface IProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<IProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Button;

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface IProps {
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

const Button: React.FC<IProps> = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled}>
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

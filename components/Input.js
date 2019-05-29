import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => (
  <View style={styles.container}>
    <Text style={styles.label}> {label} </Text>
    <TextInput
      autoCorrect={false}
      label={label}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      value={value}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    borderColor: '#eee',
    borderBottomWidth: 2,
  },
  label: {
    padding: 5,
    paddingBottom: 0,
    color: '#333',
    fontSize: 20,
    width: '100%',
  },
  input: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 2,
    color: '#333',
    fontWeight: 'bold',
    fontSize: 18,
    width: '100%',
  },
});

export { Input };

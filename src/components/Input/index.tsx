import React from 'react';
import {View, TextInput, Text} from 'react-native';
import type {TextInputProps} from 'react-native';

// Styles
import {styles} from './styles';

interface InputProps extends TextInputProps {
  error?: string;
}

function Input({error, ...props}: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput} {...props} />
      {error && <Text style={styles.errorText}>* {error}</Text>}
    </View>
  );
}

export {Input};

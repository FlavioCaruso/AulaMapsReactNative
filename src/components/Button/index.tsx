import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

// Styles
import {styles} from './styles';

// Hooks
import useButton from './useButton';

export type ButtonType = 'primary' | 'secondary' | 'transparent';

interface ButtonProps extends TouchableOpacityProps {
  type: ButtonType;
  text: string;
}

function Button({type, text, ...props}: ButtonProps) {
  const {buttonStyle} = useButton();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, buttonStyle(type).container]}
      {...props}>
      <Text style={[styles.text, buttonStyle(type).text]}>{text}</Text>
    </TouchableOpacity>
  );
}

export {Button};

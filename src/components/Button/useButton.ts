import type {TextStyle, ViewStyle} from 'react-native/types';

import type {ButtonType} from '.';

interface ButtonStyleType {
  container?: ViewStyle;
  text?: TextStyle;
}

export default function useButton() {
  const buttonStyle = (type: ButtonType): ButtonStyleType => {
    switch (type) {
      case 'primary':
        return {
          container: {
            backgroundColor: '#ed145b',
          },
          text: {
            color: '#FFF',
          },
        };
      case 'secondary':
        return {
          container: {
            backgroundColor: '#FFF',
          },
          text: {
            color: '#be0e49',
          },
        };
      case 'transparent':
        return {
          container: {
            backgroundColor: 'transparent',
          },
          text: {
            color: '#be0e49',
          },
        };

      default:
        return {};
    }
  };

  return {
    buttonStyle,
  };
}

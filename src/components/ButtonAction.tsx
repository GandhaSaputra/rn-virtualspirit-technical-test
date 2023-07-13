import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {globalStyles} from '../theme/GlobalStyles';

interface ButtonAction {
  onLikeOrDislikeOrResetAllLikeFeed: () => void;
  title: string;
  disabled?: boolean;
}

const ButtonAction: FC<ButtonAction> = ({
  onLikeOrDislikeOrResetAllLikeFeed,
  title,
  disabled,
}) => {
  const containerStyle = () => {
    if (title === 'Like All') {
      return styles.buttonLike;
    }
    if (title === 'Dislike All') {
      return styles.buttonDislike;
    }
    return styles.buttonResetAll;
  };

  const textStyle = () => {
    if (title === 'Reset All') {
      return styles.grayText;
    }
    return styles.whiteText;
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onLikeOrDislikeOrResetAllLikeFeed}
      style={containerStyle()}>
      <Text style={textStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonAction;

const styles = StyleSheet.create({
  buttonLike: {
    backgroundColor: '#4960ad',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    ...globalStyles.shadow,
  },
  buttonDislike: {
    backgroundColor: '#ad4956',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    ...globalStyles.shadow,
  },
  buttonResetAll: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#b8bab9',
    ...globalStyles.shadow,
  },
  whiteText: {
    color: 'white',
    fontWeight: '500',
  },
  grayText: {
    color: 'gray',
    fontWeight: '500',
  },
});

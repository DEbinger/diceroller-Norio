import React from 'react';
import { View, TouchableHighlight, TouchableNativeFeedback, Text, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $buttonColor: 'firebrick',
  $buttonTextColor: '#ffffff',
  $buttonUnderlayColor: '#7BAAF9',
  button: {
    backgroundColor: '$buttonColor',
    paddingVertical: 20,
    paddingHorizontal: 35,
    '@media ios': {
      borderRadius: 100,
      width: '35%'
    },
    '@media android': {
      borderRadius: 1,
      elevation: 4,
    },
  },
  text: {
    color: '$buttonTextColor',
    fontSize: 15,
    textAlign: 'center',
  },
});

export const Button = ({ text, onPress }) => {
  if (Platform.OS === 'ios') {
    return (
      <TouchableHighlight
        onPress={onPress}
        style={styles.button}
        underlayColor={styles.$buttonUnderlayColor}
      >
        <Text style={styles.text}>{text}</Text>

      </TouchableHighlight>
    );
  }

  return (

    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(styles.$buttonUnderlayColor)}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};


import React, {useRef, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

export default function Loading() {
  useEffect(() => {
    spin;
  }, []);

  const rotateAnim = useRef(new Animated.Value(0)).current;

  // Will change fadeAnim value to 1 in 5 seconds
  Animated.timing(rotateAnim, {
    toValue: 1,
    duration: 5000,
    useNativeDriver: true,
  }).start();

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Text style={{transform: [{rotate: spin}]}}>
        <Icon color="#FFF" name="spinner" size={64} />
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1F93F5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

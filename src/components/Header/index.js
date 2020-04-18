import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import logo from '../../assets/logo.png';

import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Icon name="bars" size={24} color="#FFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: 32,
  },
});

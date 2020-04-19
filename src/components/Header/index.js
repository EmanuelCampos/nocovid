import React, {useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import Locales from '../Locales';

import logo from '../../assets/logo.png';

import Icon from 'react-native-vector-icons/FontAwesome';

// import { Container } from './styles';

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.menuGroup}>
        <TouchableOpacity onPress={() => setMenu(!menu)}>
          <Icon name="bars" size={24} color="#FFF" />
        </TouchableOpacity>
        {/* {menu === true && <Locales />} */}
      </View>
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
  menuGroup: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import 'intl';
import 'intl/locale-data/jsonp/pt';

// import { Container } from './styles';

export default function BoxText({color, title, text}) {
  const styles = getStyles({color});

  return (
    <TouchableOpacity style={styles.boxClick}>
      <Text style={styles.boxText}>{title}</Text>
      <Text style={styles.boxDescription}>{text}</Text>
    </TouchableOpacity>
  );
}

const getStyles = ({color}) => {
  return StyleSheet.create({
    backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',
    },
    boxClick: {
      backgroundColor: color,
      height: 97,

      borderRadius: 8,

      justifyContent: 'space-between',
      padding: 16,
      margin: 5,

      flexGrow: 1,
      flexShrink: 0,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 1,
      shadowRadius: 3,

      elevation: 3,

      marginTop: 24,
      minWidth: 147,
    },

    boxText: {
      fontSize: 12,
      color: '#FFF',
    },

    boxDescription: {
      fontSize: 24,
      color: '#FFF',

      fontWeight: 'bold',
    },
  });
};

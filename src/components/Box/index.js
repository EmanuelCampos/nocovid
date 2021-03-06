import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import 'intl';
import 'intl/locale-data/jsonp/pt';

// import { Container } from './styles';

export default function Box({color, title, track}) {
  const styles = getStyles({color});

  return (
    <>
      <TouchableOpacity style={styles.boxAffected}>
        <Text style={styles.boxText}>{title}</Text>
        <Text style={styles.boxDescription}>
          {Intl.NumberFormat('pt-BR', {maximumSignificantDigits: 8}).format(
            track,
          )}
        </Text>
      </TouchableOpacity>
    </>
  );
}

const getStyles = ({color}) => {
  return StyleSheet.create({
    boxAffected: {
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

// const styles = StyleSheet.create({
//   boxAffected: {
//     height: 97,

//     borderRadius: 8,

//     justifyContent: 'space-between',
//     padding: 16,
//     margin: 5,

//     flexGrow: 1,
//     flexShrink: 0,

//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 7,
//     },
//     shadowOpacity: 1,
//     shadowRadius: 3,

//     elevation: 3,

//     minWidth: 147,
//   },

//   boxText: {
//     fontSize: 12,
//     color: '#FFF',
//   },

//   boxDescription: {
//     fontSize: 24,
//     color: '#FFF',

//     fontWeight: 'bold',
//   },
// });

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import 'intl';
import 'intl/locale-data/jsonp/en';

// import { Container } from './styles';

export default function Box({color, title, track}) {
  const styles = getStyles({color});

  return (
    <View style={styles.boxAffected}>
      <Text style={styles.boxText}>{title}</Text>
      <Text style={styles.boxDescription}>
        {track}
        {/* {Intl.NumberFormat('en-US', {maximumSignificantDigits: 3}).format(
          track,
        )} */}
      </Text>
    </View>
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

import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import 'intl';
import 'intl/locale-data/jsonp/en';

// import { Container } from './styles';

export default function Box({color, title, track, action}) {
  const styles = getStyles({color});

  return (
    <TouchableOpacity onPress={action} style={styles.boxAffected}>
      <Text style={styles.boxText}>{title}</Text>
      <Text style={styles.boxDescription}>
        {track}
        {/* {Intl.NumberFormat('en-US', {maximumSignificantDigits: 3}).format(
          track,
        )} */}
      </Text>
    </TouchableOpacity>
  );
}

const getStyles = ({color}) => {
  return StyleSheet.create({
    backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',
    },
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

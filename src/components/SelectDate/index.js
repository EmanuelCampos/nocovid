import axios from 'axios';

import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

export default function SelectDate() {
  const [active, setActive] = useState(true);
  const [today, setToday] = useState([]);

  const styles = getActive({active});

  async function handleActiveMenu(e) {
    const response = await axios.get(
      'https://corona.lmao.ninja/v2/countries/brazil',
    );

    const {todayCases, todayDeaths} = response.data;

    setToday(todayCases, todayDeaths);
  }

  return (
    <View style={styles.container}>
      <View style={styles.selectBar}>
        <TouchableOpacity style={styles.selectButton}>
          <Text style={styles.selectText}>Até o momento</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled
          onPress={(e) => handleActiveMenu(e.target)}
          style={styles.selectButtonTwo}>
          <Text style={styles.selectText}>Hoje</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const getActive = ({active}) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 8,
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderRadius: 40,
      width: 350,
      height: 54,
    },
    selectButton: {
      flexGrow: 1,
      flexShrink: 1,
      backgroundColor: '#FFF',
      height: 40,
      borderRadius: 40,
      width: 175,
      marginLeft: 15,

      justifyContent: 'center',
      alignItems: 'center',
    },
    selectButtonTwo: {
      flexGrow: 1,
      flexShrink: 1,
      height: 40,
      borderRadius: 40,
      width: 150,
      marginLeft: 15,

      justifyContent: 'center',
      alignItems: 'center',
    },
    selectText: {
      color: '#2879C9',
    },
  });
};

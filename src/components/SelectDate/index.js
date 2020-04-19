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

  return <View style={styles.container} />;
}

const getActive = ({active}) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Suspense,
} from 'react-native';

import Header from '../../components/Header';
import SelectDate from '../../components/SelectDate';
import Box from '../../components/Box';
import Loading from '../../components/Loading';
import Charts from '../../components/Charts';

import bg from '../../assets/background.png';

export default function Main({color, title, track}) {
  const [loading, setLoading] = useState(true);
  const [tracker, setTracker] = useState([]);

  useEffect(() => {
    async function getTracker() {
      const response = await axios.get(
        'https://corona.lmao.ninja/v2/countries/brazil',
      );
      setTracker(response.data);
      setLoading(false);
    }

    getTracker();
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1F93F5" />
      <ImageBackground
        resizeMode="contain"
        source={bg}
        style={styles.backgroundImage}>
        {loading ? (
          <Loading></Loading>
        ) : (
          <SafeAreaView style={styles.container}>
            <Header />
            <SelectDate />
            <Text style={styles.casesText}>
              Casos no <Text style={{fontWeight: 'bold'}}>Brasil</Text>
            </Text>
            <View style={styles.content}>
              <Box track={tracker.cases} title="Casos" color="#FFB259" />
              <Box track={tracker.deaths} title="Mortos" color="#FF5959" />
              <Box track={tracker.recovered} title="Curados" color="#4DD97B" />
              <Box track={tracker.active} title="Ativos" color="#4CB1FB" />
              <Charts track={tracker} />
            </View>
          </SafeAreaView>
        )}
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '62.5%',
    flex: 1,
  },

  casesText: {
    color: '#FFF',
    paddingHorizontal: 30,
    marginTop: 16,
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 25,
    marginTop: 8,
  },
});

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
  TouchableOpacity,
  Suspense,
} from 'react-native';


import 'intl';
import 'intl/locale-data/jsonp/pt';


import Header from '../../components/Header';
import SelectDate from '../../components/SelectDate';

import Box from '../../components/Box';
import BoxText from '../../components/BoxText';

import Loading from '../../components/Loading';
import Charts from '../../components/Charts';

import bg from '../../assets/background.png';
import headset from '../../assets/headset.svg';


export default function Main({}) {
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
            <View style={styles.descriptionBox}>
            <Text style={styles.casesText}>
              Casos no <Text style={{fontWeight: 'bold'}}>Brasil</Text>
            </Text>
            <Text style={styles.updatedText}>Ultima atualização : {Intl.DateTimeFormat('pt-BR').format(tracker.updated)}
            </Text>
            </View>
            <View style={styles.content}>
              <Box track={tracker.cases} title="Casos" color="#FFB259" />
              <Box track={tracker.deaths} title="Óbitos" color="#FF5959" />
              <Box track={tracker.recovered} title="Recuperados" color="#4DD97B" />
              <Box track={tracker.active} title="Ativos" color="#4CB1FB" />
              <Charts track={tracker} />

              <TouchableOpacity style={{flex: 1, height: 56, paddingTop: 24}}>
              <BoxText text="DISQUE 136" title="Precisando de Ajuda ?" color="#404040"/>
              </TouchableOpacity>
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

  descriptionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  casesText: {
    color: '#FFF',
    paddingHorizontal: 30,
    marginTop: 16,

  },

  updatedText: {
    color: '#FFF',
    paddingHorizontal: 35,
    marginTop: 16,
    fontSize: 8,
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

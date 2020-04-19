import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import styles from './styles';

import 'intl';
import 'intl/locale-data/jsonp/pt';

import Header from '../../components/Header';
import SelectDate from '../../components/SelectDate';
import Box from '../../components/Box';
import Loading from '../../components/Loading';
import Charts from '../../components/Charts';

import bg from '../../assets/background.png';

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
      {loading ? (
        <Loading />
      ) : (
        <SafeAreaView style={styles.container}>
          <ImageBackground
            resizeMode="contain"
            source={bg}
            style={styles.backgroundImage}>
            <Header />
            <SelectDate />
            <View style={styles.descriptionBox}>
              <Text style={styles.casesText}>
                Casos no <Text style={styles.textBold}>Brasil</Text>
              </Text>
              <Text style={styles.updatedText}>
                Ultima atualização :{' '}
                {Intl.DateTimeFormat('pt-BR').format(tracker.updated)}
              </Text>
            </View>
            <View style={styles.content}>
              <Box
                action={() => console.log('testando')}
                track={tracker.cases}
                title="Casos"
                color="#FFB259"
              />
              <Box
                action={() => console.log('testando')}
                track={tracker.deaths}
                title="Mortos"
                color="#FF5959"
              />
              <Box
                action={() => console.log('testando')}
                track={tracker.recovered}
                title="Recuperados"
                color="#4DD97B"
              />
              <Box
                action={() => console.log('testando')}
                track={tracker.active}
                title="Ativos"
                color="#4CB1FB"
              />
              <Charts track={tracker} />

              <View style={styles.diskHelp}>
                <Box
                  action={() => console.log('testando')}
                  track="DISQUE 136"
                  title="Precisando de Ajuda ?"
                  color="#404040"
                />
              </View>
            </View>
          </ImageBackground>
        </SafeAreaView>
      )}
    </>
  );
}

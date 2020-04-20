import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import 'intl';
import 'intl/locale-data/jsonp/pt';

// import bg from '../../assets/background.png'
import Header from '../../components/Header';

import BoxEvery from '../../components/BoxEvery';
import BoxToday from '../../components/BoxToday';
import BoxText from '../../components/BoxText';

import Loading from '../../components/Loading';
import ChartsEveryDay from '../../components/ChartsEveryDay';
import ChartsToday from '../../components/ChartsToday';

import styles from './styles';

export default function Main({}) {
  const [tracker, setTracker] = useState([]);
  const [loading, setLoading] = useState(true);

  const [btnSelect, setBtnSelected] = useState(1);

  const [moment, setMoment] = useState('everyday');

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

  const options = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1F93F5" />
      <ScrollView vertical style={styles.scrollview}>
        <ImageBackground style={styles.backgroundImage} />
        <Header />
        {loading ? (
          <Loading />
        ) : (
          <SafeAreaView style={([styles.container], {zIndex: 0})}>
            <View style={styles.selectContainer}>
              <View style={styles.selectBar}>
                <TouchableOpacity
                  onPress={() => setMoment('everyday')}
                  style={
                    moment === 'everyday'
                      ? styles.selectButton
                      : styles.selectButtonTwo
                  }>
                  <Text style={styles.selectText}>Até o momento</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setMoment('today')}
                  style={
                    moment === 'today'
                      ? styles.selectButton
                      : styles.selectButtonTwo
                  }>
                  <Text style={styles.selectText}>Hoje</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.descriptionBox}>
              <Text style={styles.casesText}>
                Casos no <Text style={{fontWeight: 'bold'}}>Brasil</Text>
              </Text>
              <Text style={styles.updatedText}>
                Última atualização :{' '}
                {Intl.DateTimeFormat('pt-BR', options).format(tracker.updated)}
              </Text>
            </View>
            <View style={styles.content}>
              {moment === 'everyday' && <BoxEvery track={tracker} />}
              {moment === 'today' && <BoxToday track={tracker} />}
              {moment === 'everyday' && <ChartsEveryDay track={tracker} />}
              {moment === 'today' && <></>}
              <BoxText
                text="DISQUE 136"
                title="Precisando de Ajuda ?"
                color="#404040"
              />
            </View>
          </SafeAreaView>
        )}
      </ScrollView>
    </>
  );
}

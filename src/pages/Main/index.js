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

import BoxEvery from '../../components/BoxEvery';
import BoxToday from '../../components/BoxToday';
import BoxText from '../../components/BoxText';

import Loading from '../../components/Loading';
import Charts from '../../components/Charts';

import bg from '../../assets/background.png';


export default function Main({}) {

  const [tracker, setTracker] = useState([]);
  const [loading, setLoading] = useState(true);

  const [btnSelect, setBtnSelected ] = useState(1)

  const [moment, setMoment] = useState('today');

  useEffect(() => {
    async function getTracker() {
      const response = await axios.get(
        'https://corona.lmao.ninja/v2/countries/brazil',
      );
      setTracker(response.data);
      setLoading(false);
    }

    getTracker()
  }, [])


  const options = {
    day: 'numeric', month: 'numeric', year: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#1F93F5" />
      <ImageBackground
        style={styles.backgroundImage}
        source={bg}
        >
        {loading ? (
          <Loading></Loading>
        ) : (
          <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.selectContainer}>
              <View style={styles.selectBar}>
                <TouchableOpacity
                onPress={() => setMoment('everyday')}
                style={(moment === 'everyday') ? styles.selectButton : styles.selectButtonTwo}>
                  <Text style={styles.selectText}>Até o momento</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={() => setMoment('today')}
                  style={(moment === 'today') ? styles.selectButton : styles.selectButtonTwo}>
                  <Text style={styles.selectText}>Hoje</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.descriptionBox}>
            <Text style={styles.casesText}>
              Casos no <Text style={{fontWeight: 'bold'}}>Brasil</Text>
            </Text>
            <Text style={styles.updatedText}>Última atualização : {Intl.DateTimeFormat('pt-BR', options).format(tracker.updated)}
            </Text>
            </View>
            <View style={styles.content}>
              {moment === 'everyday' && <BoxEvery track={tracker} /> }
              {moment === 'today' && <BoxToday track={tracker} /> }
              <Charts track={tracker} />
              <BoxText text="DISQUE 136" title="Precisando de Ajuda ?" color="#404040"/>
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
    backgroundColor: "#1F93F5",
    height: '50%'
  },
  descriptionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 36,
  },
  casesText: {
    color: '#FFF',
    paddingHorizontal: 30,

  },
  updatedText: {
    color: '#FFF',
    paddingHorizontal: 35,

    fontSize: 7,

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
  selectContainer: {
  justifyContent: 'center',
  alignItems:'center'
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
    paddingHorizontal: 8,
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

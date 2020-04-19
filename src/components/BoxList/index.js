import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {View} from 'react-native';

import Box from '../Box';
// import { Container } from './styles';

export default function BoxList({track}) {
  const [loading, setLoading] = useState(true);
  // const [tracker, setTracker] = useState([]);

  // useEffect(() => {
  //   async function getTracker() {
  //     const response = await axios.get(
  //       'https://corona.lmao.ninja/v2/countries/brazil',
  //     );
  //     setTracker(response.data);
  //     setLoading(false);
  //   }

  //   getTracker();
  // }, []);

  return (
    <>
      <Box track={track.cases} title="Casos" color="#FFB259" />
      <Box track={track.deaths} title="Óbitos" color="#FF5959" />
      <Box track={track.recovered} title="Recuperados" color="#4DD97B" />
      <Box track={track.active} title="Ativos" color="#4CB1FB" />
    </>
  );
}

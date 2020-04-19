import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {View} from 'react-native';

import Box from '../Box';
import BoxText from '../BoxText';
// import { Container } from './styles';

export default function BoxToday({track}) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Box track={track.todayCases} title="Casos do Dia" color="#FFB259" />
      <Box track={track.todayDeaths} title="Óbitos do Dia" color="#FF5959" />
      <BoxText text="Não encontrado" title="Recuperados" color="#4DD97B" />
      <BoxText text="Não encontrado" title="Ativos" color="#4CB1FB" />
    </>
  );
}

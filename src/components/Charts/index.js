import React from 'react';
import {View, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

// import { Container } from './styles';

export default function Charts({track}) {
  const screenWidth = Dimensions.get('window').width;

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
  };

  const data = [
    {
      name: 'Mortos',
      covid: track.deaths,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Curados',
      covid: track.recovered,
      color: '#4DD97B',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Ativos',
      covid: track.active,
      color: '#4CB1FB',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <PieChart
      data={data}
      width={screenWidth}
      height={120}
      chartConfig={chartConfig}
      accessor="covid"
      backgroundColor="transparent"
      absolute
      style={styles.barchat}
    />
  );
}

const styles = StyleSheet.create({
  barchat: {
    color: '#FFF',
    marginTop: 80,
    paddingRight: 60,
    marginHorizontal: 30,
    paddingTop: 65,
    justifyContent: 'center',
  },
});

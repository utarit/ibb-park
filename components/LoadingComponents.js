import React from 'react';

import {View, StyleSheet} from 'react-native';
import ContentLoader from 'react-native-easy-content-loader';
import commonStyles from '../styles/commonStyles';

export const LoadingCard = () => {
  return (
    <View style={[styles.card, commonStyles.elevate]}>
      <ContentLoader active />
    </View>
  );
};

export const LoadingPicker = () => {
  return (
    <View style={styles.pickerContainer}>
      <ContentLoader active tHeight={30} tWidth={'100%'} paragraph={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    margin: 4,
    padding: 8,
    width: 200,
  },
  pickerContainer: {
    ...StyleSheet.absoluteFill,
    paddingTop: 10,
  },
});

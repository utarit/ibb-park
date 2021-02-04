import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import commonStyles from '../styles/commonStyles';

export default function ParkCard({park, setSelectedPark, mapRef}) {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      onPress={() => {
        mapRef.current.setCoordinates(
          {latitude: parseFloat(park.lat), longitude: parseFloat(park.lng)},
          16,
        );
        setSelectedPark(park);
      }}>
      <View style={[styles.card, commonStyles.elevate]}>
        <Text>{park.parkName}</Text>
        <Text>{`Boş: ${park.emptyCapacity}, Kapasite: ${park.capacity}`}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    margin: 4,
    padding: 8,
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {createRef, useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import DetailCard from './components/DetailCard';

import MapLayer from './components/MapLayer';
import TopLayer from './components/TopLayer';

const App = () => {
  const [parkData, setParkData] = useState(null);
  const [district, setDistrict] = useState(null);
  const [selectedPark, setSelectedPark] = useState(null);

  const mapRef = createRef();

  const fetchParkData = async () => {
    try {
      let response = await fetch('https://api.ibb.gov.tr/ispark/Park');
      let json = await response.json();
      setParkData(json);
      console.log(json[0]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchParkData();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={[styles.container]}>
          <MapLayer
            parks={parkData}
            ref={mapRef}
            setSelectedPark={setSelectedPark}
          />
          <TopLayer
            parks={parkData}
            district={district}
            setDistrict={setDistrict}
            selectedPark={selectedPark}
            setSelectedPark={setSelectedPark}
            mapRef={mapRef}
          />
          <DetailCard park={selectedPark} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {height: '100%'},
});

export default App;

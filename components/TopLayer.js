import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import DetailCard from './DetailCard';
import {LoadingCard} from './LoadingComponents';
import ParkCard from './ParkCard';
import DistrictPicker from './Picker';

export default function TopLayer({
  parks,
  district,
  setDistrict,
  selectedPark,
  setSelectedPark,
  mapRef,
}) {
  return (
    <View style={[styles.topLayer]}>
      <View>
        <DistrictPicker
          parks={parks}
          district={district}
          setDistrict={setDistrict}
        />
        <View style={[styles.scrollHeight]}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {parks == null
              ? [...Array(3)].map((_e, i) => <LoadingCard key={i} />)
              : parks
                  .filter((f) =>
                    district != null ? f.district === district : true,
                  )
                  .map((park) => (
                    <ParkCard
                      setSelectedPark={setSelectedPark}
                      key={park.parkID}
                      park={park}
                      mapRef={mapRef}
                    />
                  ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topLayer: {
    ...StyleSheet.absoluteFill,
    zIndex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 150,
  },
  scrollHeight: {
    height: 120,
  },
});

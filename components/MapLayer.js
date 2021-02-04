import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import HMSMap, {HMSMarker, MapTypes} from '@hmscore/react-native-hms-map';

const parkingIcon = Image.resolveAssetSource(require('../images/parking.png'))
  .uri;
const noParkingIcon = Image.resolveAssetSource(
  require('../images/no-parking.png'),
).uri;

export default React.forwardRef(({parks, setSelectedPark}, ref) => {
  const renderMarkers = () => {
    return parks.map((p) => (
      <HMSMarker
        icon={{uri: p.emptyCapacity < p.capacity ? parkingIcon : noParkingIcon}}
        key={p.parkID}
        clusterable
        coordinate={{latitude: parseFloat(p.lat), longitude: parseFloat(p.lng)}}
        onClick={() => {
          setSelectedPark(p);
        }}
      />
    ));
  };

  return (
    <View style={[styles.mapLayer]}>
      <HMSMap
        ref={ref}
        useAnimation
        animationDuration={500}
        markerClustering
        camera={{
          target: {
            latitude: 41.02162882138149,
            longitude: 29.004133063279575,
          },
          zoom: 12,
        }}
        style={[styles.mapView]}
        mapType={MapTypes.NORMAL}>
        {parks != null ? renderMarkers() : null}
      </HMSMap>
    </View>
  );
});

const styles = StyleSheet.create({
  mapView: {height: '100%'},
  mapLayer: {...StyleSheet.absoluteFill},
});

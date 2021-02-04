import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {LoadingPicker} from './LoadingComponents';
import {View, StyleSheet} from 'react-native';
import commonStyles from '../styles/commonStyles';

export default function DistrictPicker({parks, district, setDistrict}) {
  return (
    <View style={[styles.picker, commonStyles.elevate]}>
      {parks == null ? (
        <LoadingPicker />
      ) : (
        <Picker
          selectedValue={district == null ? 'İlçe Seçiniz' : district}
          onValueChange={(itemValue) => setDistrict(itemValue)}>
          {[...new Set(parks.map((p) => p.district))].sort().map((e) => (
            <Picker.Item key={e} label={e} value={e} />
          ))}
        </Picker>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    margin: 16,
  },
});

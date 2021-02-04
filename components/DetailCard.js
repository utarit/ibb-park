import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import commonStyles from '../styles/commonStyles';

export default function DetailCard({park}) {
  if (park == null) {
    return <View style={[styles.container, commonStyles.elevate]} />;
  }
  return (
    <View style={[styles.container, commonStyles.elevate]}>
      <View style={[styles.row, styles.titleContainer, styles.black]}>
        <View>
          <Text style={[styles.title, styles.whiteText]}>
            {park.parkName.length > 35
              ? park.parkName.substr(0, 32) + '...'
              : park.parkName}
          </Text>
        </View>
        <View>
          <View style={[styles.badge, park.isOpen ? styles.green : styles.red]}>
            <Text style={[styles.title, styles.whiteText]}>
              {park.isOpen ? 'AÇIK' : 'KAPALI'}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View style={[styles.row, styles.subTitlePadding]}>
          <View>
            <Text style={[styles.subTitle]}>
              {park.parkType + ' / ' + `${park.workHours}`}
            </Text>
          </View>
          <View>
            <Text style={[styles.subTitle]}>
              {'Ücretsiz Park: ' +
                (park.freeTime === 0 ? 'YOK' : park.freeTime + ' dk')}
            </Text>
          </View>
        </View>
        <View style={[styles.center]}>
          <View
            style={[
              styles.badge,
              park.emptyCapacity < park.capacity ? styles.black : styles.red,
            ]}>
            <Text style={[styles.h1, styles.whiteText]}>
              {park.emptyCapacity + ' / ' + park.capacity}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 8,
    height: 100,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 10,
    alignItems: 'baseline',
  },
  subTitlePadding: {
    paddingHorizontal: 4,
    paddingTop: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
  },
  subTitle: {
    fontSize: 11,
    fontWeight: '100',
  },
  center: {
    alignSelf: 'center',
    paddingTop: 6,
  },
  red: {
    backgroundColor: '#cf142b',
  },
  green: {
    backgroundColor: '#00ab66',
  },
  badge: {
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  whiteText: {
    color: 'white',
  },
  black: {
    backgroundColor: 'black',
  },
});

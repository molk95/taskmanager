import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../utils/Colors';
import {
  paddingSizes,
  fontSizes,
  margSizes,
  borderSizes,
  whSizes
} from '../utils/Sizes';

const Task = ({ addText }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{addText}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.white,
    padding: paddingSizes.md,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: margSizes.lg,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: whSizes.lg,
    height: whSizes.lg,
    backgroundColor: colors.gray,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: margSizes.md,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: whSizes.md,
    height: whSizes.md,
    borderColor: colors.gray,
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;

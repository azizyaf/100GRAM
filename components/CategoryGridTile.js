import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback
} from 'react-native';

const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' || Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{
            ...styles.container,
            ...{ backgroundColor: props.color }
          }}
        >
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  container: {
    flex: 1,
    borderRadius: 7,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 7,
    padding: 12,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'cairo-reg',
    fontSize: 18,
    textAlign: 'right'
  }
});

export default CategoryGridTile;

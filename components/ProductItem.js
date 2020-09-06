import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import Colors from '../constants/Colors';

const ProductItem = props => {
  return (
    <View style={styles.prodItem}>
      <TouchableOpacity onPress={props.onSelectProduct}>
        <View>
          <View style={{ ...styles.prodRow, ...styles.prodHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <Text style={styles.title}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.prodRow, ...styles.prodDetail }}>
            <Text style={styles.desc}>{props.description}</Text>
            <Text style={styles.price}>{props.price}SR</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  prodItem: {
    height: 450,
    width: '100%',
    backgroundColor: Colors.white,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden'
  },
  bgImage: {
    width: '100%',
    height: 370
  },
  prodRow: {
    flexDirection: 'row'
  },
  prodHeader: {
    height: '80%'
  },
  prodDetail: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%'
  },
  title: {
    fontFamily: 'cairo-bold',
    fontSize: 30,
    textAlign: 'center',
    color: Colors.gold
  },
  desc: {
    marginVertical: 7,
    fontFamily: 'cairo-reg'
  },
  price: {
    fontFamily: 'cairo-bold',
    fontSize: 20
  }
});

export default ProductItem;

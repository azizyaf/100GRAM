import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { PRODUCTS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

const ProductDetailesScreen = props => {
  const productId = props.navigation.getParam('prodId');

  const selectedProd = PRODUCTS.find(prod => prod.id === productId);

  return (
    <View style={styles.screen}>
      <Text>{selectedProd.title}</Text>
      <Button
        title='Back to Catgories'
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

ProductDetailesScreen.navigationOptions = navigationData => {
  const productId = navigationData.navigation.getParam('prodId');

  const selectedProd = PRODUCTS.find(prod => prod.id === productId);

  return {
    headerTitle: selectedProd.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Favorite' iconName='ios-star' onPress={() => {}} />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ProductDetailesScreen;

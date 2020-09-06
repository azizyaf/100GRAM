import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES, PRODUCTS } from '../data/dummy-data';
import ProductItem from '../components/ProductItem';

const CategoryProductScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const displayedProducts = PRODUCTS.filter(
    prod => prod.categoryIds.indexOf(catId) >= 0
  );

  const renderProduct = itemData => {
    return (
      <ProductItem
        title={itemData.item.title}
        description={itemData.item.description}
        price={itemData.item.price}
        image={itemData.item.imageUrl}
        onSelectProduct={() => {
          props.navigation.navigate('ProductDetails', {
            prodId: itemData.item.id
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedProducts}
        renderItem={renderProduct}
        style={{ width: '100%' }}
      />
    </View>
  );
};

CategoryProductScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
});

export default CategoryProductScreen;

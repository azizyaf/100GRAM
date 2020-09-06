import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryProductsScreen from '../screens/CategoryProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.gold : ''
  },
  headerTintColor: Platform.OS === 'android' ? Colors.black : Colors.gold
};

const ProductsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryProducts: CategoryProductsScreen,
    ProductDetails: ProductDetailsScreen
  },
  { mode: 'modal', defaultNavigationOptions: defaultStackNavOptions }
);

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    ProductDetails: ProductDetailsScreen
  },
  { mode: 'modal', defaultNavigationOptions: defaultStackNavOptions }
);

const tabScreenConfig = {
  Products: {
    screen: ProductsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-cart' size={25} color={tabInfo.tintColor} />;
      }
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
      }
    }
  }
};

const ProdFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.black,
        shifting: true,
        barStyle: {
          backgroundColor: Colors.gold
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.gold,
          inactiveTintColor: Colors.gray
        }
      });

export default createAppContainer(ProdFavTabNavigator);

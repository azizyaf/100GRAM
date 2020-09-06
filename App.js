import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';

import ProductNavigator from './navigation/ProductsNavigator';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'cairo-bold': require('./assets/fonts/Cairo-Bold.ttf'),
    'cairo-light': require('./assets/fonts/Cairo-Light.ttf'),
    'cairo-reg': require('./assets/fonts/Cairo-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
    'open-sans-reg': require('./assets/fonts/OpenSans-Regular.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <ProductNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

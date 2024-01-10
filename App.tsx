/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Propeties/Home';
import Login from './src/Propeties/Login';
import Wallet from './src/Propeties/Wallet';
import Withdrawer from './src/Propeties/Withdrawer';



const Stack = createNativeStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };



  return (
   <NavigationContainer>
       <Stack.Navigator screenOptions={{
       header:()=> null  
       }}>
 <Stack.Screen  name="Home" component={Home} />
          <Stack.Screen  name="Login" component={Login} />
          <Stack.Screen  name="Wallet" component={Wallet} />
  <Stack.Screen  name="Withdrawer" component={Withdrawer} />
  
 

  </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

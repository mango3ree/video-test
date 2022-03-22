import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import Dashboard from './src/components/dashboard/Dashboard';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return <Dashboard />;
};

const styles = StyleSheet.create({});

export default App;

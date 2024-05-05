import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import UserDashboard from "./components/UserDashboard";
import Navbar from "./components/Navbar";
import {NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Login from "./components/Login";




function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer> 
    <SafeAreaView style={styles.container}>
    <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Dashboard" component={UserDashboard} />
          <Stack.Screen name="Login" component={Login} />
          
    </Stack.Navigator>
      <View> 
      <Navbar/>
      </View>
    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    
  },
 
});

export default App;

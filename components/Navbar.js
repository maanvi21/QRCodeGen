import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';





const Navbar = () => {

  const navigation = useNavigation();
// onPush Home
  const navigateToHome = () => {
    navigation.navigate('Home');
  }

  // onPush QRCode 
  const navigateToDashboard = () => {
    navigation.navigate('Dashboard');
  }
  //onPress Sign-In
  const navigateToLogin = () => {
    navigation.navigate('Login');
  }
    return (
      <SafeAreaView style={styles.bottom}>
        <View style={styles.container}>
          <Text style={styles.title}>Navbar</Text>
          {/* Home */}
          <View style={styles.links_container}>
            <TouchableOpacity onPress={navigateToHome}>
              <Text style={styles.link}>Home</Text>
            </TouchableOpacity>
          </View>
          {/* QR Code */}
          <View style={styles.links_container}>
          
          {/* Just an icon  */}
              <Text style={styles.link}>QR Code App </Text>
              
            
          </View>
          {/* Profile takes us to the login page*/}
          <View style={styles.links_container}>
            <TouchableOpacity onPress={navigateToLogin}>
              <Text style={styles.link}>Sign-In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    bottom:{
        backgroundColor: '#227dec',
        borderRadius:5,
        marginTop:20,
        width:'100%',
    },
    container: {

      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingVertical: 10,
      bottom:0,
    },
    links_container: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color:'black',
    },
    link: {
      fontSize: 16,
      color: 'navy',
    },
  });
  
  export default Navbar;
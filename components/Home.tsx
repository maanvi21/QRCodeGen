import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text_style}> QR Code Generator </Text>
        <Text style={styles.text1_style}> Welcome User!</Text>
        <Text style={styles.text2_style}> Click on Sign-In to get started. </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1, alignItems:'center', justifyContent:'center',
    },
    text_style:{ 
fontWeight:'bold', fontSize:40
    },
    text1_style:{ 
      fontWeight:'bold', fontSize:30,color:'#227dec',
          },
          text2_style:{ 
            fontWeight:'bold', fontSize:20, color:'#227dec',
                },
})

import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Button,TextInput } from 'react-native';
import QRCode from 'react-native-qrcode-svg';



const UserDashboard = () => {
const [inputText, setInputText]=useState("");
const [qrCodeValue, setQRCodeValue] = useState("");
// on clicking the generate button, the qr code will appear on the screen
const generate_Qr=()=>{
setQRCodeValue(inputText);

};
//reload QR
const reload_Qr=()=>{
  setInputText("");
  setQRCodeValue("");
}

// to render texts inside the text box where the user will put in the profile url
const input_text=(text: string)=>{
    setInputText(text);
}

  return (
    <SafeAreaView>
      <View  style={styles.labelText}>
        <Text >UserDashboard</Text>
        <View> 
            <TextInput style={styles.text_input}
          placeholder="Enter profile URL here"  onChangeText={input_text}
          value={inputText}
          />
        </View>

        <View  style={styles.btn}>
        <Button  title="GENERATE" onPress={generate_Qr} />
        <Button  title="RELOAD" onPress={reload_Qr} />
        </View>
         {qrCodeValue ? (
          <View style={styles.qr_container}>
          {/* As long as the textInput is empty, nothing will be displayed. As soon as we put a url
           and textInput exists, the GENERATE button will dispatch an event which makes the QR 
           Code appear
           */}
            <QRCode value={qrCodeValue} size={400} />
          </View>
        ) : null}
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:25,
  },
  labelText: {
    marginTop:30,
    marginBottom: 20,
    textAlign: 'center', 
    alignItems:'center',
  },
  
  btn:{
    flexDirection: 'row',
    padding:10,
    justifyContent: 'space-around', 
    marginTop: 10,
    marginBottom: 5,
    width: '100%',
  },
  
    text_input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        marginTop: 40,
        paddingHorizontal: 10,
      },
      qr_container: {
        marginTop: 50,
        padding: 30,
        paddingHorizontal: 30,
        width: '80%',
        height: 40,
        alignItems:'center',
     
      },
  }
);

export default UserDashboard;

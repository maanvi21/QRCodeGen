import { StyleSheet, Text, View,TextInput,Button,Alert} from 'react-native'
import React, {useState} from 'react'
 // this is the config file we created 
import { auth } from '../firebase';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useNavigation} from '@react-navigation/native';

// type RootStackParamList = {
//   Home: undefined;
// Dashboard: undefined;
//   Login: undefined;
//   //  screen names
// };
// type NavigationType = NavigationProp<RootStackParamList>;


export default function Login() {

 

  //handle user state changes
 



  const navigation = useNavigation();




// email state
const [email,setEmail] = useState('');
//pasword state
const [password, setPassword] = useState("");



 // input email function
 const input_email = (text) => {
  setEmail(text);
};

 // input password function
 const input_password=(text)=>{
 setPassword(text)
 };


// the sign in function 
const sign_in_function = async(email,password) => {
  try{  await auth.signInWithEmailAndPassword(email, password);

   ;
  }
  catch(error){
    Alert.alert('Error signing in :', error.message)
     }
     navigation.navigate('Dashboard');
     setEmail('');
     setPassword('')
 };

// create a new account
const create_account_function = async (email, password) => {
  try {
   
    await auth.createUserWithEmailAndPassword(email, password);
    
   

  } catch (error) {
    
    Alert.alert('Error creating account:', error.message);
  }

  navigation.navigate('Dashboard');
    setEmail("");
    setPassword(''); 
};


  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Sign-In</Text>

 
     <Text style={styles.label} > Email </Text>
     <TextInput style={styles.textbox} textContentType='emailAddress' onChangeText={input_email} placeholder="abc@xyz.com"/>
     <Text style={styles.label}> Password </Text>
     <TextInput style={styles.textbox} secureTextEntry={true} textContentType='password' onChangeText={input_password} />
       <View style={styles.btn}>
      <Button title="SIGN-IN" onPress={sign_in_function}/>
      </View>
      <View style={styles.btn} >
      <Button title="Create an account" onPress={create_account_function} />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    borderColor:'gray', borderWidth:1.5, borderRadius:10,
    justifyContent:'center', flex:1, 
  },
  heading:{
    textAlign:'center', fontSize:40, fontWeight:'bold', color:'black',
  },
  label:{
    textAlign:'left', fontSize:20, color:'black',
  },
  textbox:{
    borderColor:'gray', borderWidth:1,
  },
btn:{
 padding:10,
  justifyContent: 'space-around', 

  marginTop: 20,
  marginBottom: 25,
  width: '100%',
},
})
import { StyleSheet, Text, View, ImageBackground, Image , TextInput, Pressable} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
// import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonC from './Component/ButtonC';
{/* <Ionicons name="ios-people-outline" size={24} color="#1293A9"  style={{padding:10}}/> */}
{/* <Foundation name="key" size={24} color="#1293A9"  style={{padding:10}} /> */}
// 
const Login = () => {
  return (
  
    <ImageBackground
    source={require('../../assets/loginBackground.png')} // Replace with the path to your image
    style={styles.backgroundImage}
  >
  <View style={styles.overlay}>
 
  <Image source={require("../../assets/loginlogo.png")} resizeMode="contain" style={{height:114,alignSelf:'center', marginVertical:10}} />
<Text style={{fontSize:16, color:'#6D6767' ,}}>Login to your Account</Text>
<View style={{height:44, borderRadius:10, backgroundColor:"#FFFFFF", flexDirection:'row', alignItems:'center',marginVertical:10}}>
<Image source={require("../../assets/people.png")} resizeMode='contain'  style={{ margin:10, height:18}} />
<TextInput style={{flex:1}}   placeholder='Username..'/>

</View>


<View style={{height:44, borderRadius:10, backgroundColor:"#FFFFFF", flexDirection:'row', alignItems:'center',marginVertical:10}}>
<Image source={require("../../assets/key.png")} resizeMode='contain'  style={{ margin:10, height:18}} />

<TextInput style={{flex:1}}   placeholder='Password'/>
<Pressable >

<Text style={{padding:10, fontSize:12, color:'#1293A9'}}>Forgot</Text>
</Pressable>
</View>

<ButtonC to="Wallet" text="Sign In" backgroundColor="#1293A9"/>


<View style={{flexDirection:'row', position:'absolute', bottom:'5%',alignSelf:'center',justifyContent:'center'}}>
<Text style={{fontSize:14, color:'#6D6767'}}>Dont have an account? </Text>
<Text style={{fontSize:14, color:'#1293A9'}}>Sign Up</Text>
</View>
</View>
  </ImageBackground>

  )
}

export default Login

const styles = StyleSheet.create({
 
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // or 'stretch' for different cover strategies
    justifyContent: 'center',
    // alignItems:'center',
    marginTop:20
  },
  overlay: {
    backgroundColor: 'rgba(229, 244, 243, 0.5)', // Adjust the opacity and color as needed
    flex: 1,
    justifyContent: 'center',
   
    paddingHorizontal:47,
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
})
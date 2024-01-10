import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonC from './Component/ButtonC'



const Home = () => {
  return (
  <ImageBackground source={require("../../assets/birds.png")} resizeMode='contain'  style={[{}, styles.container]} >
  <Image source={require("../../assets/girl.png")} resizeMode='contain' style={{height:257.88, width:256.89}}  />
  <Image source={require("../../assets/write.png")} resizeMode='contain' style={{height:64, width:189}}  />
  <Image source={require("../../assets/sky.png")} resizeMode='contain'  style={{position:'absolute',zIndex:-1,right:'13%', top:'13%', height:658, width:699}} />

<View style={{width:'100%', paddingHorizontal:30, bottom:"5%", position:'absolute'}}> 
<ButtonC to="Login" text="Get Started" backgroundColor="#1293A9"/>
</View>

</ImageBackground>

  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E5F4F3',
    justifyContent:'center',
    alignItems:'center'
  }
})
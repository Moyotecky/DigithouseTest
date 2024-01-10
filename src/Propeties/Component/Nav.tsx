import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Nav = () => {
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row', alignItems:'center', columnGap:10}}>
    <Image  source={require("../../../assets/Ellipse4.png")}  resizeMode='contain' style={{height:40.57, width:40.57}}/>
    <Text style={{fontSize:18, fontWeight:'600', color:"#616165"}}>Ajalla Ugo</Text>
    </View>
    <View  style={{backgroundColor:'#E5F4F3', width:44, height:43,justifyContent:'center',alignItems:'center', borderRadius:7}}>
<Image source={require("../../../assets/notification.png")} resizeMode='contain'  style={{ margin:10, height:18}} />
 
    </View>
    </View>
  )
}



export default Nav

const styles = StyleSheet.create({
    container:{
        // paddingHorizontal:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:20
    }
})
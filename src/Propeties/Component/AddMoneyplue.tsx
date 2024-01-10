import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
// import { AntDesign } from '@expo/vector-icons';
type AddMoneyplueProps = {
  to:string;
}
//    <AntDesign name="pluscircleo" size={19} color="#1293A9" />
const AddMoneyplue = ({to}:AddMoneyplueProps) => {

 const Navigation = useNavigation()

  return (
    <View style={{flexDirection:'row', justifyContent:'space-between'}}> 
   <View style={{height:43, backgroundColor:'#E5F4F3', flexDirection:'row', alignItems:'center', columnGap:5,paddingHorizontal:10, borderRadius:7, width:135}}>
   <Image source={require("../../../assets/add.png")} resizeMode='contain'  style={{  height:19, width: 19}} />


   <Text style={{fontWeight:'bold', fontSize:14,color:'#656262'}}>Top Up Wallet</Text>
   </View>
   <Pressable onPress={()=> Navigation.navigate(to)} style={{height:43, backgroundColor:'#E5F4F3', flexDirection:'row', alignItems:'center', columnGap:10,paddingHorizontal:20, borderRadius:7}}>
   <Image source={require("../../../assets/withdraw.png")}  resizeMode='contain' style={{height:19, width:19}}  />
   <Text style={{fontWeight:'bold', fontSize:14,color:'#656262'}}>Withdraw Funds</Text>
   </Pressable>
   
   
   </View>
  )
}

export default AddMoneyplue

const styles = StyleSheet.create({})
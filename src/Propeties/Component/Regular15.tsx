import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
// import { MaterialCommunityIcons } from '@expo/vector-icons';
{/* <MaterialCommunityIcons name="wallet" size={35} color="#FFFFFF" /> */}
const Regular15 = () => {
  return (
    <View style={{ backgroundColor: '#1293A9', height: 159, marginVertical: 20, borderRadius: 20, paddingHorizontal: 19, paddingVertical: 10, justifyContent:'space-between' }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 13, color: '#FFFFFF', top: 5 }}>N</Text>
        <View style={{}}>
          <Text style={{ fontSize: 32, color: "#FFFFFF", fontWeight: '700' }}>120,000</Text>
          <Text style={{ fontSize: 13, color: "#FFFFFF", bottom: 5, left: 4 }}>Balance</Text>
        </View>

      </View>
      <Image source={require("../../../assets/purse.png")} resizeMode='contain'  style={{ margin:10, height:32, width: 35}} />


    </View>

    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <View>
    <Text style={{fontSize:9, color:'#FFFFFF'}}>Account Number</Text>
    <Text style={{fontSize:14, color:'#FFFFFF'}}>9102356712</Text>
    </View>
    <View>
    <Text style={{fontSize:9, color:'#FFFFFF'}}>Bank</Text>
    <Text style={{fontSize:14, color:'#FFFFFF'}}>Access Bank</Text>
    </View>
  
    </View>

  </View>
  )
}

export default Regular15

const styles = StyleSheet.create({})
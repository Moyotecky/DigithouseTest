import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const YourBalance = () => {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:30}}>
      
      <Text style={{fontSize:18,color:"#4F4E52", fontWeight:'600'}}>Your Balance</Text>

      <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:13, top:7}}>N</Text>
      <Text style={{color:"#3F3D56", fontSize:32, fontWeight:'bold'}}>120,000</Text>
      </View>
      </View>
  )
}

export default YourBalance

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';

 type ContainBoxProps = {
  backgroundColor: string;
 }

const ContainBox = ({backgroundColor}:ContainBoxProps) => {


  return (
    <View style={[styles.container, {backgroundColor:backgroundColor}]}>

    <View style={{flexDirection:'row',alignItems:'center', columnGap:10}}>
    <RadioButton value="first" />
    
    <View >
    <Text style={{fontSize:18, color:'#616165', fontWeight:'bold' }}>Ajalla Ugo</Text>
    <Text style={{fontSize:12, color:'#656262'}}>9102356712</Text>
    </View>
    </View>
    
    <View>
    <Text style={{fontSize:12, color:'#65656A', fontWeight:'bold' }}>Bank</Text>
    <Text style={{fontSize:12, color:'#767E80', fontWeight:'bold' }}>Access Bank</Text>
    </View>
    
    </View>
  )
}

export default ContainBox

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginVertical:10,
        flexDirection:'row',
        height:78, 
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:7
    }
})
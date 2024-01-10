import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ContinueProps = {
  text: string;
  backgroundColor: string;
  final:(alt: any)=> void;
  
}



const ContinueBtn = ({text, backgroundColor, final}:ContinueProps) => {
  return (
    <Pressable  onPress={()=> final(text)} style={[styles.container, { backgroundColor}]}>
      <Text style={{color:'#FFFFFF', textAlign:'center', fontSize:14}} >{text}</Text>
    </Pressable>
  )
}



const styles = StyleSheet.create({
    container:{
        height:43,
        marginVertical:10,
        borderRadius:7,
        justifyContent:'center',
        width:'100%'

    }
})

export default ContinueBtn


import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'


type WithdrawProps = {
  text:string;
  backgroundColor: string;
  setmakevisible:(arg: any) => void;
}

const WitdrawButton = ({text, backgroundColor, setmakevisible}: WithdrawProps) => {
  return (
    <Pressable onPress={()=> setmakevisible(true)} style={[styles.container, { backgroundColor}]}>
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

export default WitdrawButton

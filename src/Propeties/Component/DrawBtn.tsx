import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ButtonCProps = {
  text: string;
  backgroundColor: string;

  
}

const DrawBtn = ({ text, backgroundColor, }: ButtonCProps) => {

 const Navigation =  useNavigation()

  return (
    <Pressable style={[styles.container, { backgroundColor }]}>
      <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 14 }}>{text}</Text>
    </Pressable>
  );
};



const styles = StyleSheet.create({
  container: {
    height: 43,
    marginVertical: 10,
    borderRadius: 7,
    justifyContent: 'center',
    width: '100%',
  },
});

export default DrawBtn


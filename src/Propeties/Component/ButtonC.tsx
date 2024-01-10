import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type ButtonCProps = {
  text: string;
  backgroundColor: string;
  to:string;
  
}

const ButtonC = ({ text, backgroundColor, to }: ButtonCProps) => {

 const Navigation =  useNavigation()

  return (
    <Pressable onPress={()=> Navigation.navigate(to)} style={[styles.container, { backgroundColor }]}>
      <Text style={{ color: '#FFFFFF', textAlign: 'center', fontSize: 14 }}>{text}</Text>
    </Pressable>
  );
};

export default ButtonC;

const styles = StyleSheet.create({
  container: {
    height: 43,
    marginVertical: 10,
    borderRadius: 7,
    justifyContent: 'center',
    width: '100%',
  },
});

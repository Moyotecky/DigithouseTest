import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import Nav from './Component/Nav'
// import { Feather } from '@expo/vector-icons';

import Regular15 from './Component/Regular15';
import AddMoneyplue from './Component/AddMoneyplue';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 


{/* <Feather name="arrow-down-circle" size={38} color="#49BA62" /> */}
{/* <Feather name="arrow-up-circle"  size={38} color="#E83030"  /> */}


const Wallet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => [ '60%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={styles.container}>
      <Nav />
   <Regular15 />
   <AddMoneyplue to="Withdrawer" />
   <BottomSheet

   snapPoints={snapPoints}
style={{

}}
 >
   <View style={styles.contentContainer}>

    <View style={{flexDirection:'row', justifyContent:'space-between',width:'100%'}}>
    <Text style={{color:'#676464', fontSize:14}}>Last Transactions</Text>
    <Text style={{color:"#1293A9", fontSize:12}}>See All</Text>
    </View>


    <View style={{marginTop:20}}>

    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'baseline', marginVertical:20}}>
    <View style={{flexDirection:'row', alignItems:'center', columnGap:10}}>
    <Image source={require("../../assets/credit.png")} resizeMode='contain'  style={{  height:38, width: 38}} />

    <View>
    <Text style={{color:"#5F5B5B", fontSize:15}}>Account Top Up</Text>
    <Text style={{fontSize:10, color:"#9B9999"}}>24 Oct. 2020 8:45pm</Text>
    </View>
    </View>
    <Text style={{fontSize:15, color:'#5F5B5B'}}>50,000</Text>
    </View>

    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'baseline', marginVertical:20}}>
    <View style={{flexDirection:'row', alignItems:'center', columnGap:10}}>

    <Image source={require("../../assets/debit.png")} resizeMode='contain'  style={{  height:38, width: 38}} />

    <View>
    <Text style={{color:"#5F5B5B", fontSize:15}}>Rent Payment</Text>
    <Text style={{fontSize:10, color:"#9B9999"}}>24 Oct. 2020 8:45pm</Text>
    </View>
    </View>
    <Text style={{fontSize:15, color:'#5F5B5B'}}>-50,000</Text>
    </View>

    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'baseline', marginVertical:20}}>
    <View style={{flexDirection:'row', alignItems:'center', columnGap:10}}>
    <Image source={require("../../assets/credit.png")} resizeMode='contain'  style={{  height:38, width: 38}}/>

    <View>
    <Text style={{color:"#5F5B5B", fontSize:15}}>Rent Payment</Text>
    <Text style={{fontSize:10, color:"#9B9999"}}>24 Oct. 2020 8:45pm</Text>
    </View>
    </View>
    <Text style={{fontSize:15, color:'#5F5B5B'}}>50,000</Text>
    </View>


    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'baseline', marginVertical:20}}>
    <View style={{flexDirection:'row', alignItems:'center', columnGap:10}}>
    <Image source={require("../../assets/debit.png")} resizeMode='contain'  style={{  height:38, width: 38}} />

    <View>
    <Text style={{color:"#5F5B5B", fontSize:15}}>Account Top Up</Text>
    <Text style={{fontSize:10, color:"#9B9999"}}>24 Oct. 2020 8:45pm</Text>
    </View>
    </View>
    <Text style={{fontSize:15, color:'#5F5B5B'}}>50,000</Text>
    </View>

    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'baseline', marginVertical:20}}>
    <View style={{flexDirection:'row', alignItems:'center', columnGap:10}}>
    <Image source={require("../../assets/credit.png")} resizeMode='contain'  style={{  height:38, width: 38}} />

    <View>
    <Text style={{color:"#5F5B5B", fontSize:15}}>Account Top Up</Text>
    <Text style={{fontSize:10, color:"#9B9999"}}>24 Oct. 2020 8:45pm</Text>
    </View>
    </View>
    <Text style={{fontSize:15, color:'#5F5B5B'}}>-50,000</Text>
    </View>



    </View>



    
   </View>

 </BottomSheet>
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    paddingHorizontal: 20
  },
   contentContainer: {
    flex: 1,
    backgroundColor:'#F2F2F2',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    paddingHorizontal:22,
    paddingTop:50
  },
})

export default Wallet


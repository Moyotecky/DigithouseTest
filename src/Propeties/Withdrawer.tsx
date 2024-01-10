import { Pressable, StyleSheet, Text, View , Button, TextInput, Image} from 'react-native'
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import Nav from './Component/Nav'
// import { MaterialCommunityIcons,AntDesign  } from '@expo/vector-icons';

import YourBalance from './Component/YourBalance';
import ContainBox from './Component/ContainBox';
import ButtonC from './Component/ButtonC';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import WitdrawButton from './Component/WitdrawButton';
import ContinueBtn from './Component/ContinueBtn';
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawBtn from './Component/DrawBtn';

{/* <AntDesign name="pluscircleo" size={24} color="#1293A9" /> */}


const Withdrawer = () => {
  const [makevisible, setmakevisible] = useState(false)
  const [ contentKey , setContentKey] = useState("")


  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['30%', '55%'], []);

  const handleSheetChanges = useCallback((index:number) => {
    console.log('handleSheetChanges', index);
  }, []);


  const renderContent = () => {
    switch (contentKey) {
      case 'Continue':
        return (
       <View>
       <Text style={{textAlign:'center', fontSize:20, color:"#4F4E52", fontWeight:"700"}}>Add New Bank</Text>
<View style={{}}>
       <Text style={{fontSize:14, color:'#616165',marginVertical:10}}>Account Number</Text>
<TextInput  style={{backgroundColor:'#FFFFFF', height:43, borderRadius:7, borderWidth:1}}/>
       </View>


<View style={{}}>
       <Text style={{fontSize:14, color:'#616165',marginVertical:10}}>Bank Name</Text>
<TextInput  style={{backgroundColor:'#FFFFFF', height:43, borderRadius:7,borderWidth:1}}/>

<ContinueBtn text="Add Bank" final={setContentKey}  backgroundColor="#1293A9"/>
       </View>
       </View>
        );
      case 'Add Bank':
        return (
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, color: '#4F4E52', fontWeight: '700', textAlign: 'center' }}>Enter 4 Digit Pin</Text>
          <Text style={{textAlign:'center', fontSize:14, color:'#616165'}}>Enter your 4 Digit PIN to authorize this transaction</Text>

          <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:30}}>
          <TextInput style={{backgroundColor:'#FFFFFF', height:60,width: 60,borderRadius:7}} />
          <TextInput style={{backgroundColor:'#FFFFFF', height:60,width: 60,borderRadius:7}} />
          <TextInput style={{backgroundColor:'#FFFFFF', height:60,width: 60,borderRadius:7}} />
          <TextInput style={{backgroundColor:'#FFFFFF', height:60,width: 60,borderRadius:7}} />
       
          
          </View>
          </View>
        );
  
      default:
        return (
          <View style={{  }}>
          <Text style={{fontSize:20, color:"#4F4E52", fontWeight:'700', textAlign:'center'}}>Transaction Summary</Text>
          <Text style={{fontSize:12, color:"#65656A", fontWeight:'500', textAlign:'center'}}>Please review the details of your transaction</Text>
          
      
          <View style={[{flexDirection:'row', justifyContent:'space-between', marginTop:20,borderLeftWidth:0, borderRightWidth:0, borderColor:'#C4C4C4', paddingVertical:20, borderTopWidth:0}, styles.transation]}>
          <Text style={{fontSize:14, color:'#616165'}}>Transaction Type</Text>
          <Text style={{fontSize:16, color:'#5E5E5F'}}>Wallet Withdrawal</Text>
          </View>
      
      
          <View style={[{flexDirection:'row', justifyContent:'space-between', marginTop:20,borderLeftWidth:0, borderRightWidth:0, borderColor:'#C4C4C4', paddingVertical:10, borderTopWidth:0}, styles.transation]}>
          <Text style={{fontSize:14, color:'#616165'}}>Amount</Text>
          <Text style={{fontSize:16, color:'#5E5E5F', fontWeight:'700'}}>50,000</Text>
          </View>
      
          <View style={[{flexDirection:'row', justifyContent:'space-between', marginTop:20,borderLeftWidth:0, borderRightWidth:0, borderColor:'#C4C4C4', paddingVertical:10, borderTopWidth:0}, styles.transation]}>
          <Text style={{fontSize:14, color:'#616165'}}>Fee</Text>
          <Text style={{fontSize:16, color:'#5E5E5F', fontWeight:'700'}}>25</Text>
          </View>
      
          <Text  style={{textAlign:'right', paddingVertical:10, fontSize:16, color:'#5E5E5F', fontWeight:'700'}}>50,025</Text>
      
      
      <ContinueBtn text="Continue" final={setContentKey}  backgroundColor="#1293A9"/>
      <DrawBtn text="Cancel"  backgroundColor="#CCCCCC"/>
          </View>
        )
    }
  };
  




  return (
    <GestureHandlerRootView style={{ flex: 1, }}>
    <SafeAreaView style={styles.container}>
  
      <Nav />
     <YourBalance />

     <Text style={{fontSize:28, fontWeight:"bold", color:'#1293A9', top:5}}>Withdraw</Text>
<Text style={{fontSize:18,color:'#767E80', fontWeight:'600' }}>Amount</Text>

<Pressable style={{backgroundColor:'#E5F4F3', borderWidth:1, borderColor:'#1293A9', borderRadius:7,height:43, alignItems:'center', justifyContent:'center', marginVertical:20}}>
<Text style={{fontSize:18,color:'#3F3D56', textAlign:'center' }}>20,000</Text>
</Pressable>

<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:10}}>
<Text style={{color:'#767E80', fontSize:14, fontWeight:'600'}}>Select Bank</Text>
<View style={{flexDirection:'row',alignItems:'center', columnGap:4}}>
<Image source={require("../../assets/add.png")} resizeMode='contain'  style={{ height:14, }} />

<Text style={{fontSize:14, color:'#767E80'}}>Add New Bank</Text>
</View>
</View>



<ContainBox  backgroundColor="#E5F4F3"/>
<ContainBox backgroundColor="#F2F2F2" />


<WitdrawButton  setmakevisible={setmakevisible} text="Withdraw" backgroundColor="#1293A9" />
<DrawBtn text="Cancel" backgroundColor="#CCCCCC" />



{
  makevisible && (
    <>
    <BottomSheet

    snapPoints={snapPoints}
    style={{
    
    }}
    >
    
    <View style={styles.contentContainer}>

{renderContent ()}
    </View>
    


    
    </BottomSheet>



    </>
  )
}




    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Withdrawer



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ffffff',
    paddingHorizontal: 20
  },
   contentContainer: {
    flex: 1,
    backgroundColor:'#F2F2F2',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    paddingHorizontal:22,
    paddingTop:20
  },
  transation:{
    borderWidth:2,
    
   
  }
})

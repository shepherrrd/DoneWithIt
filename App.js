import { StatusBar } from 'expo-status-bar';
import React, { useState , useEffect}from 'react';
import { StyleSheet, Text, Dimensions,
   View , SafeAreaView, Image, TouchableOpacity, Alert,Button, Platform} from 'react-native';
//import React from 'react';
import { useDimensions } from '@react-native-community/hooks';
import registerNNPushToken from 'native-notify';
import TouchID from 'react-native-touch-id';
//import * as LocalAuthentication from 'expo-local-authentication'

const handlepress = () =>{
 console.log("puss")
}
export default function App() {
let x =""
console.log( useDimensions());
  // useEffect(() => {
  //   async function authenticated() {
  //     const result = await LocalAuthentication.authenticatedAsync();
  //   }
  //   authenticated();
  // });
  // registerNNPushToken(5504, 'fE5bHMCT1VhQdBTaAYiIQG');
  
    return (
      <SafeAreaView >
        {
        // <Text 
        // style = {
        //   StyleSheet.create({
        //   //  color : 'white',
        //   //  alignItems : 'left'+'!important',
        //   //  paddingTop : Platform.OS === 'android' ? StatusBar.currentheight : 0,
        //   })
        // }
        // >Hey</Text>
        
        /* <Button 
       
        color = 'orange'
        title='Click Me'
        onPress={() =>Alert.alert("Choose", "me", [
          {text : "yes"},
          {text : "no"}
        ])} />
        <Text style={styles.Text} numberOfLines={1} onPress= {handlepress}>Hello b {x} World a really really long </Text>
        <TouchableOpacity><Image 
         blurRadius ={1}
         fadeDuration = {200}
        source={{
         
        height : 200,
        width : 300,
          uri :"https://picsum.photos/200/300"}} onPress= {handlepress}></Image></TouchableOpacity> */}
          <View
          style = {{
            backgroundColor : 'dodgerblue',
            width : "50%",
            height : 70
          }}
          >

          </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
  const styletop = {
    backgroundColor :'orange',
    alignItems : 'top-left',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height : 300
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Text:{
     // color : 'white',
    }
  });
  
























// import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// function Login  ({ navigation })  {
//   return (
//     <View style= {styles.container}
//     >
//       <Text>Login</Text>
//       <TextInput placeholder="Username" />
//       <TextInput placeholder="Password" secureTextEntry />
//       <TouchableOpacity onPress={() => console.log('Login button pressed')}>
//         <Text>Log In</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => navigation.navigate('Signup')}
//       >
//         <Text>Go to Signup</Text>
//       </TouchableOpacity>
//     </View>
    
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'grey',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },}
// );

// export default Login;


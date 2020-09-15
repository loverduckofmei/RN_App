// import {CreateStackNavigator} from 'react-navigation-stack';
// import React, { Component, useState } from "react";
// import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid } from "react-native";
// import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from "react-native-simple-radio-button"; 
// import Loading from "./Loding";
// import MainPage from './MainPage';
// import MainScreen from './MainScreen';
// import Sub1Screen from './Sub1Screen';
// import Sub2Screen from './Sub2Screen';


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './AppNavigator'


export default class App extends Component{
  render() {
    return (
      <AppNavigator/>
    );
  }
}



// import React, { Component, useState } from 'react'
// import { Text, View, } from 'react-native'
// import RadioForm,  { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'

// const gender =[
//     { label:"Male", value:0},
//     { label:"FeMale", value:1},
//     { label:"Other", value:2}
// ]



// export default class App extends Component{
//     state ={
//       value: null,
//     }
//     render(){
//       const {value} = this.state;
//         return(
//             <RadioForm
//             radio_props={gender}
//             initial={1} // you can set as per requirement, initial i set here 0 for male
//             // initial={-1} // you can set as per requirement, initial i set here 0 for male
//             onPress={(value)=> {
//               this.setState({
//                 value : value 
//               })
//               alert(value);
//            }}
//             buttonSize={40} // size of radiobutton
//             buttonOuterSize={60}
//             selectedButtonColor={'green'}
//             selectedLabelColor={'green'}
//             labelStyle={{fontSize:15}}
//             />

//         )
//     }

// }
// export default function App(props){
//   const [value,setValue] = useState(0);
//     return(
//         <View>
//           <RadioForm
//           radio_props={gender}
//           initial={0} // you can set as per requirement, initial i set here 0 for male
//           // initial={-1} // you can set as per requirement, initial i set here 0 for male
//           onPress={(val)=> {
//             setValue(val);
//             alert(val);
//          }}
//           buttonSize={40} // size of radiobutton
//           buttonOuterSize={60}
//           selectedButtonColor={'green'}
//           selectedLabelColor={'green'}
//           labelStyle={{fontSize:15}}
//           />
//         <View>
//           <MainPage
//             val = {value}
//           />
//         </View>
//         </View>
        

//       )
//   }



const BlackDice = {
  1: require("./img/b1.png"),
  2: require("./img/b2.png"),
  3: require("./img/b3.png"),
  4: require("./img/b4.png"),
  5: require("./img/b5.png"),
  6: require("./img/b6.png")
}
const RedDice = {
  1: require("./img/r1.png"),
  2: require("./img/r2.png"),
  3: require("./img/r3.png"),
  4: require("./img/r4.png"),
  5: require("./img/r5.png"),
  6: require("./img/r6.png")
}
const choice = [
  {label: "홀수", value: 0},
  {label: "짝수", value: 1}
];



// export default function App(){
//   const [value,setValue] = useState(0);
//   const [redDice, setRedDice] = useState("1");
//   const [blackDice, setBlackDice] = useState("6");
//   const add = Number(redDice) + Number(blackDice);
//   const oddEven = (Number(redDice) + Number(blackDice)) % 2 ;
  
//   function rollDice() {
//     const redDice = Math.floor((Math.random()) * 6 +1); // 1~6 random
//     const blackDice = Math.floor((Math.random()) * 6 +1); // 1~6 random
//     setRedDice(redDice);
//     setBlackDice(blackDice);
//   }
  // return(
    
    // <View>
      /* <Text>[플레이어 화면]</Text>
      <View style={styles.row}>
        <Image style={styles.img} source={RedDice[redDice]} />
        <Image style={styles.img} source={BlackDice[blackDice]} />
      </View>
      <View>
        <RadioForm
          formHorizontal={true}
          labelHorizontal={false}
          radio_props={choice}
          initial ={0}
          buttonColor= {'green'}
          selectedButtonColor={'green'}
          disabled={false}
          onPress ={(val) =>{
            setValue(val);
          }}
        >
        </RadioForm>
      </View>
      <TouchableOpacity onPress={rollDice}>
        <View style={styles.pushBtn}>
          <Text style={{color: "snow"}} >ROLL THE DICE</Text>
        </View>
      </TouchableOpacity>
      <View>
        <MainPage
          add = {add}
          val = {value}
          oddEven = {oddEven}
        />
      </View> */
    // </View>
  // );
// }

// const styles = StyleSheet.create({
//   container : {
//     flex : 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   img : {
//     width: 120,
//     height: 120,
//     margin: 13
//   },
//   row : {
//     flexDirection: "row"
//   },
//   pushBtn : {
//     backgroundColor: "#F39C12",
//     marginTop: 30,
//     paddingHorizontal: 40,
//     paddingVertical: 20,
//     borderRadius: 8
//   }
  
// });
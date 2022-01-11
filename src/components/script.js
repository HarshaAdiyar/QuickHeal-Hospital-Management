
// function generateCaptcha()
// {
//     let alpha= new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0');
//     let i;
//     for (i=0;i<4;i++){
//       let a = alpha[Math.floor(Math.random() * alpha.length)];
//       let b = alpha[Math.floor(Math.random() * alpha.length)];
//       let c = alpha[Math.floor(Math.random() * alpha.length)];
//       let d = alpha[Math.floor(Math.random() * alpha.length)];
//      }
//    let code = a + '' + b + '' + '' + c + '' + d;
//    document.getElementById("mainCaptcha").value = code
//  }
//  function CheckValidCaptcha(){
//      let string1 = removeSpaces(document.getElementById('mainCaptcha').value);
//      let string2 = removeSpaces(document.getElementById('txtInput').value);
//      if (string1 == string2){
// // document.getElementById('error').innerHTML = "Form is validated Successfully";
// //alert("Captcha is correct");
//        return true;
//      }
//      else{       
// //document.getElementById('error').innerHTML = "Please enter a valid captcha."; 
// alert("Please enter a valid captcha.");
//        return false;

//      }
//  }
//  function removeSpaces(string){
//    return string.split(' ').join('');
//  }
<div className="keyboardRow roundBorder" value={"example"} onClick={e => this.handleInput(e, "value")} ></div>

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Login from './Components/Login';

export class script extends Component {
  constructor(props){
    super(props)
    this.state = {
        operations: []
    }

}

  handleInput(props) {
    const buttonValue= this.props.value;
    console.log(buttonValue)
}
<div className="btn btn-outline-secondary" value={} onClick={e => this.handleInput(e, "value")} ></div>

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}



export default script



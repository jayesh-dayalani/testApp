
import React, { useState } from 'react';
import {

  Button,
  Text,
  View,
} from 'react-native';
import MyForm from './components/MyForm';
import Registeration from './components/SampleForm';

function App(): React.JSX.Element {

  const btnCheck = () => {
    console.warn("button working!!")
  }
  const [mytitle, setmytitle] = useState("default title")

  let changemytitle = () => {
    setmytitle("jayesh")
  }

  return (
    <View style={{padding:'8%', }} >
      {/* <Text style={{fontSize:30,textAlign:'center'}}>{mytitle}</Text>
      <Button title='Press Here' onPress={changemytitle}></Button> */}
      {/* <NewsComponent/> */}
      {/* <MyForm/> */}
      <Registeration/>
      </View>
  );
}



export default App;

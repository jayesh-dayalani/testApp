import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

const MyForm = () => {
    const [name,setName] = useState("")
    return (
        <View>
            <Text>Your text : {name}</Text>
            <TextInput placeholder='Enter your name' style={styles.textInput}  onChangeText={(text)=>setName(text)} value={name}/>
            <Button title='Clear' onPress={()=>setName("") } />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        color:'red',
        backgroundColor:'lightgray',
    }
})

export default MyForm;

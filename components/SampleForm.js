import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const SampleForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [display, setDisplay] = useState(false)

    return (
        <View>
            <Text style={styles.myHeading}>Sample Form</Text>
            <TextInput
                style={styles.myTextHolder}
                placeholder='Enter your name here'
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.myTextHolder}
                placeholder='Enter your email here'
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.myTextHolder}
                placeholder='Enter your password here'
                value={pass}
                secureTextEntry={true}
                onChangeText={(text) => setPass(text)}
            />

            <View style={styles.myMargin}>
                <Button
                    title='Display Details'
                    onPress={() => setDisplay(true)}
                />
            </View>
            <View style={styles.myMargin}>
                <Button
                    title='Clear Details'
                    onPress={() => { setDisplay(false), setName(""), setEmail(""), setPass("") }}
                />
            </View>
            <View>
                {display ? <View>
                    <Text>{name}</Text>
                    <Text>{email}</Text>
                    <Text>{pass}</Text>
                </View> : null}
            </View>


        </View>
    );
}

const styles = StyleSheet.create({

    myHeading: {
        fontSize: 40,
        color: 'black'
    },
    myLabel: {
        fontSize: 20,
        color: 'purple'
    },
    myTextHolder: {
        fontSize: 20,
        borderColor: 'blue',
        color: 'purple',
        borderWidth: 2,
        margin: 5
    },
    myMargin: {
        margin: 10,

    }

})

export default SampleForm;

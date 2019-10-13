import React, { useState }  from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native'

export default function SignupScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
              <TextInput
                  style={styles.inputBox}
                  value={name}
                  onChangeText={name => setName(name)}
                  placeholder='Full Name'
              />
              <TextInput
                  style={styles.inputBox}
                  value={email}
                  onChangeText={email => setEmail(email)}
                  placeholder='E-Mail'
                  autoCapitalize='none'
              />
              <TextInput
                  style={styles.inputBox}
                  value={password}
                  onChangeText={password => setPassword(password)}
                  placeholder='Password'
                  secureTextEntry={true}
              />
              <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
          </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#FFA611',
        borderColor: '#FFA611',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
});

SignupScreen.navigationOptions = {
  title: 'Sign Up',
};
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'



const Login = ({navigation}) => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const validarUser = () =>{

        if (user == 'karen' && password == '1234'){
            alert('contrase;a correcta')
            navigation.navigate('tarea')
            
        }
        else{
            alert('contrase;a incorrecta')
        }
        

    }
    const cambiarForm = () => {
        navigation.navigate ('calculo')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Usuario</Text>
            <TextInput
            style={styles.inputs}
            placeholder={'Ingrese su gmail'}
            onChangeText={setUser}

            />
            <Text style={styles.text}>Contraseña</Text>
            <TextInput
            style={styles.inputs}
            placeholder={'ingrese su contrasenia '}
            onChangeText={setPassword}
            
            // keyboardType={''}

            />
            <View style ={styles.button}>
            <Button
                title="iniciar"
                onPress={validarUser}
                
            />
            {/* <Button
                title="liquidacion"
                onPress={cambiarForm}
                
            /> */}

            </View>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445',
        marginTop:30
        
    },
    text:{
        fontSize:44,
        color:'#05786A'
    },
    button:{
        color: '#C4C4C4',
        marginTop:50
    },
    container: {
        marginTop: '50%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

})
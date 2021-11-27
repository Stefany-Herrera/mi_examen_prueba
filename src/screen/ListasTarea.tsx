import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

const ListasTarea = ({navigation}) => {
    return (
        <View>
            <TextInput
            style={styles.inputs}
            placeholder={'Ingrese su tarea'}
            />
            <Button title="atras" onPress={() => navigation.goBack( )} />

            
        </View>
    )
}
export default ListasTarea

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
        
    }
})
   




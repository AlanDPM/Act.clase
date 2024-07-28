import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

const logginP1 = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>HOLA</Text>
      <Text style={styles.titulo2}>Iniciar sesión</Text>
      <View style={styles.contenedorinput}>
        <TextInput
        style={styles.input}
        placeholder="Usuario"
        keyboardType="text"
        />
        <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Contraseña"
        keyboardType="text"
        />
        <View style={{alignItems:"center"}}>
          <TouchableOpacity style={styles.button} onPress={()=>Alert.alert("Procesando...")}>
            <Text style={{color:'while',textAlign:'center'}}>Loggin</Text>
            </TouchableOpacity>  
        </View>
        
      </View>
    </View>
  )
}

export default logginP1;

const styles = StyleSheet.create({
    contenedor:{
flex:1,
justifyContent:"center",
backgroundColor:'#cdcdcd',

    },
    titulo:{
      textAlign:'center',
        fontSize:53,
        color:'black',
        fontWeight:'bold'
    },
    titulo2:{
textAlign:'center'
    },
    contenedorinput:{
      padding:15
    },
    input:{
      marginTop:15,
      backgroundColor:'white',
      padding:10,
      borderRadius:10
    },
    button:{
      width:250,
      padding:10,
      marginTop:25,
      backgroundColor:'#C469D8',
      borderRadius:15
    }
});
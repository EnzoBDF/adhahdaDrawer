import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export function ScreenA(){
    const navigation = useNavigation();

    
    function openScreen(){
        navigation.navigate('screenB')
    }


    return (
        <view style={styles.container}>
    
            <Text style={styles.titulo}>Feed The Beast</Text>
            <Image source={require('/Users/enzo_francisco/Documents/Projeto3Telas/assets/kimpetras.webp')}
            style={styles.img}/>
            <View style={{display:'flex', width:200, justifyContent:'center', alignItems:'center', backgroundColor:'#414244', height:200, borderRadius:20,opacity:'80%' }}>
            <Text style={styles.textinho}>Know the newest release from Kim Petras, listen now to Feed The Beast.</Text>
            </View>
           <TouchableOpacity onPress={openScreen} style={styles.button}>Unleash your beast</TouchableOpacity> 
        
        </view>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
        backgroundColor:'#1e2021',
        flexDirection:'column',
    },
    titulo:{
        fontSize:25,
        color:'#f2f2f2',
        top:0,
        position:'absolute',
        marginTop:40,
    },
    img:{
        width:150,
        height:150,
        borderRadius:200,
        position:'absolute',
        top:100,
        zIndex: 2,
        borderWidth:7,
        borderColor:'#414244',
    },
    textinho:{
        color:'#f2f2f2',
        fontSize:20,
        textAlign:'center',
        marginTop:30,
    },
     button:{
        width:200,
        height:50,
        justifyContent:'center',
        alignItems: 'center',
        display:'flex',
        position:'absolute',
        top: 450,
        color:'#f2f2f2',
        fontFamily:'Verdana',
        backgroundColor:'#414244',
        opacity:'80%',
        borderRadius:10, 



     }

  });









import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export function ScreenB(){
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20, color:'white'}}>All the Tracks now Available</Text>
            <View style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Text style={styles.track}>Unholy</Text>
            <Text style={styles.track}>Coconuts</Text>
            <Text style={styles.track}>uhoh</Text>
            <Text style={styles.track}>Minute</Text>
            <Text style={styles.track}>King of Hearts</Text>
            <Text style={styles.track}>BAIT</Text>
            <Text style={styles.track}>brrr</Text>
            <Text style={styles.track}>Claws</Text>
            <Text style={styles.track}>Revelations</Text>
            <Text style={styles.track}>Feed The Beast</Text>
            <Text style={styles.track}>Alone</Text>
            <Text style={styles.track}>Thousand Pieces</Text>
            <Text style={styles.track}>Sex Talk</Text>
            <Text style={styles.track}>Castle In The Sky</Text>
            <Text style={styles.track}>Hit It From The Back</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e2021',
      alignItems: 'center',
      justifyContent: 'center',
      color:'#f2f2f2'
    },

    track:{
        fontSize:14,
        color:'#f2f2f2',
        fontFamily:'Verdana',
    }
  });
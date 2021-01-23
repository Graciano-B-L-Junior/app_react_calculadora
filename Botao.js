import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Botao(props) {
    return (
        <View style={styles.botao}>
            <TouchableOpacity onPress={()=>props.calculadora(props.numero)} style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                <Text style={{ color: 'white',fontSize:26 }}>{props.numero}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    botao: {
        width: '33.3%',
        height: '20.92%',
        borderWidth: 2,
        borderColor: 'white'
    }
})
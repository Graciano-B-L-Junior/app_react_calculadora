import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Botao from './Botao';

export default function App() {

  const [primeiro, setPrimeiro] = useState(0)
  const [segundo, setSegundo] = useState(0)
  const [stringCalculo, setStringCalculo] = useState("0")
  const [sinal, setSinal] = useState("")

  function calculadora(digito) {
    if (sinal == "") {
      setPrimeiro(parseInt(primeiro.toString() + digito.toString()))
      setStringCalculo(parseInt(primeiro.toString() + digito.toString()))
    }
    if ((digito == "+" || digito == "-" || digito == "*" || digito == "/") && segundo == 0) {
      setSinal(digito)
      setStringCalculo(primeiro.toString() + digito)
    }
    if (sinal != "") {
      setSegundo(parseInt(segundo.toString() + digito.toString()))
      setStringCalculo(primeiro.toString() + sinal + parseInt(segundo.toString() + digito.toString()))
    }
    if (digito == "=") {
      if (sinal == "+") {
        setPrimeiro(primeiro + segundo)
        setSegundo(0)
        setSinal("")
        setStringCalculo(primeiro + segundo)
      }
      if (sinal == "-") {
        setPrimeiro(primeiro - segundo)
        setSegundo(0)
        setSinal("")
        setStringCalculo(primeiro - segundo)
      }
      if (sinal == "*") {
        setPrimeiro(primeiro * segundo)
        setSegundo(0)
        setSinal("")
        setStringCalculo(primeiro * segundo)
      }
      if (sinal == "/") {
        setPrimeiro(primeiro / segundo)
        setSegundo(0)
        setSinal("")
        setStringCalculo(primeiro / segundo)
      }
    }

  }

  var numeros = []
  for (var i = 0; i <= 9; i++) {
    numeros.push(i)
  }
  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={{ color: 'white', fontSize: 26 }}>{stringCalculo}</Text>
      </View>
      <View style={styles.operations}>
        <TouchableOpacity onPress={() => calculadora('+')} style={{ width: '20%', height: '100%', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 26, textAlign: 'center' }}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => calculadora('-')} style={{ width: '20%', height: '100%', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 26, textAlign: 'center' }}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => calculadora('*')} style={{ width: '20%', height: '100%', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 26, textAlign: 'center' }}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => calculadora('/')} style={{ width: '20%', height: '100%', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 26, textAlign: 'center' }}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => calculadora('=')} style={{ width: '20%', height: '100%', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontSize: 26, textAlign: 'center' }}>=</Text>
        </TouchableOpacity>

      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {
          numeros.map((val) => {
            return (<Botao calculadora={calculadora} numero={val}></Botao>)
          })
        }

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  topo: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    padding: 10,
    height: '15%'
  },
  operations: {
    flexDirection: 'row',
    height: '15%',
    alignItems: 'center'
  }
});

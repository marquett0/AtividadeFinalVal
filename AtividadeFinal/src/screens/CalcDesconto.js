import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert
} from 'react-native';

const CalcDesconto = () => {
  const [precoOrig, setPrecoOrig] = useState('');
  const [porcDesc, setPorcDesc] = useState('');
  const [valorDisc, setValorDisc] = useState(null);
  const [precoFinal, setPrecoFinal] = useState(null);

  const calculoDescount = () => {
  const price = parseFloat(precoOrig);
  const discount = parseFloat(porcDesc);

  if (isNaN(price) || isNaN(discount)) {
    Alert.alert('Erro o preencha todos os campos corretamente.');
    return;
  }

  if (discount < 0 || discount > 100) {
    Alert.alert('Erro o percentual de desconto deve estar entre 0 e 100.');
    return;
  }

  const quantDesconto = (price * discount) / 100;
  const descFinal = price - quantDesconto;

  setValorDisc(quantDesconto);
  setPrecoFinal(descFinal);
};


  // para limpar ou resetar valores
  const clearFields = () => {
    setPrecoOrig('');
    setPorcDesc('');
    setValorDisc(null);
    setPrecoFinal(null);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titulo}>Calculadora de Desconto</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Preço Original (R$)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 200.00"
            keyboardType="numeric"
            value={precoOrig}
            onChangeText={setPrecoOrig}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Percentual de Desconto (%)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 10"
            keyboardType="numeric"
            value={porcDesc}
            onChangeText={setPorcDesc}
          />
        </View>

        <TouchableOpacity style={styles.buttonCalcul} onPress={calculoDescount}>
          <Text style={styles.buttonCalculText}>Calcular Desconto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonClear} onPress={clearFields}>
          <Text style={styles.buttonClearText}>Limpar Campos</Text>
        </TouchableOpacity>

        {(valorDisc !== null || precoFinal !== null) && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultitulo}>Resultado:</Text>
            <View style={styles.resulItem}>
              <Text style={styles.resulLabel}>Valor do Desconto:</Text>
              <Text style={styles.resulValue}>R$ {valorDisc?.toFixed(2)}</Text>
            </View>
            <View style={styles.resulItem}>
              <Text style={styles.resulLabel}>Preço Final:</Text>
              <Text style={[styles.resulValue, styles.precoFinal]}>
                R$ {precoFinal?.toFixed(2)}
              </Text>
            </View>
          </View>
        )}

        
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  buttonCalcul: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonCalculText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonClear: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonClearText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
  },
  resultitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  resulItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  resulLabel: {
    fontSize: 16,
    color: '#666',
  },
  resulValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  precoFinal: {
    color: '#007AFF',
    fontSize: 20,
  }
});

export default CalcDesconto;
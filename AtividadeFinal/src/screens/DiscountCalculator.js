import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert
} from 'react-native';

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [discountValue, setDiscountValue] = useState(null);
  const [finalPrice, setFinalPrice] = useState(null);

  const calculateDiscount = () => {
    // Validação dos campos
    if (!originalPrice || !discountPercentage) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);

    if (isNaN(price) || isNaN(discount)) {
      Alert.alert('Erro', 'Por favor, insira valores numéricos válidos.');
      return;
    }

    if (discount < 0 || discount > 100) {
      Alert.alert('Erro', 'O percentual de desconto deve estar entre 0 e 100.');
      return;
    }

    const discountAmount = (price * discount) / 100;
    const finalAmount = price - discountAmount;

    setDiscountValue(discountAmount);
    setFinalPrice(finalAmount);
  };

  const clearFields = () => {
    setOriginalPrice('');
    setDiscountPercentage('');
    setDiscountValue(null);
    setFinalPrice(null);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Calculadora de Desconto</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Preço Original (R$)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 200.00"
            keyboardType="numeric"
            value={originalPrice}
            onChangeText={setOriginalPrice}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Percentual de Desconto (%)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 10"
            keyboardType="numeric"
            value={discountPercentage}
            onChangeText={setDiscountPercentage}
          />
        </View>

        <TouchableOpacity style={styles.calculateButton} onPress={calculateDiscount}>
          <Text style={styles.calculateButtonText}>Calcular Desconto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clearButton} onPress={clearFields}>
          <Text style={styles.clearButtonText}>Limpar Campos</Text>
        </TouchableOpacity>

        {(discountValue !== null || finalPrice !== null) && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultTitle}>Resultado:</Text>
            <View style={styles.resultItem}>
              <Text style={styles.resultLabel}>Valor do Desconto:</Text>
              <Text style={styles.resultValue}>R$ {discountValue?.toFixed(2)}</Text>
            </View>
            <View style={styles.resultItem}>
              <Text style={styles.resultLabel}>Preço Final:</Text>
              <Text style={[styles.resultValue, styles.finalPrice]}>
                R$ {finalPrice?.toFixed(2)}
              </Text>
            </View>
          </View>
        )}

        <View style={styles.exampleContainer}>
          <Text style={styles.exampleTitle}>Exemplo:</Text>
          <Text style={styles.exampleText}>Preço original = 200</Text>
          <Text style={styles.exampleText}>Desconto = 10%</Text>
          <Text style={styles.exampleText}>→ Desconto: R$ 20</Text>
          <Text style={styles.exampleText}>→ Preço final: R$ 180</Text>
        </View>
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
  title: {
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
  calculateButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  calculateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 30,
  },
  clearButtonText: {
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
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  resultLabel: {
    fontSize: 16,
    color: '#666',
  },
  resultValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  finalPrice: {
    color: '#007AFF',
    fontSize: 20,
  },
  exampleContainer: {
    backgroundColor: '#e8f4fd',
    padding: 15,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  exampleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  exampleText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
});

export default DiscountCalculator;
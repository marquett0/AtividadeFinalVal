import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar
} from 'react-native';
import { carsData } from '../data/carsData';
import CarCard from '../components/CarCard';

const CarList = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.Titulo}>Lista de Carros</Text>
      <Text style={styles.subTitulo}>{carsData.length} carros encontrados</Text>
      
      <FlatList
        data={carsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CarCard car={item} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  Titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },
  subTitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default CarList;
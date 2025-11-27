import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const CarCard = ({ car }) => {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: car.imagem }} 
        style={styles.carImage}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.carTitle}>
          {car.marca} {car.modelo}
        </Text>
        <View style={styles.carDetails}>
          <Text style={styles.carDetail}>Ano: {car.ano}</Text>
          <Text style={styles.carDetail}>Cor: {car.cor}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  carImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  carTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  carDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  carDetail: {
    fontSize: 16,
    color: '#666',
  },
  carId: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
});

export default CarCard;
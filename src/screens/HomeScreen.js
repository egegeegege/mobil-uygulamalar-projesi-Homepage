import React from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';

import Header from '../components/Header';
import Card from '../components/FlightCard';

const restaurants = [
  {
    name: 'Turkish Airlines',
    categories: 'Economy Class',
    deliveryTime: 'Istanbul-Bratislava',
    distance: '1520,3 KM',
     image: require('../../assets/istanbul.jpg'),
    id: 1,
  },
  {
     name: 'Pegasus',
    categories: 'Economy Class',
    deliveryTime: 'Amsterdam-Kahire',
    distance: '3282 KM',
      image: require('../../assets/amsterdam.jpg'),
    id: 2,
  },
  {
     name: 'Qatar Airlines',
    categories: 'First Class',
    deliveryTime: 'Berlin-Brüksel',
    image: require('../../assets/brüksel.jpg'),
    distance: '754,3 KM',
    id: 3,
  },
  {
    name: 'Sunexpress',
    categories: 'Economy Class',
    deliveryTime: 'Varşova-Buenos Aires',
  image: require('../../assets/varşova.jpg'),
    distance: '12.320 km',
    id: 4,
  },
  {
    name: 'Anadolu Jet',
    categories: 'First Class',
    deliveryTime: 'Norwich-Oslo',
 image: require('../../assets/oslo.jpg'),
    distance: '1645,6 km',
    id: 5,
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header label="
Flight List" />
  
      <StatusBar barStyle="dark-content" />

      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return <Card info={item} />;
        }}
        keyExtractor={(restaurant) => restaurant.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40A2E3',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default HomeScreen;
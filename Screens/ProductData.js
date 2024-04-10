import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity,FlatList } from 'react-native';
import navigationStrings from '../constants/navigationStrings';
import axios from 'axios';

const ProductData = ({ navigation ,route}) => {
  const {productid,doctorid}  = route?.params || {};
  const [doctorVisuals, setDoctorVisuals] = useState([]);
  const [visual, setVisual] = useState([]);
  const [doc, setDoc] = useState([]);
  const fetchData = async () => {
    try {
      const {data} = await axios.get(
        'https://www.bsagroup.redniruscare.com/api/get/doctor/',
      );
      console.log('data is this', data);
      setVisual(data.doctor);
    } catch (err) {
      console.log('doctor error', err);
    }
  };  
  const keyExtractor = item => `${item.id}`;
  const Divisonfunction = (id) => {
    navigation.navigate(navigationStrings.VISUAL, { id: id, })

  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <FlatList
        data={visual}
        keyExtractor={keyExtractor}
        renderItem={({item}) => {
          return (
            <View style={styles.button}>

                    <TouchableOpacity
                      style={{color: '#000000'}}
                      onPress={() => Divisonfunction(item.id)}>
                     <View style={styles.buttonText}>
                      <Text style={styles.txt}>Products of </Text>
                      <Text style={styles.txt}>{item.name}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#433344',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    alignItems: 'center',
  },
  buttonText: {
    flexDirection:"row",
    justifyContent:"space-between",
  },
  txt:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:10,
  },
});

export default ProductData;


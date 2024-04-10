import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,View,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
const {width} = Dimensions.get('window');

const DoctorDetails = ({route}) => {
  const [doc, setDoc] = useState([]);
  const fetchData = async () => {
    try {
      const {data} = await axios.get(
        'https://www.bsagroup.redniruscare.com/api/get/doctor',
      );
      setDoc(data.doctor);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const KeyExtractor = item => `${item.id}`;
  const navigation = useNavigation();
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
      <Image
              source={imagePath.LEFT_ARROW}
              style={styles.arrow}
              tintColor={colors.black}
            />
      </TouchableOpacity>
      <Image
        source={{
          uri: `https://www.bsagroup.redniruscare.com/${item.image}`,
        }}
        style={styles.img}
      />
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <Text>{item.name}</Text>
      <Text>{item.email}</Text>
      </View>
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
      <Text>{item.phone}</Text>
      <Text>{item.address}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  image: {
    height: width / 1.8,
    width: width - 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    textTransform: 'uppercase',
  },
  description: {
    fontSize: 18,
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    right: 5,
    fontStyle: 'italic',
  },
  img:{
    width:width-20,
    height: width/1.7,
    alignSelf:'center',
  },
  arrow:{
    margin:10,
    height:20,
    width:25,
  },
});

export default DoctorDetails;

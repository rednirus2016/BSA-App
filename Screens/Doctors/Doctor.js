import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import DelIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const {width} = Dimensions.get('window');
const Doctor = ({navigation}) => {
  const [doc, setDoc] = useState([]);
  const nav = useNavigation();
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
  const keyExtractor = item => `${item.id}`;
  const deleteData = async id => {
    const result = Alert.alert('are you really want to delete Doctor data ?');
    await axios.delete(
      `https://www.bsagroup.redniruscare.com/api/get/doctor/${id}/`,
    );
    fetchData();
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
      <Image
              source={imagePath.LEFT_ARROW}
              style={styles.arrow}
              tintColor={colors.black}
            />
      </TouchableOpacity>
      <FlatList
        data={doc}
        keyExtractor={keyExtractor}
        renderItem={({item}) => {
          return (
            <View style={styles.maincontainer}>
              <View style={styles.container}>
                
                <View style={{flex: 1, width: '50%'}}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.texthandle}>{item.name}</Text>
                    <Text style={styles.texthandle}>{item.email}</Text>
                  </View>
                  <View style={{borderBottomWidth:1,width:"100%",height:1,flexDirection:'column',margin:5, alignSelf:"center"}}></View>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.texthandle}>{item.address}</Text>
                    <Text style={styles.texthandle}>{item.phone}</Text>
                  </View>
                      <View style={{borderBottomWidth:1,width:"100%",height:1,flexDirection:'column',margin:5, alignSelf:"center"}}></View>
                      <View style={{width:"50%",marginTop:10,marginBottom:-10,position:"relative"}}>
                        <Text style={{color:"red"}}>Delete Doctor <DelIcon
                        name="delete-empty-outline"
                        size={24}
                        onPress={() => deleteData(item.id)}
                        style={styles.delete}
                      /></Text>
                      </View>
                </View>
              </View>
            </View>
          );
        }}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
export default Doctor;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    height: width /1.7,
    width: '100%',
    borderRadius: 12,
  },
  texthandle:{
    fontSize:14,
    width:"48%",
  },
  delete: {
        alignSelf: 'center',
        color: 'red',
      },
  arrow:{
    marginVertical:10,
    marginHorizontal:10,
    marginBottom:0,
  },
  arrow:{
    margin:10,
    height:20,
    width:25,
  },
});


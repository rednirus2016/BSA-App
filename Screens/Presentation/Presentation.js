import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import WrapperContainer from '../../components/WrapperContainer'
import Toptabs from '../../components/Toptabs'

import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import { Collapse, CollapseHeader, CollapseBody, } from 'accordion-collapse-react-native';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import Productmodal from '../../components/Productmodal';
import navigationStrings from '../../constants/navigationStrings';
import commonStyles from '../../styles/commonStyles';
import trsh from '../../assets/images/trsh.png';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from 'react-native';

const Presentation = ({ navigation }) => {
    const [users, setUsers] = useState({})
    const [ppt, setPpt] = useState([])
    const [loading , setLoading] = useState(false)
    var { width } = Dimensions.get('window');
    const singleuser = async () => {
        const loginusers = await AsyncStorage.getItem('userdata');
        const value = JSON.parse(loginusers)
        setUsers(value)

    }

    const getppt = async () => {

        const { data } = await axios.get(`https://bsagroup.redniruscare.com/api/getppt/byuserid/`)
        setPpt(data.product);
    }
    const deleteppt = async(name) =>{
        const {data} = await axios.delete(`https://bsagroup.redniruscare.com/api/deleteppt/byuserid/${users.id}/${name}`)
        Alert.alert(data.message)
        navigation.navigate(navigationStrings.HOME)
       
      }
    useEffect(() => {
        singleuser();
        getppt()
    }, []);
   
    

    return (
        <WrapperContainer>
            <View style={styles.headerview}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
      <Image
              source={imagePath.LEFT_ARROW}
              style={styles.arrowlf}
              tintColor={colors.black}
            />
      </TouchableOpacity>
      <Text style={{marginLeft:15,marginTop:5}}>Presentation</Text>
            </View>
            <ScrollView>
                {
                    users ? ( <View >
                        {
                            ppt.map((item) => {
                                return (
                                    <View key={item.id} style={styles.container}>
                                        <Image source={{ uri: `https://bsagroup.redniruscare.com/${item.image}` }} style={{
    
                                            resizeMode: 'cover',
                                        width: '100%',
                                        height: '100%'
    
                                          }} />
                                          <TouchableOpacity onPress={()=>deleteppt(item.name)}>
                                             <Image source={trsh}/>
                                          </TouchableOpacity>
                                    </View>
                                )
                            })
                        }
                    </View>) :(<View>
                       <Text>Please Login First !</Text>
                    </View>)
                }
               
            </ScrollView>

        </WrapperContainer >
    )
}
export default Presentation;

const styles = StyleSheet.create({

    container: 
    { 
       
        ...commonStyles.shadowStyle2,  
        marginTop:70,justifyContent:"center",width: 250, height: 250,
    backgroundColor: "#fff",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 4,
    marginLeft:50,
    zIndex:99999
},
headerview:{
    flexDirection:"row",
    backgroundColor:"rgb(87, 140, 79)",
},
arrow:{
    marginLeft:5,
},
arrowlf:{
    margin:10,
    height:20,
    width:25,
  },


});

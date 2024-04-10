import { View, Text, TouchableOpacity, Image, Alert, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import WrapperContainer from '../../components/WrapperContainer'
import styles from './styles';
import imagePath from '../../constants/imagePath';
import commonStyles from '../../styles/commonStyles';
import { moderateScale, moderateScaleVertical, width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import navigationStrings from '../../constants/navigationStrings';
import en from '../../constants/lang/en';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import doctorimag  from '../../assets/images/user.png'
import { RefreshControl } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import SliderBoxes from './SliderBoxes';

const Home = (props) => {
  const navigation = useNavigation();

  const category = [
    { key: "1", IMG: imagePath.Orthocare, apiLink: 'https://bsagroup.redniruscare.com/api/orthocare/', name: "bsagroup" },
    { key: "2", IMG: imagePath.GYNACARE, apiLink: 'https://bsagroup.redniruscare.com/api/gynaecare/', name: "bsagroup" },
    { key: "3", IMG: imagePath.DIBCARD, apiLink: 'https://bsagroup.redniruscare.com/api/bsa-dibcard/', name: "bsagroup" },
    { key: "4", IMG: imagePath.LOGO, apiLink: 'https://bsagroup.redniruscare.com/api/bsapharma/', name: "bsagroup" },
    { key: "5", IMG: imagePath.bsaHerbs, apiLink: 'https://bsagroup.redniruscare.com/api/herbal/', name: "bsagroup" },
    { key: "6", IMG: imagePath.VATCARE, apiLink: 'https://bivetybiosciences.com/api/allProducts', name: "vetcare" },
    { key: "7", IMG: imagePath.sglogo, apiLink: 'https://bsagroup.redniruscare.com/api/biocare/', name: "bsagroup" },
  ]
  const Patent = [
    { key: "1", IMG: imagePath.patent1, apiLink: 'https://bsagroup.redniruscare.com/api/aquamin/', name: "bsagroup" },
    { key: "2", IMG: imagePath.patent2, apiLink: 'https://bsagroup.redniruscare.com/api/UC/', name: "bsagroup" },
    { key: "3", IMG: imagePath.patent3, apiLink: 'https://bsagroup.redniruscare.com/api/BOSWELLIN/', name: "bsagroup" },
    { key: "4", IMG: imagePath.patent4, apiLink: 'https://bsagroup.redniruscare.com/api/HALDIMAX/', name: "bsagroup" },
    { key: "5", IMG: imagePath.patent5, apiLink: 'https://bsagroup.redniruscare.com/api/BIOPERINE/', name: "bsagroup" },
    { key: "8", IMG: imagePath.patent6, apiLink: 'https://bsagroup.redniruscare.com/api/ULTRAGEN/', name: "bsagroup" },
    { key: "6", IMG: imagePath.patent7, apiLink: 'https://bsagroup.redniruscare.com/api/CARNIPURE/', name: "bsagroup" },
    { key: "7", IMG: imagePath.patent8, apiLink: 'https://bsagroup.redniruscare.com/api/DIGEZYME/', name: "bsagroup" },

  ]
  const [items, setItems] = useState([]);
  const [name, setName] = useState([]);
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState({})
  const [refresh,setRefresh] = useState(true);
  const images = [
    "https://bsagroup.redniruscare.com/Products/phpGFpxVI",
    "https://bsagroup.redniruscare.com/Products/phpqxtE3i",
    "https://bsagroup.redniruscare.com/Products/php57C0jB",
    "https://bsagroup.redniruscare.com/Products/phpNkoEjh",

  ]
  const singleuser = async () => {
    const loginusers = await AsyncStorage.getItem('userdata');
    const value = JSON.parse(loginusers)
    console.log("this is loginusers",loginusers);
    console.log("this is users",users);
    setUsers(value)
  }
 
  const Divisonfunction = (item) => {
    navigation.navigate(navigationStrings.DIVISIONCAT, { nxtdata: item, })

  }

  const getUserName = async () => {
    try {
      const { data } = await axios.get('https://www.bsagroup.redniruscare.com/api/get/mr/')
      if (data.success && data.mr && data.mr.length > 0) {
        const firstName = data.mr[0].name; 
        setName(firstName);
        setIsLoggedIn(true);
        setRefresh(true);
      } else {
        console.log('No user data found'); 
      }
    } catch (err) {
      console.log(err);
      console.log("this is error");
    }
  }
  
  useEffect(() => {
    getUserName();
    singleuser();
  }, []);


  return (
    <View style={{flex:1,backgroundColor:"green",width:"98%",alignSelf:"center"}}>
      <WrapperContainer>
        <SafeAreaView style={{ flex: 1, }}>
          <KeyboardAwareScrollView   showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>

              <View style={styles.outer2}>
                <View style={styles.view3}>
                  <TouchableOpacity style={styles.outer4} onPress={() => navigation.navigate(navigationStrings.SEARCH)}>
                    <Image source={imagePath.SEARCH} style={styles.searchimg} tintColor={colors.btncolor} />
                    <Text style={styles.Logintxt}>
                      {en.SEARCH_PRODUCT}
                    </Text>
                  </TouchableOpacity>
                </View>


                {users? (

                  <Text style={{ ...commonStyles.fontSize18, color: colors.white, fontWeight: "700", alignSelf: "center" }}>
                    {users.name}
                  </Text>) : (<TouchableOpacity style={{ justifyContent: "center" }} onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
                    <Text style={{ ...commonStyles.fontSize18, color: colors.white, fontWeight: "700", alignSelf: "center" }}>LOGIN</Text>
                  </TouchableOpacity>)}
              </View>
            </View>
              {
                users?(
                  <>
                   <Text style={{marginLeft:10,marginTop:10}}>Hi {users.name}</Text>
                   
                      {users ?
                      <View style={[styles.doctwise, { backgroundColor: '#76c749', },]}>
                        <TouchableOpacity style={{ flexDirection: "row", }}
                          onPress={() => navigation.navigate(navigationStrings.ViewDoctor)}>
                          <View style={styles.innertouch1}>
                            <Image source={imagePath.Presentation} style={{ ...commonStyles.Img20, tintColor: '#76c749', }} />
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <Text style={styles.functiontxt}>
                              Doctors  Wise Detailings
                            </Text>
                          </View>
                        </TouchableOpacity>
                        </View>
                        :
                        null}
                   <View style={styles.viewfourouter}>
  
                  <View style={[styles.viewtwo, { marginRight: moderateScaleVertical(10) }]}>
                    <View style={[styles.viewone, { backgroundColor: '#67d1df', }]}>
                      {users ?
                        <TouchableOpacity style={{ flexDirection: "row", }} onPress={() => { navigation.navigate(navigationStrings.TRAINIG) }}>
                          <View style={styles.innertouch1}>
                            <Image source={imagePath.VIDEO_BUTTON} style={{ ...commonStyles.Img20, tintColor: '#67d1df', }} />
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <Text style={styles.functiontxt}>
                              Training Module
                            </Text>
                          </View>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={{ flexDirection: "row", }} onPress={() => { navigation.navigate(navigationStrings.LOGIN) }}>
                          <View style={styles.innertouch1}>
                            <Image source={imagePath.VIDEO_BUTTON} style={{ ...commonStyles.Img20, tintColor: '#67d1df', }} />
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <Text style={[styles.functiontxt]}>
                              Training Module
                            </Text>
                          </View>
                        </TouchableOpacity>
                      }
                    </View>
                  </View>
                  <View style={styles.viewtwo}>
    
                    <View style={[styles.viewone, { backgroundColor: '#f1bb2d', }]}>
                      {users ?
                        <TouchableOpacity style={{ flexDirection: "row", }}
                          onPress={() => navigation.navigate(navigationStrings.TESTREPORT)}>
                          <View style={styles.innertouch1}>
                            <Image source={imagePath.TEST_REPORT} style={{ ...commonStyles.Img20, tintColor: '#f1bb2d', }} />
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <Text style={styles.functiontxt}>
                              Test report
                            </Text>
                          </View>
                        </TouchableOpacity> :
                        <TouchableOpacity style={{ flexDirection: "row", }}
                          onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
                          <View style={styles.innertouch1}>
                            <Image source={imagePath.TEST_REPORT} style={{ ...commonStyles.Img20, tintColor: '#f1bb2d', }} />
                          </View>
                          <View style={{ justifyContent: "center" }}>
                            <Text style={styles.functiontxt}>
                              Test report
                            </Text>
                          </View>
                        </TouchableOpacity>}
                    </View>
                  </View>
                </View>
                  </>
                  
                )
              :null}
              
              {users ?
              <View>
               <Text style={{alignSelf:"center",fontSize:18}}>
               Images of New Launches
             </Text>
              <SliderBoxes/>
              </View>
                        :
                        null}
            <View style={styles.Dview1}>
              <View style={{ bottom: moderateScaleVertical(5) }}>
                <Text style={styles.headingtxt} > Our Divisions</Text>
              </View>
              <View style={styles.container}>
                <FlatList
                  data={category}
                  numColumns={2}
                scrollEnabled={false}
                  renderItem={({ item, index }) => {
                    return (
                      <View style={[styles.view1, { padding: moderateScale(5) }]}>
                        <TouchableOpacity style={styles.LoginTouch} onPress={() => Divisonfunction(item)}>
                          <View style={[styles.imgview, { padding: moderateScaleVertical(20) }]}>
                            <Image style={styles.Img}
                              source={item.IMG} />
                          </View>
                        </TouchableOpacity>
                      </View>
                    )
                  }
                  }
                />
              </View>

              <View style={{ marginVertical: moderateScaleVertical(20) }}>
                <Text style={styles.headingtxt} > Patent Ingredients</Text>
              </View>
              <View style={styles.container}>
                <FlatList
                  data={Patent}
                  numColumns={2}
                  scrollEnabled={false}
                  renderItem={({ item, index }) => {
                    return (
                      <View style={[styles.view1, { padding: moderateScale(5) }]}>
                        <TouchableOpacity style={styles.LoginTouch} onPress={() => Divisonfunction(item)}>
                          <View style={styles.imgview}>
                            <Image style={styles.Img}
                              source={item.IMG} />
                          </View>
                        </TouchableOpacity>
                      </View>
                    )
                  }
                  }
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </WrapperContainer >
    </View>
  )
}
export default Home;

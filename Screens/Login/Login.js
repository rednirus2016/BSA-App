import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView,ToastAndroid, Alert } from 'react-native'
import React, { useCallback, useEffect, useState ,} from 'react'
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import { height, moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import commonStyles from '../../styles/commonStyles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Doctor from '../Doctors/Doctor';
import { withNavigation } from 'react-navigation';


const Login = ({ navigation }) => {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [array, setArray] = useState([]);
  const [user, setUser] = useState({});
  
  const onpressforget = () => {
    navigation.navigate(navigationStrings.FORGETPASSWORD)
  }
  const signIn = async () => {
    try {
       
       const datas = {
        email:email,
        password:password
       }
       const {data} = await axios.post('https://bsagroup.redniruscare.com/api/mr_login/',datas)
       if(data.user){
        if(data.user.status === 1)
        {
          Alert.alert("Login successful");
          await AsyncStorage.setItem('userdata', JSON.stringify(data.user)); 
          navigation.reset({
            index: 0,
            routes: [{ name: navigationStrings.HOME }],
          });
          setemail('');
          setpassword('')
        }
        else if (data.user.type === "admin"){
          Alert.alert("Login successful");
          await AsyncStorage.setItem('userdata', JSON.stringify(data.user)); 
          navigation.reset({
            index: 0,
            routes: [{ name: navigationStrings.HOME }],
          });
          setemail('');
          setpassword('')
         }
        else{
          Alert.alert("Please wait for approved");
          setemail('');
          setpassword('')
        }
          
       }
      
       else{
        console.log("your console is not working");
       }
      } catch (err) {
      console.log("this is error",err);
    }
  };
  useEffect(()=>{
    signIn();
  },[]);
  return (
    <View style={styles.container}>
      <View style={styles.subView}>
        <View style={[styles.inner1, { justifyContent: "flex-start" }]}>
          <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.HOME)}>
            <Image source={imagePath.LEFT_ARROW} style={styles.upperimg} />
          </TouchableOpacity>
        </View>
        <Image source={imagePath.LOGO} style={styles.Img} />
        <Text style={styles.subTxt}>Login</Text>
        <View style={{ padding: moderateScaleVertical(20), backgroundColor: colors.white, }}>

          <TextInput style={styles.nameInput}
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={true}
            textContentType="emailAddress"
            autoCompleteType="email"
            placeholderTextColor={colors.black}
            selectionColor={colors.btncolor}
            value={email}
            onChangeText={(email) => setemail(email)}
          />
          <TextInput style={styles.nameInput}
            placeholder="Password"
            maxLength={8}
            autoCorrect={true}
            secureTextEntry={true}
            textContentType={'password'}
            placeholderTextColor={colors.black}
            selectionColor={colors.btncolor}
            value={password}
            onChangeText={(text) => setpassword(text)}
          />

          <TouchableOpacity style={styles.btn} onPress={signIn}>
            <Text style={styles.btnTxt}>Login</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity style={styles.endView} onPress={onpressforget}>
              <Text style={styles.endTxt}>Forget Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.endBtn} onPress={() => navigation.navigate(navigationStrings.SIGNUP)}>
              <Text style={styles.loginTxt}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
export default Login;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.btncolor,
    padding: moderateScaleVertical(30)
  },
  subView: {
    backgroundColor: 'white',
    height: height,
    padding: moderateScaleVertical(20),
    borderRadius: moderateScale(20)
  },
  inner1: {
    backgroundColor: colors.white,
    borderRadius: moderateScaleVertical(50),
    width: moderateScale(40),
    padding: moderateScaleVertical(10)
  },
  upperimg: {
    alignSelf: "center", ...commonStyles.Img20, tintColor: colors.black
  },
  Img: {
    height: moderateScale(150),
    width: moderateScale(150),
    resizeMode: "center",
    alignSelf: "center"
  },
  subTxt: {
    color: 'black',
    marginTop: moderateScaleVertical(20),
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: moderateScaleVertical(40),
  },
  nameInput: {
    height: moderateScale(40),
    marginVertical: moderateScaleVertical(10),
    borderBottomWidth: 1,
    color: colors.black
  },
  btn: {
    ...commonStyles.shadowStyle,
    height: moderateScale(50),
    backgroundColor: colors.btncolor,
    borderRadius: moderateScale(40),
    width: moderateScaleVertical(170),
    marginTop: moderateScaleVertical(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center"
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  endView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  endTxt: {
    fontSize: 15,
    color: colors.btncolor,
    marginTop: moderateScaleVertical(25),
    marginLeft: moderateScaleVertical(20),
    fontWeight: 'bold', color: colors.btncolor
  },
  endBtn: {
    marginRight: moderateScaleVertical(25),
  },
  loginTxt: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.btncolor,
    marginTop: moderateScaleVertical(25),
  },
});

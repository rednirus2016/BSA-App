import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Picker, ToastAndroid, Alert } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import { height,moderateScale, moderateScaleVertical, } from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import commonStyles from '../../styles/commonStyles';
import DropdownComponent from '../../components/DropdownComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown'
import ViewDoctor from './ViewDoctor';
const countries = ["Doctor"]

const AddDoctor = ({ navigation }) => {
  const [Name, setName] = useState(' ')
  const [Phone, setPhone] = useState('')
  const [Email, setEmail] = useState('')
  const [Area, setArea] = useState('')
  const [Password, setPassword] = useState('')
  const [Newpassword, setNewpassword] = useState('')
  const [Firm, setFirm] = useState('')
  const [GST, setGST] = useState('')
  const [Drug, setDrug] = useState('')
  const [FAddress, setFAddress] = useState('')
  const [array, setarray] = useState([])
  const [token, settoken] = useState(null)
  const [secureText, setSecureText] = useState(true)
  const [secureText2, setSecureText2] = useState(true)
  const [type, setType] = useState()

  const [error, setError] = useState('');

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);
  const inputRef7 = useRef(null);
  const inputRef8 = useRef(null);
  const inputRef9 = useRef(null);
  const inputRef10 = useRef(null);
  const inputRef11 = useRef(null);

  const onpressSignup = async () => {
    try {
      if (Password !== Newpassword) {
        setError(Alert.alert("Password didn't match"));
      }
      else if (Name && Phone && FAddress && Area && Password && Newpassword && Firm
      ) {
        let arr = [...array];
        arr.push({
          Name: Name, Phone: Phone, Email: Email, Password: Password, Area: Area,
          Newpassword: Newpassword, Firm: Firm, GST: GST, Drug: Drug, FAddress: FAddress,type:type
        })
        const formData = new FormData();
        formData.append("name", Name);
        formData.append("email", Email);
        formData.append("phone", Phone);
        formData.append("area", Area);
        formData.append("password", Password);
        formData.append("confirm_password", Newpassword);
        formData.append("company_name", Firm);
        formData.append("drug", Drug);
        formData.append("gst", GST);
        formData.append("company_address", FAddress);
        formData.append("type", type);
        const { data } = await axios.post('https://bsagroup.redniruscare.com/api/mr/create/', formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
        );

        if (data.user == true) {
          setarray(arr);
          Alert.alert('Doctor Added Successfully!');
          navigation.reset({
            index: 0,
            routes: [{ name: navigationStrings.ViewDoctor }],
          });
          setName("");
          setEmail("");
          setPhone("");
          setArea("");
          setPassword("");
          setNewpassword("");
          setFirm("");
          setDrug("");
          setGST("");
          setFAddress("");
          setType("");
        }
        console.log(arr);
        ToastAndroid.show("See Added Doctors!", ToastAndroid.SHORT);
        inputRef1.current.clear();
        inputRef2.current.clear();
        inputRef3.current.clear();
        inputRef4.current.clear();
        inputRef5.current.clear();
        inputRef6.current.clear();
        inputRef7.current.clear();
        inputRef8.current.clear();
        inputRef9.current.clear();
        inputRef10.current.clear();
        inputRef11.current.clear();
      }
      else {
        Alert.alert('please fill all complusory ');
      }
    } catch (err) {
      Alert.alert("Sorry fill all requirements");
      console.log("this is err", err);
    };
  }
useEffect(()=>{
  onpressSignup();
},[]);
  return (
    <View style={styles.container}>
      <View style={styles.subView}>
        <KeyboardAwareScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false} >
          <View style={[styles.inner1, { justifyContent: "flex-start" }]}>
            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.ViewDoctor)}>
              <Image source={imagePath.LEFT_ARROW} style={styles.upperimg} />
            </TouchableOpacity>
          </View>

          <Text style={styles.subTxt}>Add Doctors</Text>
          <View style={{ padding: moderateScaleVertical(20), backgroundColor: colors.white, }}>
            <View style={[styles.textinput1, !Name && styles.requiredInput]}>
              <TextInput
                style={styles.nameInput}
                ref={inputRef1}
                placeholder=" Name"
                maxLength={15}
                fontSize={17}
                color="black"
                autoCorrect={true}
                textContentType="username"
                value={Name}
                onChangeText={(text) => { setName(text) }}
                placeholderTextColor={colors.gray2}
                selectionColor={colors.grey1}
                required={true}
              />
            </View>

            <View style={[styles.textinput1, !Email && styles.requiredInput]}>
              <TextInput
                style={styles.nameInput}
                ref={inputRef2}
                placeholder=" Email"
                autoCapitalize="none"
                autoCorrect={true}
                textContentType="emailAddress"
                autoCompleteType="email"
                placeholderTextColor={colors.black}
                selectionColor={colors.black}
                color="black"
                required={true}
                fontSize={15}
                value={Email}
                onChangeText={(text) => { setEmail(text) }}
              />

            </View>
            <View style={[styles.textinput1, !Phone && styles.requiredInput]}>
              <TextInput
                style={styles.nameInput}
                ref={inputRef3}
                placeholder=" Phone"
                value={Phone}
                onChangeText={(text) => { setPhone(text) }}
                maxLength={10}
                fontSize={15}
                color="black"
                autoCorrect={true}
                keyboardType={"numeric"}
                selectionColor={colors.black}
                placeholderTextColor={colors.gray2}
                required={true}
              />
            </View>

            <View style={[styles.textinput1, !Area && styles.requiredInput]}>
              <TextInput
                style={styles.nameInput}
                placeholder=" Operating Area"
                ref={inputRef4}
                value={Area}
                onChangeText={(text) => { setArea(text) }}
                maxLength={25}
                fontSize={15}
                color="black"
                autoCorrect={true}
                textContentType={'addressCityAndState'}
                selectionColor={colors.black}
                placeholderTextColor={colors.gray2}
                required={true}
              />
            </View>

            <View style={[styles.textinput1, !Password && styles.requiredInput]}>
              <TextInput style={styles.nameInput}
                placeholder=" Password"
                ref={inputRef5}
                maxLength={8}
                autoCorrect={true}
                color="black"
                fontSize={15}
                secureTextEntry={secureText}
                textContentType={'password'}
                placeholderTextColor={colors.black}
                selectionColor={colors.black}
                value={Password}
                onChangeText={(text) => { setPassword(text) }}
                required={true}
              />

              <TouchableOpacity
                style={{ justifyContent: 'center' }}
                onPress={() => {
                  setSecureText(!secureText);
                }}>
                {secureText == true ? (
                  <Image
                    source={imagePath.VISIBLE_OFF}
                    style={{ ...commonStyles.Img25, alignSelf: 'center' }}
                  />
                ) : (
                  <Image
                    source={imagePath.VISIBLE_PASS}
                    style={{ ...commonStyles.Img25, alignSelf: 'center' }}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={[styles.textinput1, !Newpassword && styles.requiredInput]}>
              <TextInput
                style={styles.nameInput}
                ref={inputRef6}
                placeholder=" Confirm Password"
                maxLength={8}
                autoCorrect={true}
                color="black"
                fontSize={15}
                secureTextEntry={secureText2}
                textContentType={'password'}
                placeholderTextColor={colors.black}
                selectionColor={colors.black}
                value={Newpassword}
                onChangeText={(text) => {
                  setNewpassword(text);
                }}
                required={true}
              />

              <TouchableOpacity
                style={{ justifyContent: 'center' }}
                onPress={() => {
                  setSecureText2(!secureText2);
                }}>
                {secureText2 == true ? (
                  <Image
                    source={imagePath.VISIBLE_OFF}
                    style={{ ...commonStyles.Img25, alignSelf: 'center' }}
                  />
                ) : (
                  <Image
                    source={imagePath.VISIBLE_PASS}
                    style={{ ...commonStyles.Img25, alignSelf: 'center' }}
                  />
                )}
              </TouchableOpacity>
            </View>

            <Text style={styles.createacctxt}>
              Company Information
            </Text>

            <View style={[styles.textinput1, !Firm && styles.requiredInput]}>
              <TextInput style={[styles.nameInput]}
                placeholder=" Company name"
                ref={inputRef7}
                value={Firm}
                onChangeText={(text) => { setFirm(text) }}
                maxLength={15}
                fontSize={15}
                color="black"
                textContentType={'givenName'}
                selectionColor={colors.black}
                placeholderTextColor={colors.gray2}
                required={false}
              />
            </View>

            <View style={[styles.textinput1, !GST && styles.requiredInput]}>
              <TextInput style={styles.nameInput}
                placeholder=" GST number"
                Value={GST}
                onChangeText={text => { setGST(text) }}
                maxLength={15}
                ref={inputRef8}
                fontSize={15}
                color="black"
                keyboardType="name-phone-pad"
                selectionColor={colors.black}
                placeholderTextColor={colors.gray2}
                required={false}
              />
            </View>

            <View style={[styles.textinput1, !Drug && styles.requiredInput]}>
              <TextInput
                style={styles.nameInput}
                placeholder=" Drug licence"
                defaultValue={Drug}
                ref={inputRef9}
                onChangeText={text => setDrug(text)}
                maxLength={15}
                fontSize={15}
                color="black"
                autoCapitalize='characters'
                keyboardType="name-phone-pad"
                selectionColor={colors.black}
                placeholderTextColor={colors.gray2}
                required={false}
              />
            </View>
            <View style={[styles.textinput1, !FAddress && styles.requiredInput]}>
              <TextInput
                style={styles.nameInput}
                placeholder=" Enter Company address"
                value={FAddress}
                ref={inputRef10}
                onChangeText={(text) => setFAddress(text)}
                maxLength={100} 
                fontSize={15}
                color="black"
                autoCorrect={true}
                textContentType="addressCity"
                selectionColor={colors.black}
                required={false}
                placeholderTextColor={colors.gray2} 
              />
            </View> 
            <SelectDropdown
            ref={inputRef11}
             style={styles.select}
              data={countries}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                setType(selectedItem)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
              return item
              }}
            />
            <TouchableOpacity style={styles.btn} onPress={onpressSignup}>
              <Text style={styles.btnTxt}>Add New Doctor</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>

  )
}
export default AddDoctor;
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.btncolor,
    padding: moderateScaleVertical(20),
    },  subView: {
    backgroundColor: 'white',
    height: height,
    padding: moderateScaleVertical(20),
    borderRadius: moderateScale(20),
  },
  
  inner1: {
    backgroundColor: colors.white,
    borderRadius: moderateScaleVertical(50),
    width: moderateScale(40),
    padding: moderateScaleVertical(10)
  },
  upperimg: {
    alignSelf: "center",
    ...commonStyles.Img20,
    tintColor: colors.black
  },
  textinput1: {
    borderBottomWidth: 1,
    color: colors.black,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 1,
    marginVertical: moderateScaleVertical(10),
  },
  Img: {
    height: moderateScale(150),
    width: moderateScale(150),
    resizeMode: "center",
    alignSelf: "center"
  },
  requiredInput: {
    borderWidth: 1,
    borderColor: 'grey',
  },
  subTxt: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: moderateScaleVertical(40),
  },
  createacctxt: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '600',
    marginVertical: moderateScaleVertical(15)
  },
  nameInput: {
    height: moderateScale(40),
    marginTop: moderateScaleVertical(5),
    flex: 1,
  },
  btn: {
    flex:1,
    ...commonStyles.shadowStyle,
    height: moderateScale(50),
    backgroundColor: colors.btncolor,
    borderRadius: moderateScale(40),
    width: moderateScaleVertical(190),
    marginTop: moderateScaleVertical(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
    marginBottom:100,
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
    marginTop: moderateScaleVertical(25),
    alignSelf: 'center',
    fontWeight: 'bold', color: colors.grey1,
    marginBottom: moderateScaleVertical(250)
  },
  endBtn: {
    marginRight: moderateScaleVertical(25),
  },
  loginTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: moderateScaleVertical(20),
  },
});
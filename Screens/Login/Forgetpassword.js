import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Alert, ToastAndroid } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import { height, moderateScale, moderateScaleVertical, } from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import commonStyles from '../../styles/commonStyles';
import axios from "axios";

const Forgetpassword = ({ navigation }) => {
    const ref_input2 = useRef();
    const ref_input3 = useRef();

 
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [array, setarray] = useState([])
    const [token, settoken] = useState(null)
    const onpressforget = async() => {
        try{
            if (email) {
                let arr = [...array];
                arr.push({ email: email, password: password })
                console.log(arr)
                setarray(arr);
                // navigation.replace('Home');
                navigation.replace('GetOTP');
                ToastAndroid.show("Thanks For Login!", ToastAndroid.SHORT);
            }
            else{
                Alert.alert("Please enter your email address");
            }
        }catch(err){
                console.log("error",err);
        }
    }
    const onpressLogin = () => {
        navigation.navigate(navigationStrings.LOGIN)
    }
    return (
        <View style={styles.container}>
            <View style={styles.subView}>
                <View style={[styles.inner1, { justifyContent: "flex-start" }]}>
                    <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.HOME)}>
                        <Image source={imagePath.LEFT_ARROW} style={styles.upperimg} />
                    </TouchableOpacity>
                </View>
                <Image source={imagePath.LOGO} style={styles.Img} />
                <Text style={styles.subTxt}>Forget Password</Text>
                <View style={{ padding: moderateScaleVertical(20), backgroundColor: colors.white, }}>

                    <TextInput style={styles.nameInput}
                        placeholder="Email"
                        placeholderTextColor={colors.black}
                        selectionColor={colors.btncolor}
                        value={email}
                        onChangeText={(email => { setemail({ email }) })}
                    />
                    {/* <TextInput style={styles.nameInput}
                        placeholder="Password"
                        placeholderTextColor={colors.black}
                        selectionColor={colors.btncolor}
                        value={password}
                        onChangeText={(text) => { setpassword(text) }}
                    /> */}
                    <TouchableOpacity style={styles.btn} onPress={() => onpressforget()}>
                        <Text style={styles.btnTxt}>Send</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.endView} onPress={() => onpressLogin()}>
                        <Text style={styles.endTxt}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default Forgetpassword;
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.btncolor,
        padding: moderateScaleVertical(20)
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
        marginTop: moderateScaleVertical(25),
        marginLeft: moderateScaleVertical(20),
        fontWeight: 'bold', color: colors.btncolor
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

//done
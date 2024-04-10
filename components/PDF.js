import React, { useState } from 'react';

// Import React native Components
import { Text, View, Image, StyleSheet, Platform, TouchableOpacity, PermissionsAndroid, ImageBackground, Modal } from 'react-native';

// Import RNFetchBlob for the file download
// import RNFetchBlob from 'react-native-fetch-blob';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import { moderateScale, moderateScaleVertical, width } from '../styles/responsiveSize';

const PDF = (props) => {
    const [showmodal, setshowmodal] = useState(false)
    const fileUrl = 'https://www.bsagroup.redniruscare.com/assets/images/Tofadol%205%20LGL0622905.pdf';
    const fileName = 'bsagroup.pdf';

    const checkPermission = async () => {

        // Function to check the platform
        // If Platform is Android then check for permissions.
        if (Platform.OS === 'android') {
            downloadFile();
        } else {
            async function requestExternalWritePermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                        {
                            title: 'Storage Permission',
                            message: 'App needs access to your storage to download the PDF',
                        },
                    );
                    return granted === PermissionsAndroid.RESULTS.GRANTED;
                } catch (err) {
                    console.warn(err);
                    return false;
                }
            }

            const granted = await requestExternalWritePermission();
            if (!granted) {
                return;
            }
        }
    }

    const downloadFile = () => {

        const { dirs } = RNFetchBlob.fs;
        const fileUrl = 'https://www.bsagroup.redniruscare.com/assets/images/Tofadol%205%20LGL0622905.pdf';
        const fileName = 'bsagroup.pdf';

        RNFetchBlob.config({
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path: `${dirs.DownloadDir}/${fileName}`,
            },
        })
            .fetch('GET', fileUrl)
            .then((res) => {
                // Alert after successful downloading
                setshowmodal(true);
                // console.log('res -> ', JSON.stringify(res));
                // alert('File Downloaded Successfully.');
                // console.log('The file saved to ', res.path());
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (

        <View style={[styles.view1,]}>
            <ImageBackground imageStyle={styles.LoginTouch}
                source={{ uri: "https://i.pinimg.com/564x/1b/a4/2f/1ba42fa8f65a4d3fd538fcba9a5c544c.jpg" }} >
                <View style={styles.imgview}>
                    <View style={{ flex: 0.80, }}>
                        <Text style={{ ...commonStyles.fontBold20, color: colors.black }}>
                            {props.name}
                        </Text>
                        <Text style={{ ...commonStyles.fontBold15, color: colors.black }}>
                            {props.info}
                        </Text>
                    </View>
                    <View style={styles.inner1}>
                        <TouchableOpacity onPress={checkPermission} >
                            <Image source={imagePath.PDF} style={{ ...commonStyles.Img50, alignSelf: "flex-end" }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <Modal
                animationType="slide"
                visible={showmodal}
                transparent={true}>
                <View style={styles.popouterview}>
                    <View style={styles.secondpopv}>
                        <View style={styles.thrdpopv}>
                            <Image
                                style={{ height: moderateScaleVertical(100), width: moderateScaleVertical(100) }}
                                source={imagePath.SUBMIT}
                                onPress={() => { setshowmodal(!showmodal) }}
                            />
                            <Text style={{ ...commonStyles.fontSize18, color: colors.black, textAlign: "center", fontWeight: "600" }}>
                                File Downloaded Successfully.
                            </Text>
                            <TouchableOpacity style={styles.btn} onPress={() => setshowmodal(false)}>
                                <Text style={styles.btnTxt}>Done</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </Modal>
        </View>
    );
};

export default PDF;
const styles = StyleSheet.create({
    view1: {
        marginVertical: moderateScaleVertical(10),
        height: moderateScale(100),
        width: "100%",
        ...commonStyles.shadowStyle,
        justifyContent: "center",
        borderTopStartRadius: 24,
        borderBottomStartRadius: 24,
        borderTopEndRadius: 24,
    },
    LoginTouch: {
        opacity: 0.2,
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
        width: "100%",
        borderTopRightRadius: 24,
    },
    imgview: {
        height: moderateScale(100),
        width: "100%",
        padding: moderateScale(10),

        justifyContent: "space-between",
        flexDirection: "row",
    },
    button: {
        width: '80%',
        padding: moderateScaleVertical(10),

        margin: moderateScaleVertical(10),
    },
    inner1: {
        flex: 0.20,
        justifyContent: "center", top: moderateScaleVertical(20)
    },
    //////////////Modal 
    popouterview: {
        justifyContent: 'center',
        height: "100%", width: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.6)',

    },
    secondpopv: {
        backgroundColor: colors.white,
        height: "70%",
        width: "100%", top: "50%", borderTopRightRadius: 30,
        borderTopLeftRadius: 40,
    },
    thrdpopv: {
        backgroundColor: 'rgb(0, 0, 0,0.1)',
        borderRadius: moderateScale(15),
        alignItems: 'center',
        marginVertical: moderateScaleVertical(10)
    },
    // Button
    btn: {
        ...commonStyles.shadowStyle,
        height: moderateScale(40),
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
        fontSize: 17,
    },
});
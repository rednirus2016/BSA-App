import { View, Image, TouchableOpacity, StyleSheet, Linking, Text } from 'react-native';
import React from 'react';
import {
    height,
    moderateScale,
    moderateScaleVertical,
    width,
} from '../styles/responsiveSize';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/native';
import commonStyles from '../styles/commonStyles';


function Toptabs(props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.innerContainer}>
                <View style={styles.innerview}>

                    <TouchableOpacity onPress={() => handleGoBack()}
                        accessibilityRole="button" style={styles.Logoview}>
                        <Image source={props.imag} style={styles.headerlogo} />
                    </TouchableOpacity>

                    <View style={styles.txtview}>
                        <Text style={styles.txt}>
                            {props.heading1}
                        </Text>
                    </View>
                   

                    <View style={styles.Phoneview}>
                        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                            <Image source={imagePath.SEARCH} style={styles.Imagestyle} tintColor={colors.btncolor} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default Toptabs;
const styles = StyleSheet.create({
    mainView: {...commonStyles.shadowStyle,
        backgroundColor: colors.whitegreen,
        position: 'absolute',
        width: width,
        alignSelf: 'center',
        overflow: 'hidden',
        top: moderateScale(-8),
        justifyContent: "center",  
    },
    innerContainer: {
        borderColor: colors.theme,
    },
    innerview:
    {
        height: moderateScale(60),
        backgroundColor: colors.gradientColor,
        flexDirection: 'row',
        padding: moderateScaleVertical(5)
    },
    Logoview: {
        flex: 0.10,
        padding: moderateScaleVertical(10),
        justifyContent: "center",
    },
    headerlogo: {
        height: moderateScale(20),
        width: moderateScale(20),
        resizeMode: "center", tintColor: colors.btncolor
    },
    txtview: {
        justifyContent: "center",
        flex: 0.80
    },
    txt: {
        ...commonStyles.fontBold18,
        color: colors.btncolor,
        fontWeight: "bold",
        textAlign: 'left'
    },
    Phoneview: {
        flex: 0.1,
        padding: moderateScaleVertical(10),
        justifyContent: "center",

    },
    Imagestyle: {
        height: moderateScale(25),
        width: moderateScale(25),
        alignSelf: "center",

    },

});


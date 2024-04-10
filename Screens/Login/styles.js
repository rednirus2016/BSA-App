import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    outerView: {
        flex: 1,
        padding: moderateScale(30),
    },
    firstview: {
        justifyContent: "center",
        flexDirection: 'row',
        marginVertical: 15
    },
    icon: {
        height: 30,
        width: 30
    },
    createacctxt: {
        ...commonStyles.fontBold28,
        color: colors.theme,
        fontWeight: 'bold',      
    },
    createacctxt1: {
        color: colors.grey1,
        fontSize: 17,
        fontWeight: 'bold',
    },
    phoneimg:
    {
        resizeMode: 'center',
        height: 40,
        width: 30,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    innersecondview: {
        width: "100%",
        justifyContent: "center",
        padding: moderateScaleVertical(15), 
    },
    textinput1: {
        width: '100%',
        marginBottom: 15,
        borderWidth:1,
        borderColor:"#EE5757",
        fontSize: 15,
        borderRadius:10,
        flexDirection: 'row',
        backgroundColor: colors.black,
        justifyContent: 'flex-start',
        padding: moderateScaleVertical(5), 
        ...commonStyles.shadowStyle,
    },
    txtview2: {
        color: 'grey',
        fontSize: 15,
    },
    innerthirdview: {

    },
    logintouch: {
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: colors.theme,
        padding: 10,
        paddingVertical: 17,
        justifyContent: 'center',
    },
    txttouch: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        color: colors.white
    },
    fourthview: {
        marginVertical: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        color: colors.red
    },
    fourthinner: {

    },
    bottomtxt: {
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 7,
        color: colors.theme
    },

});
export default styles;
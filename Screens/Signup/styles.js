import { StyleSheet } from "react-native";

import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
import fontFamily from "../../styles/fontFamily";
import {
    height,
    moderateScale,
    moderateScaleVertical,
    textScale,
    width,
} from "../../styles/responsiveSize";

const styles = StyleSheet.create({
    outerview:
    {
        padding: 10,
        backgroundColor: colors.white
    },
    innerfirstview:
    {
        flexDirection: "row",
        padding: 10,
        // backgroundColor:'red'
    },
    arrowimg: {
        resizeMode: 'contain',
        height: 25,
        width: 25,
        marginHorizontal: 15
    },
    createacctxt: {
        color: colors.theme,
        fontSize: 17,
        fontWeight: 'bold',
    },
    innersecondview: {
        padding: 10,
        justifyContent: 'center',
        marginVertical: 5
    },
    icon: {
        resizeMode: 'center',
        height: 40,
        width: 30,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    textinput1: {

        width: '100%',
        marginVertical: 7,
        marginBottom: 15,
        padding: 7,
        fontSize: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        ...commonStyles.shadowStyle
    },
    txtview2: {
        color: colors.black,
        marginHorizontal: 10
    },
    innerthirdview:
    {

    },
    leftarrow: {
        resizeMode: 'contain',
        height: "100%"
    },
    logintouch: {
        borderRadius: 50,
        flexDirection: 'row',
        backgroundColor: colors.theme,
        padding: 10,
        marginLeft: "55%",
        justifyContent: 'space-evenly',
        paddingHorizontal: 20

    },
    txttouch: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
        justifyContent: 'center',
        color: colors.white
    },
    popouterview: {
        padding: 50,
        justifyContent: 'center',
        height: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },
    secondpopv: {
        backgroundColor: colors.cream,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.gray2,
        padding: 20,
        height: "30%",

    },
    thrdpopv: {
        backgroundColor: 'transparent',
        borderRadius: 17,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 25
    },
    poptxt: {
        fontSize: 20,
        color: colors.black,
        right: 35,
    },
});

export default styles;

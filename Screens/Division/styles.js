import colors from "../../styles/colors";
import { StyleSheet } from 'react-native';
import { width, innerHeight, moderateScale, moderateScaleVertical } from "../../styles/responsiveSize";
import commonStyles from "../../styles/commonStyles";


const styles = StyleSheet.create({
    headerview: {
        backgroundColor: colors.whitegreen,
        width: width,
        height: "7%",
    },

    dropcontainer: {
        backgroundColor: colors.white,
        width: width,
        height: moderateScale(45),
        flexDirection: "row",
        top: 0,
        left: 0,
        right: 0, 
        overflow: 'hidden',
    },
    sellerbox: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: moderateScale(45),
        borderColor: colors.btncolor,
        borderWidth: 1
    },
    //accordian style

    touchcattxt: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 50,
        borderRadius: 10,
        justifyContent: "space-around",
        marginVertical: 5,
        ...commonStyles.shadowStyle
    },
    imgview: {
        height: "100%",
        justifyContent: "center",
        alignContent: "center"
    },
    Img: {
        height: "100%", width: "100%", resizeMode: 'contain',
    },
    ////flatlist 

    view1: {
        width: "100%",
        flexDirection: 'column',
    },
    view2: {
        flex: 1, ...commonStyles.shadowStyle,
        marginVertical: moderateScaleVertical(10),
        borderTopLeftRadius: moderateScaleVertical(20),
        borderTopRightRadius: moderateScaleVertical(20),
        backgroundColor: colors.whitegreen,
    },
    getquottxt: {
        backgroundColor: colors.theme,
        borderRadius: 10,
        padding: moderateScaleVertical(5),
        justifyContent: "center",
        height: moderateScale(35),
        width: moderateScale(120),
        alignSelf: "center"
    },
    Tabimg: {
        height: moderateScale(150), width: "100%",
        resizemode: "center", ...commonStyles.shadowStyle,
        borderTopLeftRadius: moderateScaleVertical(20),
        borderTopRightRadius: moderateScaleVertical(20)
    },
    map2inner:
    {
        height: moderateScale(50),
        justifyContent: "center",
        padding: moderateScaleVertical(10),
    },
    touchbutton: {
        padding: moderateScaleVertical(7),
        justifyContent: "center",
        height: moderateScale(35),
        width: moderateScale(120),
        alignSelf: "center",
        borderWidth: 1,
        borderColor: colors.theme,
        ...commonStyles.shadowStyle,
    },
    txt1:
    {
        ...commonStyles.fontBold18,
        color: colors.btncolor,
        fontWeight: "bold",
    },
});

export default styles;
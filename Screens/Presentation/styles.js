import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
import { moderateScale, moderateScaleVertical, width, innerHeight } from "../../styles/responsiveSize";


const styles = StyleSheet.create({
    headerview: {
        backgroundColor: colors.theme,
        width: width,
        height: "7%",
    },
    outerview: {
        padding: moderateScaleVertical(10),

    },
    // accordian
    CollapseHeaderstyle: {
        flexDirection: 'row',
        padding: moderateScaleVertical(7),
        width: '100%',
        backgroundColor: colors.theme,
        justifyContent: "space-between",
        borderRadius: moderateScaleVertical(10),
        marginVertical: moderateScaleVertical(10), ...commonStyles.shadowStyle
    },
    headingviewwtxt: { height: innerHeight, justifyContent: "flex-start" },
    headingtxt: {
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "left",
        color: colors.black
    },
    downarrow3: { height: moderateScale(35), width: moderateScale(35), justifyContent: "flex-end" },
    touchcattxt: {
        paddingHorizontal: moderateScaleVertical(10),
        paddingVertical: moderateScaleVertical(5),
        height: moderateScale(50),
        borderRadius: moderateScaleVertical(10),
        justifyContent: "space-around",
        marginVertical: moderateScaleVertical(5),
        ...commonStyles.shadowStyle,
        backgroundColor: colors.whitegreen
    },
    txt1: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.txtcolor,
        textAlign: "left"
    },


});
export default styles;
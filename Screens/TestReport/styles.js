
import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
import { moderateScale, moderateScaleVertical, width } from "../../styles/responsiveSize";
const styles = StyleSheet.create({
    headerview:
    {
        backgroundColor: colors.whitegreen,
        justifyContent: "center", height: "7%",
    },
    container: {
        flex: 1, padding: moderateScaleVertical(5),
        backgroundColor: colors.white

    },
    view1: {
       flex: 1,
        backgroundColor: colors.white,
      
    },
    LoginTouch: {
        ...commonStyles.shadowStyle,
        backgroundColor: colors.white,
        borderRadius: moderateScaleVertical(15),
    },
    imgview: {
        height: moderateScale(70),
        width: "100%",
        borderRadius: moderateScaleVertical(15),
        padding: moderateScale(20),
        justifyContent: "space-around",
        alignContent: "center",
        flexDirection: "row",
     
    },


});
export default styles;

import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { moderateScale, moderateScaleVertical, width } from "../../styles/responsiveSize";

const styles = StyleSheet.create({
    headerview:
    {
        backgroundColor: colors.whitegreen,
        justifyContent: "center",
        width: width,

    },
    inner1: {
        backgroundColor: colors.whitegreen,
        flexDirection: "row",
        margin: moderateScaleVertical(10),
        justifyContent: "center",
        width: "100%",

    },

    view1: {
        width: "100%",
        flexDirection: 'column',
    },
    inner2: {
        flex: 1,
        backgroundColor: colors.whitegreen
    },
    inner3: {
        width: "10%",
        justifyContent: "center",
    },
    inner4: {
        width: "10%",
        justifyContent: "center",
    },
    Img: {
        height: moderateScale(25),
        width: moderateScale(25),

    }
});
export default styles;
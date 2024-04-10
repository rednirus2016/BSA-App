import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, width, innerWidth, height, innerHeight } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  //  header
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  view1: {
    flex: 0.50,
    backgroundColor: colors.white,
  },
  slide1:{
    flex: 0.50,
    backgroundColor: colors.white,
  },
  outer2: { flexDirection: "row", justifyContent: "space-between", padding: moderateScaleVertical(20),backgroundColor:colors.btncolor },
  // first view
  view3: {
    flex: 0.95,
    borderRadius: moderateScale(50),
    backgroundColor: colors.btncolor,
    padding: moderateScaleVertical(10),
    justifyContent: "center",
    ...commonStyles.shadowStyle
  },
  outer4: { flexDirection: "row", opacity: 1 },
  searchimg:
  {
    height: moderateScale(20),
    width: moderateScale(20),
    alignSelf: "center",
  },
  viewfourouter:
  {
    flex: 1,
    flexDirection: "row", padding: moderateScaleVertical(10),
    height: moderateScale(70),
    marginTop:0,
    
  },
  viewtwo: {
    flex: 1,
    justifyContent: "center",
    height:55,

  },
  viewone: {
    marginVertical: moderateScaleVertical(10),
    borderRadius: moderateScaleVertical(10),
    width: width / 2.1, flexDirection: "row",
    justifyContent:'space-evenly',
    padding: moderateScaleVertical(6),
    paddingHorizontal:15,
  },

  doctwise:{
    marginVertical: moderateScaleVertical(10),
    borderRadius: moderateScaleVertical(10),
    width: width-10, flexDirection: "row",
    justifyContent:'space-around',
    padding: moderateScaleVertical(16),
    margin:10,
    alignSelf:"center",
  },
  innertouch1: {
    backgroundColor: colors.white,
    borderRadius: moderateScaleVertical(40),
    marginHorizontal: moderateScaleVertical(10),
    padding: moderateScaleVertical(2),
  },
  functiontxt: {
    ...commonStyles.fontSize15,
    color: colors.white,
    alignSelf: "center",
    textTransform:"uppercase",

  },
  componentchanges:{
    fontSize:25,
    position:"absolute",
  },
  // division list
  Dview1: { padding: moderateScaleVertical(20), backgroundColor: colors.white },
  LoginTouch: {
    ...commonStyles.shadowStyle,
    backgroundColor: colors.white,
    borderRadius: 15,
  },
  
  imgview: {
    height: moderateScale(100),
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: moderateScale(10),
    justifyContent: "center",
    alignContent: "center"
  },
  slider:{
    height: moderateScale(30),
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: moderateScale(10),
    justifyContent: "center",
    alignContent: "center"
  },
  Img: {
    height: "100%", width: "100%", resizeMode: 'contain',
  },

  Logintxt: { left: 5, right: 0, ...commonStyles.fontSize17,color:colors.btncolor },
headingtxt:{alignSelf: "flex-start", ...commonStyles.fontBold24, color: colors.btncolor, fontWeight: "bold"},



});

export default styles;


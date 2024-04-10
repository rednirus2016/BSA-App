import { StyleSheet } from 'react-native';
import { moderateScale, textScale } from './responsiveSize';
import colors from './colors';
import fontFamily from './fontFamily';

export const hitSlopProp = {
  top: 12,
  right: 12,
  left: 12,
  bottom: 12
}
export default StyleSheet.create({
  fontSize10: {
    fontSize: textScale(10),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },

  fontSize12: {
    fontSize: textScale(12),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize11: {
    fontSize: textScale(11),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize14: {
    fontSize: textScale(14),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },

  fontSize13: {
    fontSize: textScale(13),
    color: colors.btncolor,
    fontFamily: fontFamily.regular,
  },
  fontSize15: {
    fontSize: textScale(15),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },

  fontSize16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize17: {
    fontSize: textScale(17),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },

  fontSize18: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize20: {
    fontSize: textScale(20),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize24: {
    fontSize: textScale(24),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize26: {
    fontSize: textScale(26),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize28: {
    fontSize: textScale(28),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontBold14: {
    fontSize: textScale(14),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontBold15: {
    fontSize: textScale(15),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontBold16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontBold18: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontBold24: {
    fontSize: textScale(24),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontBold28: {
    fontSize: textScale(28),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontBold20: {
    fontSize: textScale(20),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontBold21: {
    fontSize: textScale(21),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  shadowStyle: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
  },
  shadowStyle2: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 4,
  },
  shadowStyleRadius16: {
    backgroundColor: colors.white,

    shadowColor: 'rgba(37,51,75,0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 20,
    shadowRadius: 10,
    elevation: 2,
    margin: 1,
    borderColor: 'rgba(219,221,225,0.5)',
    borderWidth: 0.5,
  },
  fontSize40: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(40),
    color: colors.black,
  },
  flexViewHorz: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Img20: {
    height: moderateScale(20),
    width: moderateScale(20),

  },
  Img25: {
    height: moderateScale(25),
    width: moderateScale(25),
    alignSelf: "center"
  },
  Img50: {
    height: moderateScale(50),
    width: moderateScale(50),
  },
  Img70: {
    height: moderateScale(70),
    width: moderateScale(70),
  },
  Img100: {
    height: moderateScale(100),
    width: moderateScale(100),
    alignSelf: 'center'
  }
});

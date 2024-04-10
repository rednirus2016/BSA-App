import { View, Image, ScrollView, Text } from 'react-native'
import React from 'react'
import WrapperContainer from '../../components/WrapperContainer';
import Toptabs from '../../components/Toptabs';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import styles from '../Patent/styles';
import { moderateScale, moderateScaleVertical, width } from '../../styles/responsiveSize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import commonStyles from '../../styles/commonStyles';
import navigationStrings from '../../constants/navigationStrings';
import Productmodal from '../../components/Productmodal';


const Patent = ({ navigation }) => {
  const Patentfunction = (arr) => {
    navigation.navigate(navigationStrings.PRODUCTDETAIL, { data1: arr });
  }
  const Patentarray = [
    { key: '1', name: 'BYEWET syp.', Comp: 'AYURVEDIC TREATENT FOR BED WETTING IN CHILDREN', Pack: "200ml", PImag: imagePath.TABLET1, VImag: imagePath.VISUAL1 },
    { key: '2', name: 'BOSWILLOW(For Back Pain Treatment).', Comp: 'AYURVEDIC TREATMENT FOR ASTHMA, SMOKERS COUGH, COMMON COLD & ALLERGIC COUGH', Pack: "10×10 Softgel", PImag: imagePath.TABLET2, VImag: imagePath.VISUAL2 },
    { key: '3', name: 'CALBO-ALFA.', Comp: 'AYURVEDIC TREATMENT FOR ECZEMA, PSORIASIS, ALLERGIC DERMATITIS & SKIN ALLERGY', Pack: "200ml", PImag: imagePath.TABLET3, VImag: imagePath.VISUAL3 },

  ]
  return (

    <WrapperContainer>
      <View style={styles.headerview}>
        <Toptabs heading1="Patent Ingredients" imag={imagePath.LEFT_ARROW} />
      </View>

      <View style={{ backgroundColor: colors.white, marginBottom: moderateScaleVertical(50) }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}  >
          {Patentarray.map((arr, i) => {
            return (
              <View style={styles.outerview}>
                <View style={{ ...commonStyles.shadowStyle, height: moderateScale(200) }}>
                  <TouchableOpacity onPress={() => Patentfunction(arr)}>
                    <Productmodal PImage={arr.PImag} Pname={arr.name} Cname={arr.Comp}
                    />

                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>

      </View>
    </WrapperContainer>
  )
}
export default Patent;
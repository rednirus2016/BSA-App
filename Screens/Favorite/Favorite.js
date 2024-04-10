import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import WrapperContainer from '../../components/WrapperContainer';
import Toptabs from '../../components/Toptabs';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import { moderateScale, moderateScaleVertical, width } from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';
import navigationStrings from '../../constants/navigationStrings';
import Productmodal from '../../components/Productmodal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favorite = ({ navigation, route }) => {
  const [selectedId, setSelectedId] = useState('');
  const [favdata, setfavdata] = useState('');

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('data');
      const data = JSON.parse(jsonValue);
      console.log('getting data', data);
      setfavdata(data);
    } catch (e) { }
  };
  console.log('Riodhi bjhguguguyuyik',favdata);

  useEffect(() => {
    getData();
  }, [])

  const FavoriteProduct = [
    { key: '1', name: 'BYEWET syp.', Comp: 'AYURVEDIC TREATENT FOR BED WETTING IN CHILDREN', Pack: "200ml", PImag: imagePath.IMAGEPIC, VImag: imagePath.VISUAL },
    { key: '2', name: 'BOSWILLOW(For Back Pain Treatment).', Comp: 'AYURVEDIC TREATMENT FOR ASTHMA, SMOKERS COUGH, COMMON COLD & ALLERGIC COUGH', Pack: "10×10 Softgel", PImag: imagePath.IMAGEPIC, VImag: imagePath.VISUAL },
    { key: '3', name: 'CALBO-ALFA.', Comp: 'AYURVEDIC TREATMENT FOR ECZEMA, PSORIASIS, ALLERGIC DERMATITIS & SKIN ALLERGY', Pack: "200ml", PImag: imagePath.IMAGEPIC, PImag: imagePath.VISUAL },
    { key: '4', name: 'CALBO-OMEGA', Comp: 'NATURAL BODY DETOXIFICATION FORMULA (DIGESTIVE ENZYME, LIVER CARE, ALKALISER, LAXATIVE, ANTACID syp.)', Pack: "10×10 (Alu-Alu)", PImag: imagePath.IMAGEPIC, VImag: imagePath.VISUAL },
  ]
  const goto = (item) => {
    navigation.navigate(navigationStrings.PRODUCTDETAIL, { data1: item });
    // console.log(item)
  }
  return (
    <WrapperContainer>
      <View style={styles.headerview}>
        <Toptabs heading1="Favorite Products" imag={imagePath.LEFT_ARROW} />
      </View>

      <View style={{ backgroundColor: colors.Ptheme, flex: 1 }}>
        <View style={{ padding: moderateScaleVertical(15), width: width, backgroundColor: colors.white, }}>

          <FlatList
            data={favdata}
            contentContainerStyle={{ paddingBottom: moderateScaleVertical(50) }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.view1}>
                  <TouchableOpacity onPress={() => goto(item)}
                    onLongPress={() => handleProductSelect(index)}
                    style={{ marginVertical: moderateScaleVertical(10), backgroundColor: colors.Ptheme, ...commonStyles.shadowStyle }}>
                    <Productmodal PImage={item.PImag} Pname={item.name} Cname={item.Comp}
                      Propcolor={selectedId === index ? colors.Ytheme : colors.white}
                    />
                  </TouchableOpacity>
                </View>
              )
            }
            }
          />
        </View>
      </View >
    </WrapperContainer >
  )
}
export default Favorite;
const styles = StyleSheet.create({
  headerview: {
    backgroundColor: colors.theme,
    width: width,
    height: "7%",
  },
  outerview: {
    padding: moderateScaleVertical(10),

  },
  view1: {
    width: "100%",
    flexDirection: 'column',
  },
});
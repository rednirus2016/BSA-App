import { View, Text, Image, ScrollView, FlatList, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'
import WrapperContainer from '../../components/WrapperContainer';
import Toptabs from '../../components/Toptabs';
import imagePath from '../../constants/imagePath';
import styles from './styles';
import colors from '../../styles/colors';
import { height, innerheight, moderateScale, moderateScaleVertical, width } from '../../styles/responsiveSize';
import commonStyles from '../../styles/commonStyles';
import navigationStrings from '../../constants/navigationStrings';
import Productmodal from '../../components/Productmodal';
import { useDispatch,  } from 'react-redux';
import axios from 'axios';
import Divisiondrop from '../../components/Divisiondrop';


const Divisioncat = ({ navigation, route }) => {
  const { nxtdata,data1,data2 } = route?.params ||  {};
  const [newdata, setNewData] = useState('');
  const [users, setUsers] = useState({});
  const dispatch = useDispatch()
  const orthocare = async () => {
    const { data } = await axios.get(nxtdata.apiLink);
    setNewData(data);
  }
  useEffect(() => {
    orthocare();
  }, [])

  const Herbal = [

    { name: "PIPITOR-DSR(tablet in capsule form)", PImag: imagePath.TABLET1, Comp: "AQUAMIN (Patented Calcium) 600mg VITAMIN K27 45mcg VITAMIN D3 400 I.U", Pack: "10X10", VImag: imagePath.GOOGLE },
    { name: "AVOSAP", PImag: imagePath.TABLET6, Comp: "AQUAMIN (Patented Calcium) 600mg VITAMIN K27 45mcg VITAMIN D3 400 I.U", Pack: "10X10", VImag: imagePath.PRODUCT1 },
    { name: "BACLOBIS-10", PImag: imagePath.TABLET3, Comp: "AQUAMIN (Patented Calcium) 600mg VITAMIN K27 45mcg VITAMIN D3 400 I.U", Pack: "10X10", VImag: imagePath.GOOGLE },
    { name: "BIURIC-40", PImag: imagePath.TABLET5, Comp: "AQUAMIN (Patented Calcium) 600mg VITAMIN K27 45mcg VITAMIN D3 400 I.U", Pack: "10X10", VImag: imagePath.GOOGLE },
    { name: "SUGASITA-50/1000", PImag: imagePath.TABLET4, Comp: "CALCIUM CITRATE MALATE + OMEGA 3 FATTY ACID (EPA + DHA) + CALCITRIOL + FOLIC ACID + METHYLCOBALAMIN With VIAMIN K2-7", Pack: "10X10", VImag: imagePath.GOOGLE },


    { name: "BECOGOLD-M", PImag: imagePath.TABLET6 },
    { name: "BOSWILLOW(For Back Pain Treatment)", PImag: imagePath.TABLET4 },
    { name: "CALBO-D3", PImag: imagePath.TABLET3 },
    { name: "CELEXIB-200 Mouth Dissolving", PImag: imagePath.TABLET2 },
    { name: "CECLOBIS-D", PImag: imagePath.TABLET4 },


    { name: "CECLOBIS-PG(bilayered tab.)", PImag: imagePath.TABLET1 },
    { name: "CECLOBIS-P", PImag: imagePath.TABLET2 },
    { name: "CECLOBIS-BR", PImag: imagePath.TABLET5 },
    { name: "CECLOBIS-MR", PImag: imagePath.TABLET4 },
    { name: "CECLOBIS-T4", PImag: imagePath.TABLET6 },


    { name: "CECLOBIS-PG(bilayered tab.)", PImag: imagePath.TABLET1 },
    { name: "CECLOBIS-P", PImag: imagePath.TABLET2 },
    { name: "CECLOBIS-BR", PImag: imagePath.TABLET3 },
    { name: "CECLOBIS-MR", PImag: imagePath.TABLET4 },
    { name: "CECLOBIS-T4", PImag: imagePath.TABLET1 },

    {
      key: "5", name: "Lotion Section", Img: imagePath.Lotion, subcatname: [
        { name: "CECLOBIS-PG(bilayered tab.)", PImag: imagePath.TABLET2 },
        { name: "CECLOBIS-P", PImag: imagePath.TABLET1 },
        { name: "CECLOBIS-BR", PImag: imagePath.TABLET3 },
        { name: "CECLOBIS-MR", PImag: imagePath.TABLET4 },
        { name: "CECLOBIS-T4", PImag: imagePath.TABLET1 },
      ]
    },
    {
      key: "6", name: "Herbal", Img: imagePath.herbal, subcatname: [
        { name: "CECLOBIS-PG(bilayered tab.)", PImag: imagePath.TABLET1 },
      ]
    },
  ]

  const goto = (item) => {
    navigation.navigate(navigationStrings.PRODUCTDETAIL, { data1: item ,data2:nxtdata.name});
   
  }
  const [selectedId, setSelectedId] = useState('');
  const [Array, setArray] = useState([])

  const handleProductSelect = (index) => {
    setSelectedId(index);
    let arr = [...Array];
    arr.push({ SName: index })
    setArray(arr);
  }

  return (
    <WrapperContainer>
      {selectedId === '' ? (<View style={styles.headerview}>
        <Toptabs imag={imagePath.LEFT_ARROW} heading1="Products" />
      </View>
      )
        : (<View style={styles.headerview}>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", flex: 1, padding: moderateScaleVertical(10) }}>


            <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.HOME)}
              accessibilityRole="button" style={{ alignSelf: "center" }} >
              <Image source={imagePath.LEFT_ARROW} style={{ ...commonStyles.Img20, tintColor: colors.btncolor }} />
            </TouchableOpacity>
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", flex: 1 }}>

              <TouchableOpacity onPress={() => handlePress()} style={{ alignSelf: "center" }}>
                <Text style={styles.txt1}>
                  Create
                </Text>
              </TouchableOpacity>
              <View style={{ alignSelf: "center" }}>
                <Text style={styles.txt1} >
                  ||
                </Text>
              </View>

              <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.PRESENTATION)} style={{ alignSelf: "center" }}>
                <Text style={styles.txt1}>
                  existing
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        )}

      <View style={styles.dropcontainer}>
        <View style={{ flex: 0.80, }}>
          <View style={styles.imgview}>
            <Image source={nxtdata.IMG} style={styles.Img} />
          </View>
        </View>
        <View style={{ flex: 0.50, }}>
          <Divisiondrop selectname="All Products" />
        </View>
      </View>
      <View style={{ backgroundColor: colors.white, flex: 1, }}>
        <View style={{ padding: moderateScaleVertical(10), width: width, backgroundColor: colors.white, }}>
          <FlatList
            data={newdata}
            contentContainerStyle={{ paddingBottom: moderateScaleVertical(100) }}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.view1}>
                 <TouchableOpacity onPress={() => goto(item)}
                    onLongPress={() => handleProductSelect(index)}
                    style={{ marginVertical: moderateScaleVertical(10), backgroundColor: colors.Ptheme, ...commonStyles.shadowStyle }}>
                    <Productmodal PImage={item.image} Pname={item.name} Cname={item.composition} name={nxtdata.name}
                      Propcolor={selectedId === index ? colors.Ytheme : colors.white}
                    />
              </TouchableOpacity>

                </View>
              )
            }
            }
          />

        </View>
      </View>
    </WrapperContainer>
  )
}
export default Divisioncat;
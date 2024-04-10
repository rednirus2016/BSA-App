import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import SearchBar from 'react-native-dynamic-search-bar';
import navigationStrings from '../../constants/navigationStrings';
import commonStyles from '../../styles/commonStyles';
import {
  width,
  moderateScaleVertical,
  height,
} from '../../styles/responsiveSize';
import Productmodal from '../../components/Productmodal';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const API_BASE_URL_1 = 'https://bsagroup.redniruscare.com/api';
const API_BASE_URL_2 = 'https://www.bivetybiosciences.com/api';

const Search = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState('');
  const [product, setProduct] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(false);

  const itemnxt3 = () => {
    navigation.navigate(navigationStrings.HOME);
  };

  const goto = data1 => {
    navigation.navigate(navigationStrings.PRODUCTDETAIL, { data1: data1 });
  };

  const handleProductSelect = index => {
    setSelectedId(index);
  };
const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};


  useEffect(() => {
    Searchbutton();
  }, [keyword]);

  const Searchbutton = debounce(async () => {
    if (!keyword) {
      setProduct([]);
      setEmpty(false);
      return;
    }

    setLoading(true);

    try {
      const [response1, response2] = await Promise.all([
        axios.get(`${API_BASE_URL_1}/searchCategory/?keyword=${keyword}`),
        axios.get(`${API_BASE_URL_2}/searchCategory/?keyword=${keyword}`),
      ]);
      const products1 = response1?.data?.order ?? [];
      const products2 = response2?.data?.order ?? [];
      const combinedProducts = [...products1, ...products2];

      setProduct(combinedProducts);
      setEmpty(combinedProducts.length === 0);
    } catch (error) {
      console.error('Error fetching products:', error);
    }

    setLoading(false);
  }, 10)

  const renderItem = ({ item, index }) => (
    <View style={styles.view1}>
      <TouchableOpacity
        onPress={() => goto(item)}
        onLongPress={() => handleProductSelect(index)}
        style={{
          marginVertical: moderateScaleVertical(10),
          backgroundColor: colors.Ptheme,
          ...commonStyles.shadowStyle,
        }}>
        <Productmodal
          PImage={item.image}
          Pname={item.name}
          Cname={item.composition}
          name={item.name}
          Propcolor={selectedId === index ? colors.Ytheme : colors.white}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.headerview}>
        <View style={styles.inner1}>
          <TouchableOpacity onPress={() => itemnxt3()} style={styles.inner3}>
            <Image
              source={imagePath.LEFT_ARROW}
              style={{ ...commonStyles.Img20 }}
              tintColor={colors.btncolor}
            />
          </TouchableOpacity>
          <View style={{ width: '80%' }}>
             <SearchBar
              round
              searchIcon={{ ...commonStyles.fontSize24 }}
              onChangeText={search => setKeyword(search)}
              value={keyword}
              showLoading={true}
              shadowColor="#282828"
              cancelIconColor="#fdfdfd"
              backgroundColor="transparent"
              selectionColor={'black'}
              placeholder=" Search here....."
              containerStyle={{ backgroundColor: '#ff6f' }}
            />
          </View>
          <TouchableOpacity style={styles.inner4} onPress={Searchbutton}>
            <Image
              source={imagePath.SEARCH}
              style={{ ...commonStyles.Img20 }}
              tintColor={colors.btncolor}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          padding: moderateScaleVertical(15),
          width: width,
          backgroundColor: colors.white,
        }}>
        <KeyboardAwareScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={{ marginBottom: moderateScaleVertical(250) }}>
            {empty ? (
              <View
                style={{
                  height: height,
                  width: '100%',
                  justifyContent: 'center',
                }}>
                <Image
                  source={imagePath.NOTFOUND}
                  style={{ alignSelf: 'center', ...commonStyles.Img70 }}
                />
                <Text
                  style={{
                    ...commonStyles.fontBold24,
                    color: 'black',
                    alignSelf: 'center',
                  }}>
                  Result Not Found
                </Text>
              </View>
            ) : (
              <FlatList
                data={product}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
              />
            )}
          </View>
        </KeyboardAwareScrollView>
        </View>
      </SafeAreaView>
  );
};

export default Search;

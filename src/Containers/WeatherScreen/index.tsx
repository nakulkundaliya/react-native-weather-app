import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  ImageBackground,
  FlatList,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

import {Header, WeatherCard, WeatherInfo} from '../../Components';
import {AppDispatch} from '../../Redux/store';
import {
  getCurrentWeatherData,
  getWeatherData,
  searchWeatherData,
  updateWeatherData,
  clearSearch,
} from '../../Redux/action';
import {getCurrentLocationCoordinate} from '../../Utils/helper';
import style from './style';
import {Images} from '../../Utils/images';
import {NavigationProps} from '../../Navigators/StackNavigators';
import {WeatherDataProps} from '../../Interfaces';

const WeatherScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const weatherData = useSelector((state: any) => state.weather.data);
  const currentWeatherData = useSelector(
    (state: any) => state.currentWeather.data,
  );

  const isLoading = useSelector((state: any) => state.weather.loading);
  const dispatch = useDispatch<AppDispatch>();
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const getWeather = async () => {
      let location = await getCurrentLocationCoordinate();
      dispatch(
        getWeatherData(
          [
            1264389, 1264912, 1264850, 1264860, 1264976, 1265007, 1265331,
            1265415, 1265472, 1265504, 1270351, 1270343, 1270711, 6941937,
            7279595, 7279741, 7279746, 7302826, 7302857, 7302860,
          ].toString(),
        ),
      );
      if (location) {
        dispatch(getCurrentWeatherData(location.latitude, location.longitude));
      }
    };
    getWeather();
  }, [dispatch]);

  const onPressSearch = () => {
    setIsSearch(true);
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  useEffect(() => {
    if (search) {
      dispatch(searchWeatherData(search));
    } else {
      dispatch(clearSearch());
    }
  }, [dispatch, search]);

  const onPressCardData = (item: WeatherDataProps) => {
    navigation.navigate('WeatherDetailScreen', {detailData: item});
  };

  let currentLocalTime = new Date(
    currentWeatherData?.dt * 1000 + currentWeatherData?.timezone * 1000,
  );

  const onPressFaviouriteCard = (id: number) => {
    dispatch(updateWeatherData(id));
  };

  const onCancelPress = () => {
    setIsSearch(false);
    setSearch('');
  };

  let currentTemp = currentWeatherData?.main?.temp - 273.15;

  return (
    <View style={style.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <SafeAreaView style={style.mainView}>
          <Header
            onCancelPress={onCancelPress}
            search={isSearch}
            onPressSearch={onPressSearch}
            searchIcon={Images.search}
            rightIcon={Images.world}
            title={'cancel'}
            value={search}
            onChange={(text: string) => setSearch(text)}
          />
          <ImageBackground
            source={Images.LandscapeDay}
            style={style.imageBackground}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={style.scrollContainer}>
              <View style={style.mainContainer}>
                <WeatherInfo
                  city={currentWeatherData?.name}
                  date={moment(currentLocalTime).format('ddd DD MMM')}
                  time={moment(currentLocalTime).format('YYYY HH:mm A')}
                  temperature={currentTemp.toFixed(0)}
                  weatherImages={currentWeatherData.weather}
                />
              </View>
              <FlatList
                data={weatherData}
                keyExtractor={(item, index) => String(index)}
                renderItem={({item, index}) => {
                  let tempartureData = item.main.temp - 273.15;
                  let localTime = new Date(
                    item?.dt * 1000 + item?.sys.timezone * 1000,
                  );
                  return (
                    <View key={String(index)} style={style.subContainer}>
                      <WeatherCard
                        isLike={item?.isLike}
                        onPressFaviouriteCard={() =>
                          onPressFaviouriteCard(item.id)
                        }
                        onPressWeatherCard={() => onPressCardData(item)}
                        city={item?.name}
                        date={moment(localTime).format('ddd DD MMM')}
                        time={moment(localTime).format('YYYY HH:mm A')}
                        temperature={tempartureData.toFixed(0)}
                        heartIcon={Images.heartIcon}
                        weatherImages={item?.weather}
                      />
                    </View>
                  );
                }}
              />
              <View style={style.footerContainer}>
                <Text style={style.footerText}>© {getCurrentYear()}</Text>
                <Text style={style.footerText}>
                  Terms and Conditions | Privacy policy
                </Text>
              </View>
            </ScrollView>
          </ImageBackground>
        </SafeAreaView>
      )}
    </View>
  );
};
export default WeatherScreen;

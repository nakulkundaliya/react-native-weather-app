import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

import { Header, WeatherDetail } from '../../Components';
import style from './style';

const WeatherDetailScreen = ({ route }: { route: any }) => {
  const navigation = useNavigation();
  let weatherDetail = route.params.detailData;
  let localTime = new Date(
    weatherDetail?.dt * 1000 + weatherDetail?.sys.timezone * 1000
  );

  let tempartureData = weatherDetail.main.temp - 273.15;
  let convertIntoKm = weatherDetail.visibility / 1000;

  const onBackpress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={style.mainContainer}>
      <Header
        weatherDetail
        leftIcon
        title='Weather Details'
        onPressLeft={onBackpress}
      />
      <ScrollView contentContainerStyle={style.scrollContainer}>
        <View style={style.container}>
          <WeatherDetail
            wind={weatherDetail.wind.speed}
            visibility={convertIntoKm}
            dewPoint={10}
            humudity={weatherDetail.main.humidity}
            pressure={weatherDetail.main.pressure}
            currentCity={weatherDetail.name}
            date={moment(localTime).format('ddd DD MMM')}
            time={moment(localTime).format('YYYY HH:mm A')}
            temperature={tempartureData.toFixed(0)}
            weatherImages={weatherDetail.weather}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WeatherDetailScreen;

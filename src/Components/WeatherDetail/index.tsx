import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { WeatherDetailProps, WeatherImagesProps } from '../../Interfaces';
import style from './style';

const WeatherDetail: React.FC<WeatherDetailProps> = ({
  date,
  time,
  temperature,
  weatherImages,
  wind,
  humudity,
  visibility,
  pressure,
  dewPoint,
  currentCity
}) => {
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.currentCityText}>{currentCity}</Text>
        <View style={style.containerCard}>
          <View style={style.cardContent}>
            <Text style={style.currentWeatherText}>Current Weather</Text>
            <View>
              <Text style={style.weatherText}>{date}</Text>
              <Text style={style.weatherText}>{time}</Text>
              <View style={style.mainContainer}>
                <Text style={style.tempText}>{temperature}°</Text>
                <Text style={[style.tempText, style.clearText]}>clear</Text>
              </View>

              <View style={style.imageContainer}>
                {weatherImages?.map(
                  (item: WeatherImagesProps, index: number) => {
                    return (
                      <Image
                        key={index}
                        style={style.weatherImage}
                        source={{
                          uri: `https://openweathermap.org/img/wn/${item.icon}@4x.png`
                        }}
                      />
                    );
                  }
                )}
              </View>
            </View>
          </View>
          <View style={style.subContainer}>
            <View>
              <Text style={[style.text]}>WIND</Text>
              <Text style={style.text}>{wind}</Text>
              <Text style={[style.text]}>VISIBILITY</Text>
              <Text style={style.text}>{visibility} km</Text>
              <Text style={[style.text]}>DEW POINT</Text>
              <Text style={style.text}>{dewPoint}°</Text>
            </View>
            <View>
              <Text style={[style.text]}>HUMIDITY</Text>
              <Text style={style.text}>{humudity}%</Text>
              <Text style={[style.text]}>PRESSURE</Text>
              <Text style={style.text}>{pressure}mb</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export { WeatherDetail };

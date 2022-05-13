import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../../Utils/colors';
import { WeatherCardProps, WeatherImagesProps } from '../../Interfaces';
import style from './style';

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  date,
  time,
  temperature,
  heartIcon,
  weatherImages,
  onPressWeatherCard,
  onPressFaviouriteCard,
  isLike
}) => {
  return (
    <TouchableOpacity onPress={onPressWeatherCard} style={style.containerCard}>
      <View>
        <Text style={[style.weatherInfoText, style.customText]}>{city}</Text>
        <Text style={style.weatherInfoText}>{date}</Text>
        <Text style={style.weatherInfoText}>{time}</Text>
        <Text style={style.tempText}>{temperature}°</Text>
        <TouchableOpacity onPress={onPressFaviouriteCard}>
          <Image
            source={heartIcon}
            style={[
              style.heartIcon,
              { tintColor: isLike ? Colors.red : Colors.white }
            ]}
          />
        </TouchableOpacity>
      </View>
      <View>
        {weatherImages?.map((item: WeatherImagesProps, index: number) => (
          <Image
            key={index}
            style={style.weatherImage}
            source={{
              uri: `https://openweathermap.org/img/wn/${item.icon}@4x.png`
            }}
          />
        ))}
      </View>
    </TouchableOpacity>
  );
};

export { WeatherCard };

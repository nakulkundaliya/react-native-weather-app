import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {WeatherImagesProps, WeatherInfoProps} from '../../Interfaces';
import {Colors} from '../../Utils/colors';
import {DATA} from '../../Utils/MockData';
import style from './style';

const WeatherInfo: React.FC<WeatherInfoProps> = ({
  city,
  date,
  time,
  temperature,
  weatherImages,
}) => {
  return (
    <View style={style.containerCard}>
      <LinearGradient
        style={style.linearGradient}
        locations={[0, 0.7, 0.9]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[Colors.gradient1, Colors.gradient2, Colors.gradient3]}>
        <View style={[style.cardContent]}>
          <Text style={style.text}>{city}</Text>
          <Text style={[style.text, style.detailText]}>{date}</Text>
          <Text style={[style.text, style.detailText]}>{time}</Text>
          <Text style={style.tempText}>{temperature}°</Text>
        </View>
        <View style={style.imageContainer}>
          {weatherImages?.map((item: WeatherImagesProps, index: number) => {
            return (
              <Image
                key={index}
                style={style.weatherImage}
                source={{
                  uri: `https://openweathermap.org/img/wn/${item.icon}@4x.png`,
                }}
              />
            );
          })}
        </View>
        <View style={style.container}>
          <FlatList
            data={DATA}
            horizontal
            keyExtractor={(item, index) => String(index)}
            renderItem={({item, index}) => (
              <View key={index} style={style.listContain}>
                <View style={style.subContainer}>
                  <Text style={style.weatherdataText}>{item.date}</Text>
                  <Text style={style.weatherdataText}>{item.temp}°</Text>
                  <View style={style.imageView}>
                    <Image source={item.image} style={style.weatherdataImage} />
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export {WeatherInfo};

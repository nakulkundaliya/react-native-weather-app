import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ImageComponent } from '../../Components';
import { HeaderProps } from '../../Interfaces';
import { Colors } from '../../Utils/colors';
import style from './style';

const Header: React.FC<HeaderProps> = ({
  searchIcon,
  leftIcon,
  weatherDetail,
  onPressSearch,
  rightIcon,
  title,
  search,
  value,
  onChange,
  onCancelPress,
  onPressLeft
}) => {
  return (
    <View style={style.mainContainer}>
      {weatherDetail ? (
        <View style={style.headerView}>
          {leftIcon && (
            <TouchableOpacity style={style.leftButton} onPress={onPressLeft}>
              <ImageComponent source={leftIcon} customStyle={style.leftIcon} />
            </TouchableOpacity>
          )}
          <View style={style.headerTextView}>
            <Text style={style.headerText}>{title}</Text>
          </View>
        </View>
      ) : null}

      {search ? (
        <LinearGradient
          style={style.headerView}
          locations={[0.2, 0.85]}
          start={{ x: 0.4, y: 0.9 }}
          end={{ x: 0, y: 0.5 }}
          colors={['#cfd6e9', '#a0a4b8']}
        >
          <View style={style.headerContainer}>
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder='Search'
              placeholderTextColor={Colors.black}
              style={style.input}
            />
            <TouchableOpacity onPress={onCancelPress}>
              <Text style={style.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      ) : (
        <LinearGradient
          style={style.headerView}
          locations={[0.5, 0.95]}
          start={{ x: 0.3, y: 0.7 }}
          end={{ x: 0, y: 0.5 }}
          colors={[Colors.white, Colors.grey]}
        >
          <View style={[style.headerContainer, style.searchHeader]}>
            {searchIcon && !search && (
              <TouchableOpacity
                onPress={onPressSearch}
                style={style.searchView}
              >
                <ImageComponent source={searchIcon} />
              </TouchableOpacity>
            )}
            <TouchableOpacity>
              <ImageComponent source={rightIcon} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

export { Header };

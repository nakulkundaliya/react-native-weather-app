import { Platform, PermissionsAndroid } from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import Toast from 'react-native-simple-toast';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export const isAndroid = Platform.OS === 'android';
export const showToast = (message) => Toast.show(message);

export const locationPermission = async () => {
  if (isAndroid) {
    return RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 10000,
      fastInterval: 5000
    })
      .then(async (resp) => {
        if (resp === 'enabled' || resp === 'already-enabled') {
          if (isAndroid && Platform.Version < 23) {
            return true;
          }
          const hasPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          );
          if (hasPermission) return true;

          const status = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          );
          if (status === PermissionsAndroid.RESULTS.GRANTED) return true;
          if (status === PermissionsAndroid.RESULTS.DENIED) {
            showToast(appConstants['LOCATION_PERMISSION_DENIED_BY_USER']);
          } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            showToast(appConstants['LOCATION_PERMISSION_REVOKED_BY_USER']);
          }
          return false;
        }
      })
      .catch((err) => {
        if (err['code'] === 'ERR00') {
          showToast(
            appConstants['PLEASE_ENABLE_YOUR_LOCATION_FOR_BETTER_EXPERIENCE']
          );
          return false;
        } else if (err['code'] === 'ERR01') {
          showToast(
            appConstants['PLEASE_ENABLE_YOUR_LOCATION_MANUALLY_FROM_SETTING']
          );
          return false;
        } else if (err['code'] === 'ERR02') {
          locationPermission();
          return false;
        } else return false;
      });
  } else {
    const hasLocationPermission = await Geolocation.requestAuthorization(
      'always'
    );
    if (
      hasLocationPermission == 'denied' ||
      hasLocationPermission == 'disabled' ||
      hasLocationPermission == 'restricted'
    ) {
      return false;
    }
    return true;
  }
};

export const getCurrentLocationCoordinate = async () => {
  return new Promise(async (resolve, reject) => {
    const hasLocationPermission = await locationPermission();
    if (hasLocationPermission) {
      try {
        Geolocation.getCurrentPosition(
          (position) => {
            const location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              error: null
            };
            resolve(location);
          },
          (error) => {
            resolve({
              latitude: null,
              longitude: null,
              error: error['message']
            });
          },
          { timeout: 20000, maximumAge: 10000 }
        );
      } catch (err) {
        showToast(
          appConstants['PLEASE_ENABLE_YOUR_LOCATION_FOR_BETTER_EXPERIENCE']
        );
        resolve({
          latitude: null,
          longitude: null,
          error:
            appConstants['PLEASE_ENABLE_YOUR_LOCATION_FOR_BETTER_EXPERIENCE']
        });
      }
    } else {
      showToast(
        appConstants['PLEASE_ENABLE_YOUR_LOCATION_FOR_BETTER_EXPERIENCE']
      );
      resolve({
        latitude: null,
        longitude: null,
        error: appConstants['PLEASE_ENABLE_YOUR_LOCATION_FOR_BETTER_EXPERIENCE']
      });
    }
  });
};

export const searchByCity = (data, text) => {
  let searchFilterData = data.filter((item) =>
    item?.name?.toLowerCase().includes(text.toLowerCase())
  );
  return searchFilterData;
};

export const faviouriteData = (data, index) => {
  let searchData = [...data];
  let likeDislike = searchData.map((item, idx) =>
    idx === index ? { ...item, isLike: !item.isLike } : item
  );
  let faviourite = likeDislike[index];
  likeDislike.splice(index, 1);
  likeDislike.unshift(faviourite);
  let WeatherLikeData = likeDislike.filter((item) => item.isLike === true);
  let WeatherDisLikeData = likeDislike.filter((item) => item.isLike === false);
  var weatherSortedData = [...WeatherLikeData].concat([...WeatherDisLikeData]);
  return weatherSortedData;
};

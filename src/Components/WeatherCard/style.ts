import {StyleSheet} from 'react-native';

import {Colors} from '../../Utils/colors';

const style = StyleSheet.create({
  containerCard: {
    marginTop: 5,
    borderRadius: 15,
    elevation: 5,
    opacity: 0.8,
    shadowOffset: {width: 1, height: 1},
    shadowColor: Colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginHorizontal: 25,
    marginVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingVertical: 30,
    backgroundColor: Colors.navy,
  },
  heartIcon: {
    width: 18,
    height: 16,
    marginTop: 10,
    marginHorizontal: 10,

  },
  weatherInfoText: {
    fontSize: 14,
    marginLeft: 10,
    textAlign: 'left',
    color: Colors.white,
  },
  tempText: {
    fontSize: 40,
    marginLeft: 10,
    textAlign: 'left',
    color: Colors.yellow,
  },
  weatherImage: {
    width: 130,
    height: 130,
  },
  customText: {
    fontSize: 16,
  },
});

export default style;

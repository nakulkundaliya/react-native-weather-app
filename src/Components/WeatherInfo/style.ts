import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/colors';

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  linearGradient: {
    borderRadius: 15,
    padding: 10,
    opacity: 0.9,
  },
  subContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContain: {
    margin: 5,
    paddingHorizontal: 8,
  },
  card: {
    borderRadius: 15,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  containerCard: {
    marginTop: 5,
    borderRadius: 15,
    backgroundColor: 'transparent',
    opacity: 0.8,
    marginHorizontal: 25,
    marginVertical: 5,
    paddingVertical: 15,
    height: 350,
  },
  cardContent: {
    marginHorizontal: 15,
    marginVertical: 25,
  },
  text: {
    color: Colors.black,
    fontSize: 22,
    textAlign: 'center',
    marginLeft: 10,
  },
  detailText: {fontSize: 14},
  tempText: {
    color: Colors.white,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
  weatherImage: {
    height: 120,
    width: 120,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  weatherdataText: {
    color: 'white',
    fontSize: 18,
  },
  weatherdataImage: {
    width: 20,
    height: 20,
  },
  imageView: {
    marginTop: 10,
  },
});

export default style;

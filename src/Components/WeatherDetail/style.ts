import { StyleSheet } from 'react-native';
import { Colors } from '../../Utils/colors';

const style = StyleSheet.create({
  container: { flex: 1 },
  containerCard: {
    height: 550,
    width: 302,
    marginTop: 5,
    opacity: 0.8,
    borderRadius: 15,
    paddingVertical: 10,
    backgroundColor: Colors.navy
  },
  cardContent: {
    marginVertical: 5
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subContainer: {
    marginTop: 40,
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginHorizontal: 5,
    justifyContent: 'space-between'
  },
  currentCityText: {
    fontSize: 18,
    margin: 10,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  currentWeatherText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  weatherText: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 15,
    color: Colors.white,
    textAlign: 'center'
  },
  text: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 15,
    textAlign: 'left',
    color: Colors.white
  },
  clearText: {
    fontSize: 20
  },
  imageContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 40,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.yellow
  },
  weatherImage: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default style;

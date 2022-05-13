import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/colors';

const style = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mainContainer: {
    paddingTop: 40,
  },
  subContainer: {
    flex: 1,
    marginTop: 20,
  },
  scrollContainer: {
    marginBottom: 110,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  footerContainer: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 18,
    color: Colors.white,
  },
});

export default style;

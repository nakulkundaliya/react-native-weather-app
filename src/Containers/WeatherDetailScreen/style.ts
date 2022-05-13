import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils/colors';

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.detailBackground,
  },
  scrollContainer: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    color: Colors.black,
  },
});

export default style;

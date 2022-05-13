import { StyleSheet } from 'react-native';
import { Colors } from '../../Utils/colors';

const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    justifyContent: 'space-between'
  },
  searchHeader: { paddingHorizontal: 60 },
  headerView: {
    height: 70,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.navy
  },
  input: {
    padding: 10,
    width: '70%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.grey2,
    backgroundColor: Colors.white
  },
  searchView: {
    width: '100%',
    justifyContent: 'center'
  },
  cancelText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500'
  },
  leftButton: {
    left: 20,
    top: 5
  },
  leftIcon: {
    height: 30,
    width: 30,
    marginTop: 5,
    tintColor: Colors.white,
    alignSelf: 'flex-start'
  },
  headerTextView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',
    bottom: 24,
    marginLeft: 10
  }
});

export default style;

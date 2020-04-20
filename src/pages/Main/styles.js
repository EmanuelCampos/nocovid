import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollview: {
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    backgroundColor: '#1F93F5',
    height: 375,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  descriptionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 36,
  },
  casesText: {
    color: '#FFF',
    paddingHorizontal: 30,
  },
  updatedText: {
    color: '#FFF',
    paddingHorizontal: 35,

    fontSize: 7,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 25,
    marginTop: 8,
    // marginTop: 8,
  },
  selectContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 40,
    width: 350,
    height: 54,
    paddingHorizontal: 8,
  },
  selectButton: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#FFF',
    height: 40,
    borderRadius: 40,
    width: 175,
    marginLeft: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },
  selectButtonTwo: {
    flexGrow: 1,
    flexShrink: 1,
    height: 40,
    borderRadius: 40,
    width: 150,
    marginLeft: 15,

    justifyContent: 'center',
    alignItems: 'center',
  },
  selectText: {
    color: '#2879C9',
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    marginBottom: '86%',
  },

  descriptionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textBold: {
    fontWeight: 'bold',
  },

  casesText: {
    color: '#FFF',
    paddingHorizontal: 30,
    marginTop: 16,
  },

  updatedText: {
    color: '#FFF',
    paddingHorizontal: 35,
    marginTop: 16,
    fontSize: 8,
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 25,
    marginTop: 8,
    marginBottom: 30,
  },

  diskHelp: {
    flex: 1,
    height: 56,
  },
});

export default styles;

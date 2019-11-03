import { StyleSheet } from 'react-native';

const homeScreenStyles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: '100%',
  },

  videoDescription: {
    fontWeight: 'normal',
    fontSize: 16,
    color: 'black',
  },

  descriptionWrapper: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  durationDescription: {
    textAlign: 'right'
  },

  touchableVideoWrapper: {
    margin: 5,
  },
});

export default homeScreenStyles;
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
  },
  loadingArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
  },
  emptyArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImg: {
    width: 150,
    height: 150,
  },
  emptyText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
  },
  scroll: {
    marginTop: 10,
  },
  profileArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileInfo: {
    marginLeft: 10,
  },
  profileInfoText: {
    fontSize: 16,
  },
  profileButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
});

export {styles};

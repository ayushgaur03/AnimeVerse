import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import axios from '../myAxios';

const AnimeProfile = ({navigation, route}) => {
  const {search_id, content_type} = route.params;
  const [profile, setProfile] = useState({});
  const [image_loc, setImage_loc] = useState('abcde');
  useEffect(() => {
    const getAnimeDetails = () => {
      axios
        .get(`${content_type}/${search_id}`)
        .then(res => {
          setProfile(res.data.data);

          setImage_loc(res.data.data.images.webp.image_url);
        })
        .catch(e => {
          console.log(e);
        });
    };

    getAnimeDetails();
  }, []);

  return (
    <View style={styles.appContainer}>
      <View style={styles.navbar}>
        <Text style={styles.nav_text}>Anime Verse</Text>
        <Image
          source={require('../assets/user.png')}
          style={{height: 30, width: 30, marginVertical: 10, marginRight: 10}}
        />
      </View>
      <View style={styles.section1}>
        <ImageBackground
          source={{uri: image_loc}}
          resizeMode={'cover'}
          style={styles.image}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              top: -55,
              marginTop: 5,
              paddingLeft: 20,
            }}>
            <Text style={styles.heading}>{profile.title}</Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.tiles}>
              <Text style={styles.deals}>
                {profile.score != null ? profile.score : profile.scored} / 10
              </Text>
              <Text style={styles.label}>RATINGS</Text>
            </View>
            <View style={styles.tiles}>
              <Text style={styles.deals}>{profile.popularity}K</Text>
              <Text style={styles.label}>popularity</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.section2}>
        <View style={styles.part1}>
          <ScrollView>
            <Text style={{color: '#F8F8F8', textAlign: 'justify'}}>
              {profile.synopsis}
            </Text>
          </ScrollView>
        </View>
      </View>
      <View>{/* <Pressable */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#202020',
    opacity: 0.99,
  },
  navbar: {
    backgroundColor: '#181818',
    color: 'red',
    flex: 0.07,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nav_text: {
    color: 'red',
    fontWeight: '900',
    fontSize: 23,
    paddingVertical: 8,
    paddingLeft: 10,
    fontFamily: 'sans-serif-medium',
  },
  section1: {
    flex: 0.45,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.85,
  },
  heading: {
    fontSize: 34,
    fontWeight: '900',
    color: 'white',
  },
  bottom: {
    bottom: -60,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tiles: {
    backgroundColor: '#000000c0',
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  deals: {
    color: 'white',
    fontSize: 30,
    lineHeight: 50,
    fontWeight: '900',
    textAlign: 'center',
  },
  label: {
    color: '#787878',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  section2: {
    flex: 0.45,
    opacity: 0.9,
  },
  part1: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    textAlign: 'justify',
    borderColor: '#E8E8E8',
    borderWidth: 3,
    marginTop: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});

export default AnimeProfile;

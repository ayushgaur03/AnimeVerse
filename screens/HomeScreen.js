import React, {useState, useEffect} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Banner from '../components/Banner';
import Row from '../components/Row';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.header}>
        <Text style={styles.heading}>Anime Verse</Text>
        <Image source={require('../assets/user.png')} style={{height:30, width:30, marginVertical:10, marginRight:10}}/>
      </View>
      <View style={styles.banner}>
        <Banner url={'recommendations/anime'} />
        <ScrollView style={{flex: 0.9, marginTop: 30}}>
          <Row heading={'Top Animes'} rowTag={'top/anime'} type={'anime'} />
          <Row heading={'Top Manga'} rowTag={'top/manga'} type={'manga'} />
          {/* <Row
            heading={'Try These'}
            rowTag={'top/characters'}
            type={'characters'}
          /> */}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#202020',
    opacity: 0.99,
  },
  header: {
    backgroundColor: '#181818',
    color: 'red',
    flex: 0.07,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  heading: {
    color: 'red',
    fontWeight: '900',
    fontSize: 23,
    paddingVertical: 8,
    paddingLeft: 10,
    fontFamily: 'sans-serif-medium',
  },
  banner: {
    flex: 0.9,
  },
  footer: {
    flex: 0.1,
  },
});

export default HomeScreen;

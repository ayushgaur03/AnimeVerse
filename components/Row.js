import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import axios from '../myAxios';
import {useNavigation} from '@react-navigation/native';

const Row = ({heading, rowTag, type}) => {
  const [animeList, setAnimeList] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchAnimes = () => {
      axios
        .get(rowTag)
        .then(res => {
          const data = res.data.data;
          // console.log(data);
          setAnimeList(data);
        })
        .catch(e => {
          console.log(e);
        });
    };

    fetchAnimes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <ScrollView
        styles={styles.row}
        contentContainerStyle={styles.list}
        horizontal={true}>
        {animeList.map((obj, i) => {
          // console.log(obj.title);
          return (
            <Pressable
              key={i}
              onPress={() => {
                console.log('Navigating...');
                navigation.navigate('AnimeProfile', {
                  search_id: obj.mal_id,
                  content_type: type,
                });
              }}>
              <Image
                source={{uri: obj.images.webp.image_url}}
                style={styles.img}
              />
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.72,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginBottom: 5,
  },
  row: {
    marginTop: 2,
    flex: 1,
    // paddingVertical: 20,
  },
  list: {
    marginHorizontal: 0,
    paddingHorizontal: 0,
    paddingVertical: 3,
  },
  img: {
    height: 200,
    width: 140,
    resizeMode: 'contain',
    borderRadius: 5,
    marginLeft: 5,
  },
});
export default Row;

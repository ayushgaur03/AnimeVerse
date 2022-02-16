import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import axios from '../myAxios';
import {Dimensions} from 'react-native';

const Banner = ({heading, url, props}) => {
  const [image, setImage] = useState('abcd');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then(res => {
          const useful = res.data.data;
          const obj_chosen =
            useful[Math.floor(Math.random() * useful.length + 1)];
          console.log(obj_chosen.entry[0].images.webp.image_url);

          setImage(obj_chosen.entry[0].images.webp.image_url);
        })
        .catch(e => {
          console.log(e);
        });
    };

    fetchData();
  }, []);

  // let image_url = {url: {image}};
  return (
    <View style={{flex: 0.6}}>
      <Image
        style={{
          paddingTop: 5,
          height: 240,
          width: windowWidth,
          resizeMode: 'cover',
          marginTop: 3,
          borderRadius: 10,
        }}
        source={{
          uri: image,
        }}
      />
    </View>
  );
};

export default Banner;

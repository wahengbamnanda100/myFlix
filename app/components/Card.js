import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import PropTypes from 'prop-types';

const placeholderImage = require('../assets/image/placeholderImage.png');

const propTypes = {
  item: PropTypes.object,
};

function Card({item, navigation}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DetailPage', {detail_id: item.id})}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={
          item.poster_path
            ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
            : placeholderImage
        }
      />
      {!item.poster_path && <Text style={styles.title}>{item.title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    height: 200,
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 10,
  },
  title: {
    top: 10,
    position: 'absolute',
    color: 'black',
    padding: 3,
    width: '100%',
  },
});

Card.propTypes = propTypes;

export default Card;

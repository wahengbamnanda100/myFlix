import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {getMovie} from '../services/services';

const height = Dimensions.get('screen').height;

function DetailsScreen({route}) {
  const detail_Id = route.params.detail_id;
  const placeholderImage = require('../assets/image/placeholderImage.png');

  const [detail, setDetail] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getMovie(detail_Id)
      .then(detailData => {
        setDetail(detailData);
        setLoaded(true);
      })
      .catch(err => {
        console.log(err);
      });
  }, [detail_Id]);

  return (
    <>
      {loaded && (
        <ScrollView>
          <StatusBar translucent={true} hidden={false} />
          <Image
            resizeMode="cover"
            style={styles.image}
            source={
              detail.poster_path
                ? {uri: 'https://image.tmdb.org/t/p/w500' + detail.poster_path}
                : placeholderImage
            }
          />
          <View style={styles.container}>
            <Text style={styles.title}>{detail.title}</Text>
            {detail.genres && (
              <View style={styles.genresContainer}>
                {detail.genres.map(genre => (
                  <Text style={styles.genre} key={genre.id}>
                    {genre.name}
                  </Text>
                ))}
              </View>
            )}
            <View>
              <Text style={styles.subTitle}>Overview: {detail.overview}</Text>
            </View>
          </View>
        </ScrollView>
      )}
      {!loaded && (
        <ActivityIndicator size="large" color="red" style={styles.indicator} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: height / 2,
    width: '100%',
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 20,
  },
  genresContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  genre: {
    marginRight: 5,
    fontWeight: 'bold',
  },
  subTitle: {
    marginRight: 5,
    fontWeight: 'bold',
    padding: 10,
    textAlignVertical: 'center',
    textAlign: 'justify',
  },
});

export default DetailsScreen;

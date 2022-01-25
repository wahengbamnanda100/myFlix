import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Text,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import List from '../components/List';

import {
  getDocumentaryMovies,
  getFamilyMovies,
  getPopularMovies,
  getPopularTv,
  getRomanticMovies,
  getUpcomingMovies,
} from '../services/services';

const dimensions = Dimensions.get('screen');

function HomepageScreen({navigation}) {
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTvShows, setPopularTvShows] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentaryMovise, setDocumentaryMovies] = useState();
  const [romanticMovise, setRomanticMovies] = useState();

  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getDocumentaryMovies(),
      getRomanticMovies(),
    ]);
  };

  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          popularTvShowsData,
          familyMoviesData,
          documentaryMoviesData,
          romanticMoviesData,
        ]) => {
          const moviesImagesArray = [];
          upcomingMoviesData.forEach(movie => {
            moviesImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });

          setMoviesImages(moviesImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTvShows(popularTvShowsData);
          setFamilyMovies(familyMoviesData);
          setDocumentaryMovies(documentaryMoviesData);
          setRomanticMovies(romanticMoviesData);
          setLoaded(true);
        },
      )
      .catch(err => {
        setError(err);
      });
  }, []);
  return (
    <>
      <StatusBar animated={true} hidden={false} translucent={true} />
      {loaded && (
        <ScrollView>
          {moviesImages && (
            <View style={styles.SliderContainer}>
              <SliderBox
                autoplay
                circleLoop={true}
                dotStyle={{height: 0}}
                images={moviesImages}
                sliderBoxHeight={dimensions.height / 1.5}
              />
            </View>
          )}

          {popularMovies && (
            <View style={styles.carousal}>
              <List
                navigation={navigation}
                title="Popular Movies"
                content={popularMovies}
              />
            </View>
          )}

          {popularTvShows && (
            <View style={styles.carousal}>
              <List
                navigation={navigation}
                title="Popular Tv Shows"
                content={popularTvShows}
              />
            </View>
          )}

          {familyMovies && (
            <View style={styles.carousal}>
              <List
                navigation={navigation}
                title="Family Movies"
                content={familyMovies}
              />
            </View>
          )}

          {documentaryMovise && (
            <View style={styles.carousal}>
              <List
                navigation={navigation}
                title="Documnetary Movies"
                content={documentaryMovise}
              />
            </View>
          )}

          {romanticMovise && (
            <View style={styles.carousal}>
              <List
                navigation={navigation}
                title="Romance Movies"
                content={romanticMovise}
              />
            </View>
          )}
        </ScrollView>
      )}
      {!loaded && (
        <ActivityIndicator size="large" color="red" style={styles.indicator} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  SliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomepageScreen;

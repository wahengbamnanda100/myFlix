import React from 'react';
import {View, StyleSheet, Dimensions, FlatList, Text} from 'react-native';
import PropTypes from 'prop-types';

import Card from './Card';

const propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};

function List({title, content, navigation}) {
  return (
    <View style={styles.list}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        <FlatList
          data={content}
          horizontal
          renderItem={({item}) => <Card navigation={navigation} item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 10,
    color: 'white',
  },
});

List.propTypes = propTypes;

export default List;

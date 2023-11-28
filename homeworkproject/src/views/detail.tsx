import React from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';

const Screen1 = ({route, navigation}) => {
  // parameterを取得
  const {foodsList} = route.params;
  return (
    <View style={styles.container}>
      <FlatList
        data={foodsList}
        numColumns={2}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        )}
      />
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('HomeDetail', {
            foodsList: foodsList,
          })
        }
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  item: {
    width: '40%',
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
});

export default Screen1;

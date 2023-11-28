import React, {useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFoodsList} from '../store/Reducers/home/homeSlice';
import {foodsList} from '../store/Reducers/home/homeSelectors';
import VideoPlayer from './video';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const list = useSelector(foodsList);
  useEffect(() => {
    dispatch(fetchFoodsList());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Button
        title="Go to Home Detail"
        onPress={() =>
          navigation.navigate('HomeDetail', {
            // ここでparameterを渡す
            foodsList: list,
          })
        }
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <VideoPlayer />
      </View>

      {/* <FlatList
        data={list}
        numColumns={2}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        )}
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoContainer: {
    flex: 1,
    height: 200,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
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
export default Home;

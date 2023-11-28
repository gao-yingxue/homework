import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMyData} from '../store/Reducers/my/mySlice';
import {selectMyData} from '../store/Reducers/my/mySelectors';
import {AppDispatch} from '../store/store';
import {FoodItem} from '../models/foodModel';

const My = () => {
  const dispatch: AppDispatch = useDispatch();
  const homeData: FoodItem[] = useSelector(selectMyData);
  useEffect(() => {
    dispatch(fetchMyData());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Page</Text>
      <View>
        {homeData?.map(item => (
          <Text style={styles.title} key={item.tag}>
            {item.name}
          </Text>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    backgroundColor: '#f9c2ff',
  },
});
export default My;

import HomeScreen from '../views/home';
import HomeDetailScreen from '../views/detail';
// import HomeVideoScreen from '../views/video';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HomeDetail" component={HomeDetailScreen} />
      {/* <Stack.Screen name="HomeVideo" component={HomeVideoScreen} /> */}
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

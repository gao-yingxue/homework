import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {NavigationContainer} from '@react-navigation/native';
import MainTabs from './src/routers/tabbar';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </Provider>
  );
}
export default App;

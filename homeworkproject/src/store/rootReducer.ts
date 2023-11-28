import {combineReducers} from 'redux';
import homeReducer from './Reducers/home/homeSlice';
import myReducer from './Reducers/my/mySlice';
const rootReducer = combineReducers({
  home: homeReducer,
  my: myReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

interface HomeState {
  foodsList: [] | null;
}

const initialState: HomeState = {
  foodsList: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setFoodsList: (state, action) => {
      state.foodsList = action.payload;
    },
  },
});

const {setFoodsList} = homeSlice.actions;
const fetchFoodsList = (): any => {
  return async (dispatch: any) => {
    const res = await axios.get('http://localhost:3004/example');
    dispatch(setFoodsList(res.data));
  };
};
export {setFoodsList, fetchFoodsList};
export default homeSlice.reducer;

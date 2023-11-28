import {PayloadAction, createSlice, ThunkDispatch} from '@reduxjs/toolkit';
import {fetchMyDataApi} from './myApi';
import {FoodItem} from '../../../models/foodModel';
import {RootState} from '../../store';
interface MyState {
  data: FoodItem[];
  loading: boolean;
  error: string | null;
}

const initialState: MyState = {
  data: [],
  loading: false,
  error: null,
};
// 1-使用createAsyncThunk，真实异步，比较推荐
// export const fetchMyData = createAsyncThunk(
//   'my/fetchData',
//   async (_, {rejectWithValue}) => {
//     console.log('kokokara-------');
//     try {
//       console.log('2----');
//       const data = await fetchMyDataApi();
//       console.log('data=');
//       console.log(data);
//       return data;
//     } catch (error) {
//       // 使用 rejectWithValue 将错误信息放入 action.payload
//       return rejectWithValue(error || '网络请求失败');
//     }
//   },
// );

const mySlice = createSlice({
  name: 'my',
  initialState,
  //2-通过fetchMyData获取数据和reducer实现异步，复杂结构不推荐
  reducers: {
    fetchDataStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action: PayloadAction<FoodItem[]>) => {
      state.loading = false;
      state.data = action.payload; // 使用 example 字段
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  //   1-
  //   extraReducers: builder => {
  //     builder
  //       .addCase(fetchMyData.pending, state => {
  //         state.loading = true;
  //       })
  //       .addCase(fetchMyData.fulfilled, (state, action) => {
  //         state.loading = false;
  //         state.data = action.payload;
  //         state.error = null;
  //       })
  //       .addCase(fetchMyData.rejected, (state, action) => {
  //         state.loading = false;
  //         state.error = action.error.message || '网络请求失败';
  //       });
  //   },
});

export const {fetchDataStart, fetchDataSuccess, fetchDataFailure} =
  mySlice.actions;

// 2-
export const fetchMyData =
  () => async (dispatch: ThunkDispatch<RootState, any, any>) => {
    try {
      dispatch(fetchDataStart());
      const data = await fetchMyDataApi();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error || '网络请求失败'));
    }
  };

export default mySlice.reducer;

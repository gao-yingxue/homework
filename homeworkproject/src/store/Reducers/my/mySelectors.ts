import {RootState} from '../../store';

export const selectMyData = (state: RootState) => state.my.data;
export const selectMyLoading = (state: RootState) => state.my.loading;
export const selectMyError = (state: RootState) => state.my.error;

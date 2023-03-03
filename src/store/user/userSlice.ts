import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../';

interface UserState {
  email: string;
  token: string;
}

const initialState: UserState = {
  email: '',
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: state => {
      state.email = '';
      state.token = '';
    },
    setUser: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
  },
});

export const {clearUser, setUser} = userSlice.actions;

export const user = (state: RootState) => state.user;

export default userSlice.reducer;

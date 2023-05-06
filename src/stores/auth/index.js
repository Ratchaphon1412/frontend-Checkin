import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

import axiosInstance from '../../utils/api/axiosIntance.js';

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
    const response = await axiosInstance.post('/api/signin', { email, password });
    const data = await response.data;
    console.log(data)
    return data;
  });
  


let initialStateAuth = {
    isAuth: false,
    user:null,
    email:'',
    password:'',
    token: null,
}

export  const  authSlice = createSlice({name:'auth', initialState: initialStateAuth, 
reducers: {
    auth:(state)=>{
        if(localStorage.getItem('token')){
            state.isAuth = true;
        }else{
            state.isAuth = false;
        }


    },

    logout: (state) => {
        localStorage.removeItem('token');
    }


},
extraReducers:(builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.email = action.payload.email;
        state.token = action.payload.token;
        localStorage.setItem('token', action.payload.token);
       
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {auth,logout} = authSlice.actions;
export default authSlice.reducer;
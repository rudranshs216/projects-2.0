import {createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState:{
    user: null,
    selectImage: null
  },
  reducers: {
   
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null
    },
    selectImage: (state,action) => {
      state.selectImage = action.payload;
    },
    resetSelectImage: (state) => {
      state.selectImage = null;
    },

  },
});
  

export const {login,logout,selectImage,resetSelectImage } = appSlice.actions;


export const selectSelectedImage = (state) => state.app.selectImage;
export const selectUser = (state) => state.app.user;




export default appSlice.reducer;

import {  PayloadAction, createSlice } from "@reduxjs/toolkit/react";

export interface IAuth {
    isLogin: boolean,
    aToken: IToken,
    rToken: IToken
}
  export interface IToken{
    isPresent:boolean
    token: string
  }

   const initialState: IAuth= {

    isLogin: false,
    aToken :{
        isPresent: false,
        token: ""
    },

    rToken :{
    isPresent: false,
    token: ""
    }
}
  

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState(),//создать файл
    reducers: {
      login: state => {
        state.isLogin=true;
      },
      logout: state => {
        state.isLogin=false;
        localStorage.removeItem("RefreshToken");
      },
      setLogout: state => {
        state.isLogin=false;
      },
      saveRefreshToken: (state, action:PayloadAction<string>) => {
        state.isLogin=true;
        state.refresh.isPresent=true;
        state.access.token=action.payload;
      },
      setAccessToken: (state, action:PayloadAction<string>) =>{
        state.access.isPresent=true;
        state.access.token=action.payload;
      },
      setRefreshToken: (state, action:PayloadAction<string>) =>{
        state.isLogin=true;
        state.refresh.isPresent=true;
        state.refresh.token=action.payload;
      },
      
    }
  });

  export const {login} = authSlice.actions;
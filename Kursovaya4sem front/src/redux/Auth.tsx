import {  PayloadAction, createSlice } from "@reduxjs/toolkit/react";

export interface IAuth {
    isLogin: boolean,
    aToken: IToken,
    rToken: IToken,
    id: string,
    role: string,
    isAdmin: boolean
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
  },

  id: "", 
  role: "",
  isAdmin: false

}
  

export const authSlice = createSlice({
    name: 'auth',
    initialState,//создать файл
    reducers: {
      login: state => {
        state.isLogin=true;
      },
      logout: state => {
        state.isLogin=false;
        state.isAdmin=false;
        localStorage.removeItem("rToken");
        localStorage.removeItem("id");
        localStorage.removeItem("role");
      },
      setLogout: state => {
        state.isLogin=false;
      },
      // saveRefreshToken: (state, action:PayloadAction<string>) => {
      //   state.isLogin=true;
      //   state.rToken.isPresent=true;
      //   state.aToken.token=action.payload;
      // },
      setAccessToken: (state, action:PayloadAction<string> ) =>{
        state.aToken.isPresent=true;
        state.aToken.token=action.payload;
      },
      setRefreshToken: (state, action:PayloadAction<string>) =>{
        state.isLogin=true;
        state.rToken.isPresent=true;
        state.rToken.token=action.payload;
      },
      setRole: (state, action:PayloadAction<string>)=>{
        state.role=action.payload;
        if (state.role==="admin"){
            state.isAdmin=true;
        }
      },
      setId: (state,action:PayloadAction<string>)=>{
        state.id=action.payload;
      }
      
    }
  });

  export const {login, logout, setLogout,setRefreshToken,setAccessToken, setId,setRole} = authSlice.actions;
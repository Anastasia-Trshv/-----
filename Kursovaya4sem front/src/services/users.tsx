import { Dispatch } from "@reduxjs/toolkit/react"
import {  setRefreshToken, setAccessToken, setId, setRole } from "../redux/Auth"

export interface UserRequest{
    Name:string,
    Email:string,
    Role:string,
    Password:string
}

export interface IUserResponse{
    id: string
    name: string
    role: string
    access: string
    refresh: string
}


export async function createUser  (userRequest : UserRequest, dispatch: Dispatch<any>): Promise<IUserResponse>
{
   const response=  await fetch("https://localhost:7099/User/CreateUser",{
        method:"POST",
        headers:{
            "content-type":"Application/json"
        },
        body:JSON.stringify(userRequest),
    });


    const resp :IUserResponse = await response.json();

    dispatch(setRefreshToken(resp.refresh));
    dispatch(setAccessToken(resp.access));
    dispatch(setId(resp.id));
    dispatch(setRole(resp.role));
    
    return resp;
}

export async function getUser  (email:string, password:string, dispatch: Dispatch<any>): Promise<IUserResponse>

{
    const response= await fetch(`https://localhost:7099/User/GetUser?login=${email}&password=${password}`)
    if (response.status === 400) {
        const user: IUserResponse = {
            id: "",
            name: "",
            role: "",
            access: "",
            refresh: ""
        };
        return user;
    } else {
        const resp: IUserResponse = await response.json();
        dispatch(setRefreshToken(resp.refresh));
        dispatch(setAccessToken(resp.access));
        dispatch(setId(resp.id));
        dispatch(setRole(resp.role));
        
        return resp;
    }
}

export async function checkUser(email:string){
    const response =await fetch(`https://localhost:7099/User/CheckUserExist?email=${email}`);
        return response.json();
    
}
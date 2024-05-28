
export interface UserRequest{
    Name:string,
    Email:string,
    Role:string,
    Password:string
}

export interface IUserResponse{
    id: String
    name: String
    role: string
    access: string
    refresh: string
}

export const createUser= async (userRequest : UserRequest)=>{
   const response=  await fetch("https://localhost:7099/User/CreateUser",{
        method:"POST",
        headers:{
            "content-type":"Application/json"
        },
        body:JSON.stringify(userRequest),
    });
    const resp :IUserResponse = await response.json();
    return resp;
}

export const getUser = async (email:string, password:string)=>{
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
        return resp;
    }
}

export const checkUser=async(email:string)=>{
    const response =await fetch(`https://localhost:7099/User/CheckUserExist?email=${email}`);
        return response.json();
    
}
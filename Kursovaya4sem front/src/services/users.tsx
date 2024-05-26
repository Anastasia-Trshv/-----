export interface UserRequest{
    Name:string,
    Email:string,
    Role:string,
    Password:string
}


export const createUser= async (userRequest : UserRequest)=>{
    await fetch("https://localhost:7099/User/CreateUser",{
        method:"POST",
        headers:{
            "content-type":"Application/json"
        },
        body:JSON.stringify(userRequest),
    });
}

export const getUser = async (email:string, password:string)=>{
    const response= await fetch(`https://localhost:7099/User/GetUser?login=${email}&password=${password}`)
    if(response.status===401){
       const user: UserRequest={
        Name:"",
        Role:"",
        Email:"",
        Password:""
       };
        return user;
       
    }
    else{

        return response.json();
    }
}

export const checkUser=async(email:string)=>{
    const response =await fetch(`https://localhost:7099/User/CheckUserExist?email=${email}`);
        return response.json();
    
}
export interface TypeRequest{
    id: number,
    name: string
}

export const getAllTypes = async () =>{
    const response = await fetch("https://localhost:7099/Types/GetTypes",{
        headers:{
            
        },
    });
    
    return response.json();
}
export interface SupplyRequest{
    Name:string,
    Description:string,
    Picture:string,
    Type:number,
    Price:number
}

export const getAllSupplies = async (token:string) =>{
    const response = await fetch("https://localhost:7099/Supplies/GetSupplies",{
        headers:{
            "Authorization": `Bearer `+token
        },
    });
    
    return response.json();
}
export const createSupply = async (supplyRequest: SupplyRequest, token:string) =>{
    await fetch("https://localhost:7099/Supplies/CreateSupply",{
        method:"POST",
        headers:{
            
            "Authorization": `Bearer ` +token,
            "content-type":"Application/json"
        },
        body:JSON.stringify(supplyRequest),
        
    });

}
export const updateSupply = async (id:string, supplyRequest: SupplyRequest, token:string) =>{
    await fetch(`https://localhost:7099/Supplies/UpdateSupplies/${id}`,{
        method:"PUT",
        headers:{
            
            "Authorization": `Bearer ` +token,
            "content-type":"Application/json"
        },
        body:JSON.stringify(supplyRequest),
        
    });
}
export const deleteSupply = async (id:string, token:string) =>{
    await fetch(`https://localhost:7099/Supplies/DeleteSupply/${id}`,{
        method:"DELETE" ,
        headers:{
            "Authorization": `Bearer ` +token
        },
        
    });
}
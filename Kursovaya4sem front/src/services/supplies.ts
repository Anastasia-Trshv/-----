export interface SupplyRequest{
    Name:string,
    Description:string,
    Picture:string,
    Type:number,
    Price:number
}

export const getAllSupplies = async () =>{
    const response = await fetch("https://localhost:7099/Supplies/GetSupplies")
return response.json();
}
export const createSupply = async (supplyRequest: SupplyRequest) =>{
    await fetch("https://localhost:7099/Supplies/CreateSupply",{
        method:"POST",
        headers:{
            "content-type":"Application/json"
        },
        body:JSON.stringify(supplyRequest),
        
    });

}
export const updateSupply = async (id:string, supplyRequest: SupplyRequest) =>{
    await fetch(`https://localhost:7099/Supplies/UpdateSupplies/${id}`,{
        method:"PUT",
        headers:{
            "content-type":"Application/json"
        },
        body:JSON.stringify(supplyRequest),
        
    });
}
export const deleteSupply = async (id:string) =>{
    await fetch(`https://localhost:7099/Supplies/DeleteSupply/${id}`,{
        method:"DELETE" 
        
    });
}
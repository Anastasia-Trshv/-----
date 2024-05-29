export interface SupplyRequest{
    Name:string,
    Description:string,
    Picture:string,
    Type:number,
    Price:number
}

export const getCartSupplies = async (usid:string) =>{
    const response = await fetch(`https://localhost:7099/Cart/GetUsersSupllies?id=${usid}`)
return response.json();
}



export const AddToCart = async (Usid:string,supid:string) =>{
    await fetch(`https://localhost:7099/Cart/AddSupply?userid=${Usid}&supId=${supid}`,{
        method:"POST",
        
    });
}
export const deleteFromCart = async (Usid:string,supid:string) =>{
    await fetch(`https://localhost:7099/Cart/DeleteSupply?usid=${Usid}&supid=${supid}`,{
        method:"DELETE" 
        
    });
}
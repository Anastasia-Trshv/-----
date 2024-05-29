export interface SupplyRequest{
    Name:string,
    Description:string,
    Picture:string,
    Type:number,
    Price:number
}

export const getCartSupplies = async (usid:string,token:string) =>{
    const response = await fetch(`https://localhost:7099/Cart/GetUsersSupllies?id=${usid}`,{
    headers:{
        "Authorization": `Bearer `+token
    }
})
return response.json();
}



export const AddToCart = async (Usid:string,supid:string,token:string) =>{
    await fetch(`https://localhost:7099/Cart/AddSupply?userid=${Usid}&supId=${supid}`,{
        method:"POST",
        headers:{
            "Authorization": `Bearer ` +token
        },
        
    });
}
export const deleteFromCart = async (Usid:string,supid:string,token:string) =>{
    await fetch(`https://localhost:7099/Cart/DeleteSupply?usid=${Usid}&supid=${supid}`,{
        method:"DELETE",
        headers:{
            "Authorization": `Bearer ` +token
        },
        
    });
}
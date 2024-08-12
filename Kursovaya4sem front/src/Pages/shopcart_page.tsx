
import { useEffect, useState } from "react";
import { ISupply } from "../model/model";
import {  Col, Container, Row } from "react-bootstrap";
import { SupplyCartProduct } from "../components/SupplyCartCard";
import { deleteFromCart, getCartSupplies } from "../services/cart";
import { useAppSelector } from "../redux/Hooks";

export function ShopCart (){
    
    const[sups,setSups]=useState<ISupply[]>([]);
    const[loading,setLoading]=useState(true);
    const id=useAppSelector((state)=> state.auth.id);
    
const token = useAppSelector((state)=> state.auth.aToken.token);

const getSup =async ()=>
  {
    setLoading(true);
    const sups =await getCartSupplies(id,token);
    setLoading(false);
    setSups(sups);
  }
    
      useEffect(()=>{
          getSup();
      },[])
    

      const handelDelete=async (sup:ISupply)=>{
        await deleteFromCart( id, sup.id, token);
        getSup();
      }
    return(
      
        <>
        {loading ? 
            <p className="text-center display-4">Loading...</p> 
            :
        
        <Container><Row>
          {sups.map(sup => <Col key={sup.id} > 
          <div className=" d-flex align-items-stretch">
            <SupplyCartProduct  handelDelete={() => handelDelete(sup)} supply={sup}></SupplyCartProduct>
          </div></Col>)}
        </Row>
        </Container>
        
        }
      </>
    )
}
    

import { useEffect, useState } from "react";
import { SupplyProduct } from "../components/SupplyCard";
import{getAllSupplies} from "../services/supplies"
import { ISupply } from "../model/model";
import { Button, Col, Container, Row } from "react-bootstrap";
import { SupplyCartProduct } from "../components/SupplyCartCard";
import { getCartSupplies } from "../services/cart";
import { useAppSelector } from "../redux/Hooks";

export function ShopCart (){
    const emptySup: ISupply ={
        id:"",
        name: "",
        description:"",
        picture:"",
        type: 1,
        price:1
      }
    const[sups,setSups]=useState<ISupply[]>([]);
    const[loading,setLoading]=useState(true);
    const id=useAppSelector((state)=> state.auth.id);
    
      useEffect(()=>{
        const getSup =async ()=>
          {
            setLoading(true);
            const sups =await getCartSupplies(id);
            setLoading(false);
            setSups(sups);
          }
    
          getSup();
      },[])
    
    return(
      
        <>
        {loading ? 
            <p className="text-center display-4">Loading...</p> 
            :
        
        <Container><Row>
          {sups.map(sup => <Col key={sup.id} > 
          <div className=" d-flex align-items-stretch">
            <SupplyCartProduct supply={sup}></SupplyCartProduct>
          </div></Col>)}
        </Row>
        </Container>
        
        }
      </>
    )
}
    
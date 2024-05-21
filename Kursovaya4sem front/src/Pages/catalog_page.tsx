import { useEffect, useState } from "react";
import { SupplyProduct } from "../components/SupplyCard";
import{getAllSupplies} from "../services/supplies"
import { supplies } from "../data/Supplies";
import { ISupply } from "../model/model";


export function Catalog(){
const[sups,setSups]=useState<ISupply[]>([]);
const[loading,setLoading]=useState(true);

  useEffect(()=>{
    const getSup =async ()=>
      {
        setLoading(true);
        const sups =await getAllSupplies();
        setLoading(false);
        setSups(sups);
      }

      getSup();
  },[])

    return(
        <><h1>CATALOG</h1>
        
        {sups.map(sup => <SupplyProduct supply={sup}></SupplyProduct>)}
      </>
    )
}
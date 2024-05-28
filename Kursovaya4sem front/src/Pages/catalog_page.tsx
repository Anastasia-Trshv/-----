import { useEffect, useState } from "react";
import { SupplyProduct } from "../components/SupplyCard";
import{getAllSupplies} from "../services/supplies"
import { ISupply } from "../model/model";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Mode, SupCreater } from "../components/SupCreater";
import { useAppSelector } from "../redux/Hooks";


export function Catalog(){

  const emptySup: ISupply ={
    id:"",
    name: "",
    description:"",
    picture:"",
    type: 1,
    price:1
  }

const admin=useAppSelector((state)=> state.auth.isAdmin);

const[sups,setSups]=useState<ISupply[]>([]);
const[loading,setLoading]=useState(true);
const [showSupCreater, setShowSupCreater] = useState(false);
const handleSupCreaterOpen=()=>{
  setShowSupCreater(!showSupCreater);
}

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
   
      <>
        {admin && <Container><Button variant="secondary" onClick={handleSupCreaterOpen}>Создать товар</Button></Container>}
        
        {showSupCreater && <SupCreater mode={Mode.Create} values={emptySup}></SupCreater>}
        
        {loading ? 
          <p className="text-center display-4">Loading...</p> 
          :
          
          <Container>
            <Row>
              {sups.map(sup => 
                <Col key={sup.id}> 
                  <div className="d-flex align-items-stretch">
                    <SupplyProduct supply={sup}></SupplyProduct>
                  </div>
                </Col>
              )}
            </Row>
          </Container>
        }
      </>
  )
}
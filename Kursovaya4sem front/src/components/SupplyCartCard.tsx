import { Card, Button, ButtonGroup, Container } from "react-bootstrap";
import { ISupply } from "../model/model";
import { deleteFromCart } from "../services/cart";
import { useAppSelector } from "../redux/Hooks";

interface SupplyProps{
    supply:ISupply
}


export function SupplyCartProduct(props:SupplyProps){
  
const id=useAppSelector((state)=> state.auth.id);
const token = useAppSelector((state)=> state.auth.aToken.token);

const handelDelete=async ()=>{
  await deleteFromCart( id, props.supply.id, token);
  
}

return(<>
  <Card style={{ width: '19rem' }}>
  <Card.Img variant="top" src={props.supply.picture} />
  <Card.Body>
    <Card.Title>{props.supply.name}</Card.Title>
    <Card.Text>
      {props.supply.description}
    </Card.Text>
    <Card.Text>
      {props.supply.price} ₽
    </Card.Text>
    <Container className="d-flex justify-content-center" >
    <ButtonGroup aria-label="Basic example">
    <Button size="sm"variant="secondary" onClick={handelDelete}>Купить</Button>
    <Button size="sm" variant="secondary"onClick={handelDelete}>Удалить</Button>
  </ButtonGroup>
  </Container>
  </Card.Body>
</Card>


  
  </>)
}
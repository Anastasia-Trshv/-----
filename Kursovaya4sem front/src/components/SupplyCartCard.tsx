import { Card, Button, ButtonGroup, Container } from "react-bootstrap";
import { ISupply } from "../model/model";
import { deleteSupply } from "../services/supplies";

interface SupplyProps{
    supply:ISupply
}


export function SupplyCartProduct(props:SupplyProps){

const handelDelete=async ()=>{
  await deleteSupply(props.supply.id);
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
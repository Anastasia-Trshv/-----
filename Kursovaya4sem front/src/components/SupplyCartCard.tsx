import { Card, Button, ButtonGroup, Container } from "react-bootstrap";
import { ISupply } from "../model/model";

interface SupplyProps{
    supply:ISupply,
    handelDelete: ()=>void 
}


export function SupplyCartProduct(props:SupplyProps){
  



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
    <Button size="sm"variant="secondary" onClick={props.handelDelete}>Купить</Button>
    <Button size="sm" variant="secondary"onClick={props.handelDelete}>Удалить</Button>
  </ButtonGroup>
  </Container>
  </Card.Body>
</Card>


  
  </>)
}
import { Card, Button } from "react-bootstrap";
import { ISupply } from "../model/model";

interface SupplyProps{
    supply:ISupply
}

export function SupplyProduct(props:SupplyProps){
  
    return(<>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{props.supply.name}</Card.Title>
      <Card.Text>
        {props.supply.description}
      </Card.Text>
      <Card.Text>
        {props.supply.price}
      </Card.Text>
      <Button variant="primary">В коризну</Button>
    </Card.Body>
  </Card>
  </>)
}
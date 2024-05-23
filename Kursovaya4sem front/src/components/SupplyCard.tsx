import { Card, Button, ButtonGroup } from "react-bootstrap";
import { ISupply } from "../model/model";
import { SupCreater } from "./SupCreater";
import { useState } from "react";
import { deleteSupply } from "../services/supplies";

interface SupplyProps{
    supply:ISupply
}
export enum Mode{
  Create,
  Edit
}

export function SupplyProduct(props:SupplyProps){
  const [showSupCreater, setShowSupCreater] = useState(false);

  const toggleSupCreater = () => {
    setShowSupCreater(!showSupCreater);
  };
const handelDelete=async ()=>{
  await deleteSupply(props.supply.id);
}

    return(<>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.supply.picture} />
    <Card.Body>
      <Card.Title>{props.supply.name}</Card.Title>
      <Card.Text>
        {props.supply.description}
      </Card.Text>
      <Card.Text>
        {props.supply.price} ₽
      </Card.Text>
      <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">В корзину</Button>
      <Button variant="secondary" onClick={toggleSupCreater}>Изменить</Button>
      <Button variant="secondary"onClick={handelDelete}>Удалить</Button>
    </ButtonGroup>
    </Card.Body>
  </Card>


  {showSupCreater && <SupCreater mode={Mode.Edit} values={props.supply}></SupCreater>}
  </>)
}
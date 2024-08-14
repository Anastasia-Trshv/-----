import { Card, Button, ButtonGroup, Container } from "react-bootstrap";
import { ISupply } from "../model/model";
import { SupCreater } from "./SupCreater";
import { useState } from "react";
import { useAppSelector } from "../redux/Hooks";
import { AddToCart } from "../services/cart";

interface SupplyProps{
    supply:ISupply,
    handelDelete: ()=>void ,
    getSups: ()=>void
}
export enum Mode{
  Create,
  Edit
}

export function SupplyProduct(props:SupplyProps){

const [showSupCreater, setShowSupCreater] = useState(false);

const login=useAppSelector((state)=> state.auth.isLogin);
  
const admin=useAppSelector((state)=> state.auth.isAdmin);

const id=useAppSelector((state)=> state.auth.id);
const token = useAppSelector((state)=> state.auth.aToken.token);

  const toggleSupCreater = () => {
    setShowSupCreater(!showSupCreater);
  };
const handleInCart = async () =>{
  await AddToCart(id, props.supply.id, token);
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
     {login && <Button size="sm" variant="secondary"onClick={handleInCart}>В корзину</Button>}
    {admin && <Button size="sm"variant="secondary" onClick={toggleSupCreater}>Изменить</Button>}
    {admin && <Button size="sm" variant="secondary"onClick={props.handelDelete}>Удалить</Button>}
  </ButtonGroup>
  </Container>
  </Card.Body>
</Card>


  {showSupCreater && <SupCreater mode={Mode.Edit} values={props.supply} getSups={props.getSups}></SupCreater>}
  </>)
}
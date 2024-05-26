import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { UserRequest, getUser } from "../services/users";


interface Props{
 // handleOk1: ()=> void;
  
}

 

export const LoginForm=( {
 
}:Props)=>
{ 

const [email, setEmail]=useState<string>("");
const [password, setPassword]=useState<string>("");

const handleOk=()=>{
  const getUs = async()=>{
    await getUser(email,password);
  }
  getUs();
}


    return(
        <>
        <Container>
        <div className="d-flex justify-content-center">
        <Form>
    <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
      <Form.Label>Email</Form.Label>
      <Form.Control
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
        autoFocus size="lg"
      />
    </Form.Group>
    <Form.Group
      className="mb-3 " 
      controlId="exampleForm.ControlTextarea1"
    >
      <Form.Label>Пароль</Form.Label>
      <Form.Control  
      
      value={password}
      
      onChange={(e)=>setPassword(e.target.value)}
        autoFocus size="lg"/>
    </Form.Group>
  </Form>
  </div>
  <div className="d-flex justify-content-center"> 
    <Button onClick={handleOk} variant="secondary" size="lg">
          Войти
    </Button>
  </div>
  </Container>
        
        </>
    )
   
}
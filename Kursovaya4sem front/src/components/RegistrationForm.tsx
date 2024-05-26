import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { UserRequest, checkUser, createUser } from "../services/users";

import ReactDOM from "react-dom";

export function RegistrForm(){ 

  
const [email, setEmail]=useState<string>("");
const [password, setPassword]=useState<string>("");
const [name, setName]=useState<string>("");
const[message, setMassege]=useState(false);


const handleOk=()=>{
  const CreateUs = async()=>{
    const usReq: UserRequest={
      Name:name,
      Email:email,
      Role: "user",
      Password:password
    }

    const  answ: boolean=await checkUser(email);
    if (answ === false) {
      setMassege(false);
      await createUser(usReq);
      window.location.assign('http://localhost:5173/catalog')
  } else {
      setMassege(true);
  }
  }
  
  CreateUs();
}

    return(
        <>
        <Container>
        <div className="d-flex justify-content-center">
        <Form>
    <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
      <Form.Label>Email</Form.Label> {message && <p className="text-danger">Этот адрес уже используется</p> }
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
    <Form.Group className="mb-3 " controlId="exampleForm.ControlInput2">
      <Form.Label>Имя</Form.Label>
      <Form.Control
      value={name}
      
      onChange={(e)=>setName(e.target.value)}
        autoFocus size="lg"
      />
    </Form.Group>
  </Form>
  </div>
  <div className="d-flex justify-content-center"> 
    <Button  onClick={handleOk} variant="secondary" size="lg">
          Зарегистрироваться
    </Button>
  </div>
  </Container>
        
        </>
    )
   
}
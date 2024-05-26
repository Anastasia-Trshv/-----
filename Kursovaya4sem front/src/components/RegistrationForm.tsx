import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { UserRequest, checkUser, createUser } from "../services/users";

import ReactDOM from "react-dom";

export function RegistrForm(){ 

  
const [email, setEmail]=useState<string>("");
const [password, setPassword]=useState<string>("");
const [name, setName]=useState<string>("");
const[message, setMassege]=useState(false);
const[pasMessage, setPasMassege]=useState(false);
const[emailMessage, setemailMassege]=useState(false);
const[nameMessage,setnameMessage]=useState(false);

const handleOk=()=>{
  const CreateUs = async()=>{
    const usReq: UserRequest={
      Name:name.trim(),
      Email:email.trim(),
      Role: "user",
      Password:password.trim()
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     let b =false;
   if(!regex.test(email)){
      setemailMassege(true);
      b=true;
   }
   else{
    setemailMassege(false);
   }
    if (password.length<6){
       setPasMassege(true);
       b=true;
    }
    else{
      setPasMassege(false);
     }
     if (name.trim() === "") {
      setnameMessage(true);
      b=true;
  } else {
    setnameMessage(false);
  }
  if(!b){
    const  answ: boolean=await checkUser(email);
    if (answ === false) {
      setMassege(false);
      await createUser(usReq);
      window.location.assign('http://localhost:5173/')
  } else {
      setMassege(true);
  }
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
      {emailMessage && <p className="text-danger">Строка не является адресом электорнной почты</p> }
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
       {pasMessage && <p className="text-danger">Минимальная длина пароля - 6 символов</p> }
      <Form.Control  
      value={password}
      
      onChange={(e)=>setPassword(e.target.value)}
        autoFocus size="lg"/>
    </Form.Group>
    <Form.Group className="mb-3 " controlId="exampleForm.ControlInput2">
      <Form.Label>Имя</Form.Label>
      {nameMessage && <p className="text-danger">Поле обязательно для заполнения</p> }
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
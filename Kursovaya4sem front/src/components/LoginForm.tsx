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
const[message, setMessage]=useState(false);


const handleOk=()=>{
  const getUs = async()=>{
    const user= await getUser(email,password);
    if(user.Email===""){
      setMessage(true)
    }
    else{
      setMessage(false);
      window.location.assign('http://localhost:5173/')
    }
  }
 
  getUs();
   // window.location.assign('http://localhost:5173/')
}


    return(
        <>
        <Container>
        <div className="d-flex justify-content-center">
        <Form>
    <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
      <Form.Label>Email</Form.Label> {message && <p className="text-danger">Пользователь не найден</p>}
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
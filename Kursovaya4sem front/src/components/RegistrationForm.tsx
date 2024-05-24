import { Button, Container, Form } from "react-bootstrap";

export function RegistrForm(){ 
    return(
        <>
        <Container>
        <div className="d-flex justify-content-center">
        <Form>
    <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
      <Form.Label>Email</Form.Label>
      <Form.Control
        autoFocus size="lg"
      />
    </Form.Group>
    <Form.Group
      className="mb-3 " 
      controlId="exampleForm.ControlTextarea1"
    >
      <Form.Label>Пароль</Form.Label>
      <Form.Control  
        autoFocus size="lg"/>
    </Form.Group>
    <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
      <Form.Label>Имя</Form.Label>
      <Form.Control
        autoFocus size="lg"
      />
    </Form.Group>
  </Form>
  </div>
  <div className="d-flex justify-content-center"> {/* Центрируем кнопку */}
    <Button  variant="secondary" size="lg">
          Зарегистрироваться
    </Button>
  </div>
  </Container>
        
        </>
    )
   
}
import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Modal from "react-bootstrap/esm/Modal";
import { ISupply } from "../model/model";
import { SupplyRequest, createSupply, updateSupply } from "../services/supplies";


interface Props{
  mode: Mode;
  values: ISupply;
  
  // handelCancel: ()=> void;
  // handelCreate:(request:SupplyRequest) => void;
  // handleUpdate:(id:string,  request: SupplyRequest)=> void;

}
export enum Mode{
  Create,
  Edit
}


export function SupCreater({
  mode,
  values,
  //handelCancel,
  //handelCreate,
  //handleUpdate,
}:Props

){
   const [name, setName]=useState<string>(""); 
   
   const [description, setDescription]=useState<string>(""); 
   
   const [price, setPrice]=useState<number>(1); 

  const [show, setShow] = useState(true);

  const handelOnOk = ()=>{
    mode === Mode.Edit
    ? handleEdit()
    : handleCreate();

  }
  const handleClose = () => setShow(false);
  const handleEdit = () => 
    {const upSup =async ()=>
    {
      const supReq: SupplyRequest = {
        Name: name,
        Description: description,
        Picture: "https://ultrasolarblock.ru/upload/uf/af7/tyou4y8cgt4nvcd22c4x8hwy6kkgf587.jpg",
        Type: 1,
        Price: price
    };
      await updateSupply(values.id,supReq);
    }
    upSup();
    handleClose();
  }

    const handleCreate = () => 
      {const CrSup =async ()=>
      {
        const supReq: SupplyRequest = {
          Name: name,
          Description: description,
          Picture: "https://ultrasolarblock.ru/upload/uf/af7/tyou4y8cgt4nvcd22c4x8hwy6kkgf587.jpg",
          Type: 1,
          Price: price
      };
        await createSupply(supReq);
      }
      CrSup();
      handleClose();}

    return(
        <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{mode===Mode.Create ? "Создание товара": "Редактирование товара"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Название</Form.Label>
              <Form.Control
               value={name} 
               onChange={(e)=>setName(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Описание</Form.Label>
              <Form.Control 
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              as="textarea" rows={3} />
            </Form.Group>
          
            
            <Form.Label>Цена</Form.Label>
            <InputGroup className="mb-3">
        <Form.Control 
        value={price} 
        onChange={(e)=>setPrice (Number(e.target.value))}
        autoFocus />
      </InputGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handelOnOk}>
            Сохранить 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}




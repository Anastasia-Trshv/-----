
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Modal from "react-bootstrap/esm/Modal";
import { ISupply, IType } from "../model/model";
import { SupplyRequest, createSupply, updateSupply } from "../services/supplies";
import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/Hooks";
import { getAllTypes } from "../services/Type";




interface Props{
  mode: Mode;
  values: ISupply;
  getSups: ()=>void
}
export enum Mode{
  Create,
  Edit
}


export function SupCreater(props:Props

){
   const [name, setName]=useState<string>(props.values.name); 
   
   const[picture, setPicture]= useState<string>(props.values.picture)

   const [description, setDescription]=useState<string>(props.values.description); 
   
   const [price, setPrice]=useState<number>(props.values.price); 

  const [show, setShow] = useState(true);

  const [type, setType] = useState<number>(props.values.type)
  const[types, setTypes]=useState<IType[]>([]);
  
const token = useAppSelector((state)=> state.auth.aToken.token);

const getTypes = async ()=> {
  const types = await getAllTypes();
  setTypes(types);
}


  const handelOnOk = ()=>{
    props.mode === Mode.Edit
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
        Picture: picture,
        Type: type,
        Price: price
    };
      await updateSupply(props.values.id,supReq, token);
    }
    upSup();
    handleClose();
    props.getSups();
  }

    const handleCreate = () => 
      {const CrSup =async ()=>
      {
        const supReq: SupplyRequest = {
          Name: name,
          Description: description,
          Picture: picture,
          Type: type,
          Price: price
      };
        await createSupply(supReq, token);
      }
      CrSup();
      handleClose();
      props.getSups();}




      

      useEffect (()=>{
        getTypes();
      },[])

    return(
        <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.mode===Mode.Create ? "Создание товара": "Редактирование товара"}</Modal.Title>
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

            <Form.Group>
              <Form.Label>Тип товара</Form.Label>
              <Form.Select aria-label="Default select example" value={type}
      onChange={(e) => setType(parseInt(e.target.value, 10))}>
              {types.map((option) => (
      <option key={option.id} value={option.id}>
         {option.name}
      </option>
    ))}
    </Form.Select>
            </Form.Group>
            
            
      
        
          <Form.Group controlId="formFile">
            <Form.Label>Фотография</Form.Label>
            <Form.Control value={picture} onChange={(e)=>setPicture(e.target.value)} type="file"  />
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




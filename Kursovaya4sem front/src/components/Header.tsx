import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/Hooks";
import { logout } from "../redux/Auth";




export function Header(){


    const login=useAppSelector((state)=> state.auth.isLogin);
    const navigate = useNavigate();
     const dispatch=useAppDispatch();


    const handleExit= ()=>{
        dispatch(logout());
    }
    
    return(
        <>
        <Navbar fixed="top" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand onClick={()=> navigate("/")}>MAGAZIN</Navbar.Brand>
                <Nav className="me-auto ">
                   <Nav.Link onClick={()=> navigate("/")}>Каталог</Nav.Link> 
                    {!login &&<Nav.Link onClick={()=> navigate("/log_in")}>Вход</Nav.Link>}
                    {login && <Nav.Link onClick={()=> navigate("/cart")}>Корзина</Nav.Link>}
                    {login && <Nav.Link onClick={handleExit} >Выход</Nav.Link>}
                </Nav>
                
            </Container>
        </Navbar>
        <div className="mt-5"></div>
        <br />
        </>
    )
}
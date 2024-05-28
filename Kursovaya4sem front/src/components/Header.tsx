import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/Hooks";




export function Header(){


    const login=useAppSelector((state)=> state.auth.isLogin);

    const navigate = useNavigate();
    
    return(
        <>
        <Navbar fixed="top" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand onClick={()=> navigate("/")}>MAGAZIN</Navbar.Brand>
                <Nav className="me-auto ">
                   <Nav.Link onClick={()=> navigate("/")}>Каталог</Nav.Link> 
                    <Nav.Link onClick={()=> navigate("/log_in")}>Вход</Nav.Link>
                    {login && <Nav.Link onClick={()=> navigate("/cart")}>Корзина</Nav.Link>}
                    {login && <Nav.Link >Выход</Nav.Link>}
                </Nav>
                
            </Container>
        </Navbar>
        <div className="mt-5"></div>
        <br />
        </>
    )
}
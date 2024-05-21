import { Container, Nav, Navbar } from "react-bootstrap";

export function Header(){
    return(
        <><Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">MAGAZIN</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Домой</Nav.Link>
                    <Nav.Link href="#catalog">Каталог</Nav.Link>
                    <Nav.Link href="#pricing">Вход</Nav.Link>
                    <Nav.Link href="#pricing">Регистрация</Nav.Link>
                    <Nav.Link href="#pricing">Корзина</Nav.Link>
                </Nav>
            </Container>
        </Navbar><br /></>
    )
}
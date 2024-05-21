import { Container, Nav, Navbar } from "react-bootstrap";

export function Header(){
    return(
        <><Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">MAGAZIN</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Домой</Nav.Link>
                    <Nav.Link href="/catalog">Каталог</Nav.Link>
                    <Nav.Link href="/log_in">Вход</Nav.Link>
                    <Nav.Link href="/registration">Регистрация</Nav.Link>
                    <Nav.Link href="/cart">Корзина</Nav.Link>
                </Nav>
            </Container>
        </Navbar><br /></>
    )
}
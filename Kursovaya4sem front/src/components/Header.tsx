import { Container, Nav, Navbar } from "react-bootstrap";

export function Header(){
    return(
        <>
        <Navbar fixed="top" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">MAGAZIN</Navbar.Brand>
                <Nav className="me-auto ">
                    <Nav.Link href="/">Каталог</Nav.Link>
                    <Nav.Link href="/log_in">Вход</Nav.Link>
                    <Nav.Link href="/cart">Корзина</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        <div className="mt-5"></div>
        <br />
        </>
    )
}
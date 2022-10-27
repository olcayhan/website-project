import { Container, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {

    return (
        <>
            <Navbar bg="light" className="sticky-top" expand="lg">
                <Container>
                    <Navbar.Brand href="/" className="me-auto">Ana Sayfa</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-5">
                            <Nav.Link href="/#lessons">Dersler</Nav.Link>
                            <Nav.Link href="/#about">Hakkımızda</Nav.Link>
                            <Nav.Link href="/#contact">İletişim</Nav.Link>


                        </Nav>
                        <Button href="/user" className='ms-auto'>Kullanıcı Girişi</Button>
                        <Button href="/user" className='ms-3'>Yönetici Girişi</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'


function Header() {

  return (
    <header className="p-2 px-5 text-bg-dark">
      <Navbar expand="lg" className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
        <Container tabindex="-1" id="#offcanvas" aria-labelledby="#offcanvasLabel">
          <Navbar.Brand className='navbar-brand text-warning t-s1' href="#home">BBGames</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="offcanvas-body">
            <Nav className="me-auto navbar-nav flex-grow-1 justify-content-between t-s2">
              <Nav.Link className='nav-item nav-link text-light-emphasis' href="#home"></Nav.Link>
              <Nav.Link className='nav-item nav-link text-light-emphasis' href="#home">inicio</Nav.Link>
              <Nav.Link className='nav-item nav-link text-light-emphasis' href="#home"></Nav.Link>
              <Nav.Link className='nav-item nav-link text-light-emphasis' href="#home">Categorias</Nav.Link>
              <Nav.Link className='nav-item nav-link text-light-emphasis' href="#home"></Nav.Link>
              <Nav.Link className='nav-item nav-link text-light-emphasis' href="../Sobre/Sobre.js">Sobre</Nav.Link>
              <Nav.Link className='nav-item nav-link text-light-emphasis' href="#home"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Pesquisar..." aria-label="Search" />
          </form>
          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">Entrar</button>
            <button type="button" className="btn btn-warning">Cadastrar</button>
          </div>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
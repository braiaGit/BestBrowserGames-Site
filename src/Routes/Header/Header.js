import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'

const response = await fetch(
  "https://api-best-browser-games.vercel.app/categories",
  {
      method: "GET",
      headers: {
          "Content-Type": "application/json",
      },
  }
);
const data = await response.json();

function Header() {

  const Categories = () =>
  data.map((category) => {
      return (
         <NavDropdown.Item href="#action/3.1">{category.name}</NavDropdown.Item>
      )
  })

  return (
    <header className="px-2 text-bg-dark">
      <Navbar expand="lg" className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
        <Container tabindex="-1" id="#offcanvas" aria-labelledby="#offcanvasLabel">
          <Navbar.Brand className='navbar-brand text-warning t-s1' href="/">BBGames</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="offcanvas-body">
            <Nav className="me-auto navbar-nav flex-grow-1 justify-content-between t-s2">
              <Nav.Link className='nav-item nav-link text-light-emphasis' href="#"></Nav.Link>
              <Nav.Link className='nav-item nav-link text-light-emphasis' href="/">inicio</Nav.Link>
              <Nav.Link className='nav-item nav-link text-light-emphasis' href="about">Sobre</Nav.Link>
              <Nav.Link className='nav-item nav-link text-light-emphasis' href="#"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <NavDropdown className='navDrop' title="Categorias" id="basic-nav-dropdown">
              <Categories/>
              <NavDropdown.Divider />
              <NavDropdown.Item href="games">Mostrar todos</NavDropdown.Item>
          </NavDropdown>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control-dark text-bg-dark m-responsive" placeholder="Pesquisar..." aria-label="Search" />
          </form>
          <div className="text-end">
            <a href='login' className="btn btn-outline-light me-2">Entrar</a>
            <a href='register' className="btn btn-warning">Cadastrar</a>
          </div>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
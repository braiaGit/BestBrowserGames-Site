import Container from 'react-bootstrap/Container';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './header.css'
import { Link } from 'react-router-dom';

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
        <NavDropdown.Item><Link className="text-decoration-none text-light p-1"  to={category.id}>
          {category.name}
          </Link>
        </NavDropdown.Item>
      )
    })

  return (
    <header className="px-2 text-bg-dark">
      <Navbar expand="lg" className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
        <Container tabindex="-1" id="#offcanvas" aria-labelledby="#offcanvasLabel">
          <Navbar.Brand className='navbar-brand text-warning t-s1'><Link to="/" className='text-decoration-none text-warning'>BBGames</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="offcanvas-body">
            <Nav className="me-auto navbar-nav flex-grow-1 justify-content-between t-s2">
              <Nav.Link className='nav-item nav-link text-light-emphasis c-p-d'></Nav.Link>
              <Nav.Link className='nav-item nav-link text-light-emphasis c-p-d'><Link className="text-decoration-none text-light p-1" to="/">inicio</Link></Nav.Link>
              <Nav.Link className='nav-item nav-link text-light-emphasis c-p-d'><Link className="text-decoration-none text-light p-1" to="about">Sobre</Link></Nav.Link>
              <Nav.Link className='nav-item nav-link text-light-emphasis c-p-d'></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <NavDropdown className='navDrop' title="Categorias" id="basic-nav-dropdown">
            <Categories />
            <NavDropdown.Divider />
            <NavDropdown.Item className='c-p-d'><Link to="games" className='text-decoration-none text-light'>
              Mostrar todos
              </Link></NavDropdown.Item>
          </NavDropdown>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control-dark text-bg-dark m-responsive" placeholder="Pesquisar..." aria-label="Search" />
          </form>
          <div className="text-end">
            <Link to='login' className="btn btn-outline-light me-2">Entrar</Link>
            <Link to='register' className="btn btn-warning">Cadastrar</Link>
          </div>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
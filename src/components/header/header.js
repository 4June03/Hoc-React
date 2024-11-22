import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink to={"/"} className="navbar-brand">
          Huu Nghia
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* sử dụng thẻ Link của router để chuyển hướng không reload trang 
              sử dụng NavLink để khi điều hướng đến đâu thì thêm Class Active tại đó
            */}
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavLink to={"/user"} className="nav-link">
              Users
            </NavLink>
            <NavLink to={"/admin"} className="nav-link">
              Admin
            </NavLink>
          </Nav>

          <Nav>
            <button className="btn-login">Login</button>
            <button className="btn-signup">Sign up</button>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item>Login</NavDropdown.Item>
              <NavDropdown.Item>Logout</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

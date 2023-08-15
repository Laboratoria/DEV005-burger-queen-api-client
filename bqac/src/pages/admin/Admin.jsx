import { Navbar, Nav, Container, Button, Table } from "react-bootstrap";
import { PiHamburgerBold } from "react-icons/pi";
import { RxExit } from "react-icons/rx";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import "./admin.css";

export const Admin = () => {
  return (
    <Container className="bg-admin">
      <Navbar>
        <Container className="header">
          <Navbar.Brand className="logo">
            <PiHamburgerBold className="burger" />
            <Navbar.Text>BQAC Team</Navbar.Text>
          </Navbar.Brand>

          <Nav className="nav-links">
            <Nav.Link href="#" className="nav-opt">
              Usuarios
            </Nav.Link>
            <Nav.Link href="#" className="nav-opt">
              Productos
            </Nav.Link>
          </Nav>

          <Button className="btn-close">
            <RxExit />
          </Button>
        </Container>
      </Navbar>

      <Container className="crud-items">
      <Table striped="columns">
          <thead>
            <tr>
              <th>Id</th>
              <th>Correo</th>
              <th>Contraseña</th>
              <th>Rol</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>admin</td>
              <td>
                <BsPencilSquare />
                <BsTrash />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>admin</td>
              <td>
                <BsPencilSquare />
                <BsTrash />
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </Container>
  );
};

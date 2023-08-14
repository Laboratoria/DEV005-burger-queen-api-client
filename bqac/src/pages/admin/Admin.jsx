import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { PiHamburgerBold } from "react-icons/pi";
import { BiDoorOpen } from "react-icons/bi";
import './admin.css'

export const Admin = () => {
  return (
    <Container className='bg-admin'>
      <Navbar className='navbar'>
      <Container className='cont-logo'>
        <Container className="">
          <Navbar.Brand >
            <PiHamburgerBold
              className=""
            />{' '}
            BQAC Team
          </Navbar.Brand>
        </Container>


        <Nav variant='tabs' className='cont-items'>
        <Nav.Item>
          <Nav.Link href="#">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        </Nav>

          <Button className='cont-btn' variant="primary"><BiDoorOpen/></Button>
      </Container>
    </Navbar>
    </Container>
  )
}

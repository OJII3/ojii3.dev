import Link from 'next/link'
import Image from 'next/image'
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'

/**
 * Navbar: BsPrefixRefForwardingComponent<"nav", NavbarProps>
 * @returns NavbarComponent: () => JSX.Element
 */
const NavbarComponent = () => {
  const expand = ''
  return (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/ojii3/home" className=''>
          {/*
          <Image
            alt=""
            src="https://avatars.githubusercontent.com/u/84656786?v=4"
            width="30"
            height="30"
            className="d-inline-block align-top"
            style={{borderRadius: '50%'}}
          />
  */}
          {' '}OJII3
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              MENU
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/ojii3/home">Home</Nav.Link>
              <Navbar.Collapse className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Item>Works</Nav.Item>
                <Nav.Link href='/ojii3/nesxjs-gh-pages'>Next.js × GitHub Pages</Nav.Link>
                <Nav.Link href='/ojii3/tetris'>Tetris</Nav.Link>
              </Navbar.Collapse>
              <NavDropdown
                title="Info"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="https://github.com/ojii3">GitHub</NavDropdown.Item>
                <NavDropdown.Item href="https://qiita.com/ojii3">Qiita</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* 
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>*/
            }
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent;
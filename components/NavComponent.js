import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavComponent = () => {
  return (
    <>
      <Navbar expand="xl" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">anky</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/ai-model">ai model</Nav.Link>
                <Nav.Link href="/book">the book</Nav.Link>
                <NavDropdown
                  title="$newen"
                  id={`offcanvasNavbarDropdown-expand-xl`}
                >
                  <NavDropdown.Item href="/newen/tokenomics">
                    tokenomics
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/newen/airdrops">
                    airdrops
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/newen/liquidity-mining">
                    liquidity mining
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/newen/why">why?</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Button
                href="https://app.anky.world"
                target="_blank"
                variant="outline-success"
              >
                Launch App
              </Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavComponent;

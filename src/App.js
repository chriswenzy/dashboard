import logo from './logo.svg';
import './App.css';
import { Col, Container, Navbar, Nav, ButtonGroup, Button, Row} from 'react-bootstrap';


function App() {
  return (
    <div className="Container" >
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <ButtonGroup aria-label="Basic example" size="sm" className="mr-2">
            <Button variant="dark">Training mode</Button>
            <Button variant="dark">Live mode</Button>
          </ButtonGroup>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="mr-auto">
          <ButtonGroup aria-label="Basic example" size="sm" className="mr-2">
            <Button variant="dark">Show All</Button>
            <Button variant="dark">Crypto</Button>
            <Button variant="dark">Commodities</Button>
            <Button variant="dark">Stock</Button>
            <Button variant="dark">Index</Button>
            <Button variant="dark">Currency</Button>
          </ButtonGroup>
          </Nav>

          <Nav>
            <Nav.Link href="#deets"> 
            <i className="fa fa-search"></i>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Row>
          <Col md={4}> 
          <h6 className="text-color">OPEN TRACKS</h6>
          </Col>
          <Col md={8}> content</Col>
      </Row>
      </Container>

    </div>
    
  );
}

export default App;

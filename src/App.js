import logo from './logo.svg';
import './App.css';
import { Col, Container, Navbar, Nav, ButtonGroup, Button, Row, Card} from 'react-bootstrap';


function App() {
  return (
    <div className="wrapper" >
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <ButtonGroup aria-label="Basic example" size="sm" className="mr-2">
            <Button variant="dark">Training mode</Button>
            <Button variant="dark">Live mode</Button>
          </ButtonGroup>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <div className="mr-auto justify-content-center">
            <ButtonGroup aria-label="Basic example" size="sm" className="mr-2">
              <Button variant="dark">Show All</Button>
              <Button variant="dark">Crypto</Button>
              <Button variant="dark">Commodities</Button>
              <Button variant="dark">Stock</Button>
              <Button variant="dark">Index</Button>
              <Button variant="dark">Currency</Button>
            </ButtonGroup>
          </div>

          <Nav>
            <Nav.Link href="#deets"> 
            <i className="fa fa-search"></i>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <img src="http://placehold.it/150x150" className="navbar-img" alt="Profile Image" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="sidebar">
      <h6 className="text-color">OPEN TRACKS</h6>

      </div>
      <div className="content">
        <h4>content</h4>
      </div>

    </div>
    
  );
}

export default App;

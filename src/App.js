
import React from 'react';
import logo from './logo.svg';
import gardenPicture from './gardenPicture.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, Badge, Image, Nav, Navbar, Form, FormControl, Container, Col, Row, NavDropdown, ButtonGroup, Card, Alert, Jumbotron, CardColumns} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb'


// axios.<method> will now provide autocomplete and parameter typings
const axios = require('axios').default;



export default function App() {
  return (



    <Router>

    
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" >

        <div className="d-lg-none d-md-none">
        <Navbar.Brand href="/"><span >Community</span> <span>Food Network</span></Navbar.Brand>
        </div>

        <div className="d-none d-lg-block d-none d-md-block">
        <Navbar.Brand href="/"><span>Community</span> <span> Food Network</span></Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
          <Nav className="ml-auto" justify="true">


            <Nav.Item>
              <LinkContainer to="/signUp">
                <Nav.Link to="/signUp">

                  <ButtonGroup className="d-flex">
                    <Button variant="danger">
                      Join
                </Button>
                  </ButtonGroup>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>


            <Nav.Item>
              <LinkContainer to="/contact">
                <Nav.Link to="/contact">
                  <ButtonGroup className="d-flex">
                    <Button variant="info">
                      Contact
                </Button>
                  </ButtonGroup>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>


            <Nav.Item>
              <LinkContainer to="/donate">
                <Nav.Link to="/donate">
                  <ButtonGroup className="d-flex">
                    <Button variant="success">
                      Support
                </Button>
                  </ButtonGroup>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>


          </Nav>

        </Navbar.Collapse>
      </Navbar>


      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/signUp">
            <SignUp />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>


          <Route path="/donate">
            <Donate />
          </Route>


          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div>
    <Container>
      <Row>
        <Col>
        
        <h2 class="aboutThisSection"><span class="cfnBrand">Community <span class="cfnLineBreak"> </span> Food Network</span> <span class="cfnLineBreak"> </span>@ Grand Rapids</h2>
        <Jumbotron>
  <h1>Productively addressing food insecurity.</h1>
  <p>
  <Badge variant="dark">The</Badge>{' '}
  <Badge variant="success">idea</Badge>{' '}
  <Badge pill variant="dark">is</Badge>{' '}
  <Badge variant="success">simple</Badge>{' '}

  : start with donated parcels and try to scale the number and size of our gardens to the point where we can start to make a real impact in the well being of our community. It all begins with you! Do you have a small plot of land we could plant vegetables on? Do you have tools you would like to share--or teach others how to use? <span class="importantInfoOnFrontPage">Please feel free to join us and we'll send you an introductory e-mail with further information and a google calendar invite to our regularly held team meetings!</span>
  </p>
  <p>
    <Button variant="danger">Get Involved!</Button>
  </p>
</Jumbotron>

<CardColumns>
  
  <Card className="text-right" bg="dark" text="white">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        “The single greatest lesson the garden teaches is that our relationship to the planet need not be zero-sum, and that as long as the sun still shines and people still can plan and plant, think and do, we can, if we bother to try, find ways to provide for ourselves without diminishing the world. ”
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
        Michael Pollan in <cite title="Source Title">The Omnivore's Dilemma: A Natural History of Four Meals</cite>
        </small>
      </footer>
    </blockquote>
  </Card>

  <Card bg="dark" text="white">
    <Card.Body>
      <Card.Title>Support</Card.Title>
      <Card.Text>
        We are still getting off the ground and getting ready for our first season, so our main timeline puts us in a fundraising drive until soil-prep starts in 2021. If you are planning on volunteering with us, or leasing land, then please contact us as soon as possible so we can square away the necessary details! Otherwise, any direct support would be greatly appreciated!
      </Card.Text>
      <Card.Text>
      <Button variant="success" block>Support</Button>
      </Card.Text>
    </Card.Body>
  </Card>

  
  <Card className="text-right" bg="dark" text="white">
    <blockquote className="blockquote mb-0 card-body">
      <p>
      “No occupation is so delightful to me as the culture of the earth, and no culture comparable to that of the garden. … But though an old man, I am but a young gardener.”
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
        Thomas Jefferson in a letter to Charles W. Peale <cite title="Source Title">1811</cite>
        </small>
      </footer>
    </blockquote>
  </Card>


  <Card className="text-right" bg="light" text="white">
  
  <Card.Img variant="top" src={gardenPicture} />
    
  </Card>


  <Card bg="dark" text="white">
    <Card.Body>
      <Card.Title>Support</Card.Title>
      <Card.Text>
        We are still getting off the ground and getting ready for our first season, so our main timeline puts us in a fundraising drive until soil-prep starts in 2021. If you are planning on volunteering with us, or leasing land, then please contact us as soon as possible so we can square away the necessary details! Otherwise, any direct support would be greatly appreciated!
      </Card.Text>
      <Card.Text>
      <Button variant="success" block>Support</Button>
      </Card.Text>
    </Card.Body>
  </Card>

  
  <Card className="text-right" bg="dark" text="white">
    <blockquote className="blockquote mb-0 card-body">
      <p>
        “The single greatest lesson the garden teaches is that our relationship to the planet need not be zero-sum, and that as long as the sun still shines and people still can plan and plant, think and do, we can, if we bother to try, find ways to provide for ourselves without diminishing the world. ”
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
        Michael Pollan in <cite title="Source Title">The Omnivore's Dilemma: A Natural History of Four Meals</cite>
        </small>
      </footer>
    </blockquote>
  </Card>

  
</CardColumns>


        
        </Col>
      </Row>
    </Container>
  </div>;
}

function SignUp() {
  return <div class="signUpSection col-lg-6 col-md-6 col-sm-12 d-flex container-fluid">
    <Container class="signUpSection">

      <Row>
        <Col>

          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/signUp" active>
              Join
            </Breadcrumb.Item>
          </Breadcrumb>

          
        <h2 class="aboutThisSection">Get Involved!</h2>

        <Form>
        <Form.Row>
        <Col>
        <Form.Label>First name</Form.Label>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
        <Form.Label>Last name</Form.Label>
          <Form.Control placeholder="Last name" />
        </Col>
        </Form.Row>


  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>
    
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Row>
  <Form.Group as={Col} controlId="formGridEmail">
  <Form.Label>E-mail</Form.Label>
  <Form.Control placeholder="yourEmail@gmail.com"/>
  </Form.Group>
  <Form.Group as={Col} controlId="formPhoneNumber">
  <Form.Label>Phone Number</Form.Label>
  <Form.Control placeholder="(555) 555-5555" />
  </Form.Group>

  

  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="I have tools (hand tools, skid steers, tractors, etc.) I am willing to share or donate" />
    <Form.Check type="checkbox" label="I have knowledge, wisdom & time to donate" />
    <Form.Check type="checkbox" label="I have land to lease/donate" />
  </Form.Group>

  <Button variant="primary" type="submit" block>
    Submit
  </Button>
</Form>
        </Col>
      </Row>
    </Container>
  </div>;

}





function Donate() {
  return <div>
    <Container>
      <Row>
        <Col>
        


        <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/donate" active>
          Donate
        </Breadcrumb.Item>
      </Breadcrumb>


        
        <h2 class="aboutThisSection">Donate</h2></Col>
      </Row>
    </Container>
  </div>;
}


function Contact() {
  return <div class="col-lg-6 col-md-6 contactSection">
    <Container>
      <Row>
        <Col>
        
        
        <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/signUp" active>
          Contact
        </Breadcrumb.Item>
        </Breadcrumb>

        
        <h2 class="aboutThisSection">Let's Grow Together!</h2></Col>
      </Row>

<Row>
  <div class="justify-content-center">
  
  </div>

  <Card>
  <div >
  <Card.Header as="h5">Help us in providing nourishment and food security to others, building connections, & beautifying the community!</Card.Header>
  </div>
  <Card.Body>
    
    <Alert variant="danger">
    <Alert.Heading>Be our pen pal!</Alert.Heading>
    <Card.Text class="cardText">
      We respond to e-mails as soon as possible.
    </Card.Text>
    <div class="text-center buttonBumper">
    <Button variant="danger" block>E-mail</Button>
    </div>
    </Alert>

    
    <Card.Text class="cardText">
      
      <Alert variant="info">
      <Alert.Heading>Community Garden Chat</Alert.Heading>
      
      Discord is a chat web app we use to communicate about events and to socialize--join us!
      
      <div class="text-center buttonBumper">
      <Button variant="info" block>Discord</Button>
      </div>  
    </Alert>
    </Card.Text>
    





    <Card.Text class="cardText">
    <Alert variant="secondary">
    <Alert.Heading>Nerd Alert!</Alert.Heading>
      Slack is a chat web app we use for boring paperwork related stuff. This link only applies to people who are good at doing paperwork. If that sounds like you, then please send us an email and we will grant you access.
      <div class="text-center buttonBumper">
    <Button variant="secondary" block>Slack</Button>
    </div>
      </Alert>
    </Card.Text>
    


  </Card.Body>
</Card>
    </Row>
    </Container>
  </div>;
}

function HasLand() {
  return <h2>I have land!</h2>;
}

function HasHands() {
  return <h2>I have hands!</h2>;
}

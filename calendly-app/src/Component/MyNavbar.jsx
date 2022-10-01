import { Select ,Image } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
import {Button} from '@chakra-ui/react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';

export default function MyNavbar() {
    return (
        <>
            <div>


                <Navbar bg="light" expand="lg">
                    <Container fluid bg="light" expand="lg">

                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Nav
                            className="me-auto my-3 my-lg-1"
                            style={{ maxHeight: '100px', marginLeft: "85%" }}
                            navbarScroll
                        >
                            <img id="globe" src="https://cdn-icons-png.flaticon.com/128/2889/2889312.png" 
                            alt=""  height="20px"   display="inline"  />
                            
                            <NavDropdown title="English" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Francais</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Espanol</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Deutsch</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Portugues</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Deutsch</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>


                    </Container>
                </Navbar>
                {/* first part */}
            </div>

            <div>




                {/* sec part start */}
                <Navbar >
                    <Container fluid >
                        
                        <Image src="https://cdn.mos.cms.futurecdn.net/W3yFiCjbmPia2u3qk9kKci-1200-80.jpg.webp" 
                        width="100px" />
                        
                      
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px',marginLeft:"300px" }}
                              
                            >
                                <Nav.Link href="/individuals">Individuals</Nav.Link>
                                <Nav.Link href="/teams">Teams</Nav.Link>
                                <Nav.Link href="/Enterprise">Enterprise</Nav.Link>
                                <NavDropdown title="Product" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/pricing">Pricing</Nav.Link>
                                
                                <NavDropdown title="Resources" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                           {/* <Image src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
                            alt="" width="25px"/> */}
                          
                              <Link to="/login">   <Button className="login_btn">Log In</Button></Link>
                            <Button className='fifth'>Get started</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/* sec nav part  */}
            </div>
        </>
    )
}


// ..................................










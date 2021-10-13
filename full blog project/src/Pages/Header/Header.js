import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hoocks/useFirebase';
import './Header.css'
import Button from 'react-bootstrap/Button'

const Header = () => {
    const {user,logIn} =useFirebase() 
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                        <NavLink className="comon" to="/home" activeStyle={{fontWeight: "bold",color: "black"}}> Home </NavLink>
                        <NavLink className="comon" to="/login" activeStyle={{fontWeight: "bold",color: "black"}}> Login </NavLink> 
                        <NavLink className="comon" to="/blog" activeStyle={{fontWeight: "bold",color: "black"}}> Blog </NavLink> 
                        </Nav>
                        <Nav className="ms-auto"> 
                        {user.email ?  <Button variant="warning" onClick={logIn}> Logout </Button>
                         :
                        <Button  variant="info">user</Button>}
                        <h5 className="mt-2 mx-2" style={{color:'white'}}>{user?.displayName}</h5>

                        </Nav>
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
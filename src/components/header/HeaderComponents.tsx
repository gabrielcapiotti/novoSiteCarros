import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { ButtomStyled, StyledLink } from "../components/buttomStyled";
import HeaderStyled from './HeaderStyled';

function HeaderConteudo() {
    return (
        <HeaderStyled>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>

                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <ButtomStyled label="Home" to="/home">Home</ButtomStyled>
                            <ButtomStyled label="Ofertas" to="/Ofertas">Ofertas</ButtomStyled>
                            <ButtomStyled label="Produtos" to="/Produtos" title='Marcas'>Marcas
                                <NavDropdown.Item href="#action3"></NavDropdown.Item>
                                <NavDropdown.Item href="#action4"></NavDropdown.Item>
                            </ButtomStyled>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </HeaderStyled>
    );
}

export default HeaderConteudo;

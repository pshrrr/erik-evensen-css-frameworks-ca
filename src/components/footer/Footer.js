import React from "react";
import { FaVimeoV } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <Container fluid className="main-footer">
      <Row className="footer-container">
        <Col className="footer-icons">
          <FaVimeoV className="footer-icon"></FaVimeoV>
          <FaYoutube className="footer-icon"></FaYoutube>
        </Col>

        <Col className="footer-email">hello@yay.com</Col>
        <Col className="footer-copy">Copyright 2020</Col>
      </Row>
    </Container>
  );
}

export default Footer;

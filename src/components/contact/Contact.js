import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { GrMail } from "react-icons/gr";
import { ImMobile, ImLocation } from "react-icons/im";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <Container md="auto" className="main-contact">
      <h1 className="h1-contact">Submit your details</h1>
      <Row>
        <Col md="auto" className="contact-info">
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group controlId="formBasicText">
              <Form.Label>Website</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">https://</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder=""
                  aria-label=""
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={7} />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Allow us to sell your personal deitals to whomever we want"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              size="lg"
              block
              className="contact-btn"
            >
              Submit
            </Button>
          </Form>
        </Col>
        <Col md="auto">
          <div className="contact-container">
            <div className="contact-icon">
              <GrMail className="mr-3 con-icons"></GrMail>hello@yay.com
            </div>
            <div className="contact-icon">
              <ImMobile className="mr-3 con-icons"></ImMobile>123 456 7890
            </div>
            <div className="contact-icon">
              <ImLocation className="mr-3 con-icons"></ImLocation>123 Some
              Street Somewhere Some City 10000
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;

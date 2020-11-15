import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Acc = ({ imgsrc, children }) => {
  return (
    <>
      <Container>
        <Row className="acc-container">
          <Col className="tab-text">
            <p>{children}</p>

            <img
              src={imgsrc}
              className="tabImage"
              alt="three awesome pictures"
            ></img>

            <div className="icon-acc">
              SHARE
              <FaFacebookF className="tabIcons"></FaFacebookF>
              <FaTwitter className="tabIcons"></FaTwitter>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Acc;

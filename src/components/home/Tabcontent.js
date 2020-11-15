import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TabContent = ({ imgsrc, children }) => {
  return (
    <>
      <Container>
        <Row className="tab-container">
          <Col xs lg="3" className="tab-img">
            <img
              src={imgsrc}
              className="tabImage"
              alt="three awesome pictures"
            ></img>
          </Col>
          <Col className="tab-text">
            <p>{children}</p>
            <div className="icon-container">
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

export default TabContent;

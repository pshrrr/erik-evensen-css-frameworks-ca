import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Tabcontent from "./Tabcontent";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Acc from "./Acc";

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/carousel-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/carousel-2.jpg"
            alt="second slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/carousel-3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container fluid className="home-body">
        <Row>
          <h1 className="home-h1">We do YAY things</h1>
          <p>
            Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi,
            a rutrum justo eros pretium libero. Nullam vel enim id mauris
            eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu
            sit amet, consectetur faucibus urna. Suspendisse massa diam,
            efficitur eu massa euismod, pretium lacinia magna. Donec mi orci,
            sollicitudin in luctus a, varius eget massa.{" "}
          </p>
        </Row>
      </Container>

      <Container fluid>
        <Accordion defaultActiveKey="0" className="d-md-none">
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                className="acc-link"
              >
                First
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Acc imgsrc="./images/tab-1.jpg">
                  Nam tincidunt, sapien nec congue porta, tellus risus
                  ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel
                  enim id mauris eleifend finibus et ac orci. Aliquam metus
                  massa, aliquam quis arcu sit amet, consectetur faucibus urna.
                  Suspendisse massa diam, efficitur eu massa euismod, pretium
                  lacinia magna. Donec mi orci, sollicitudin in luctus a, varius
                  eget massa.
                </Acc>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="1"
                className="acc-link"
              >
                Second
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Acc imgsrc="./images/tab-2.jpg">
                  Nam tincidunt, sapien nec congue porta, tellus risus
                  ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel
                  enim id mauris eleifend finibus et ac orci. Aliquam metus
                  massa, aliquam quis arcu sit amet, consectetur faucibus urna.
                  Suspendisse massa diam, efficitur eu massa euismod, pretium
                  lacinia magna. Donec mi orci, sollicitudin in luctus a, varius
                  eget massa.
                </Acc>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="2"
                className="acc-link"
              >
                Third
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Acc imgsrc="./images/tab-3.jpg">
                  Nam tincidunt, sapien nec congue porta, tellus risus
                  ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel
                  enim id mauris eleifend finibus et ac orci. Aliquam metus
                  massa, aliquam quis arcu sit amet, consectetur faucibus urna.
                  Suspendisse massa diam, efficitur eu massa euismod, pretium
                  lacinia magna. Donec mi orci, sollicitudin in luctus a, varius
                  eget massa.
                </Acc>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <div className="d-none d-md-block">
          <Tabs defaultActiveKey="First" id="tabs">
            <Tab eventKey="First" title="First">
              <Tabcontent imgsrc="./images/tab-1.jpg">
                Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper
                mi, a rutrum justo eros pretium libero. Nullam vel enim id
                mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam
                quis arcu sit amet, consectetur faucibus urna. Suspendisse massa
                diam, efficitur eu massa euismod, pretium lacinia magna. Donec
                mi orci, sollicitudin in luctus a, varius eget massa.
              </Tabcontent>
            </Tab>
            <Tab eventKey="Second" title="Second">
              <Tabcontent imgsrc="./images/tab-2.jpg">
                Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper
                mi, a rutrum justo eros pretium libero. Nullam vel enim id
                mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam
                quis arcu sit amet, consectetur faucibus urna. Suspendisse massa
                diam, efficitur eu massa euismod, pretium lacinia magna. Donec
                mi orci, sollicitudin in luctus a, varius eget massa.
              </Tabcontent>
            </Tab>
            <Tab eventKey="Third" title="Third">
              <Tabcontent imgsrc="./images/tab-3.jpg">
                Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper
                mi, a rutrum justo eros pretium libero. Nullam vel enim id
                mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam
                quis arcu sit amet, consectetur faucibus urna. Suspendisse massa
                diam, efficitur eu massa euismod, pretium lacinia magna. Donec
                mi orci, sollicitudin in luctus a, varius eget massa.
              </Tabcontent>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </>
  );
}

export default Home;

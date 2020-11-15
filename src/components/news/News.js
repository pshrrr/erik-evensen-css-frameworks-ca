import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function News() {
  return (
    <>
      <Container md="auto">
        <Row>
          <Col>
            <h1 className="h1-news">News</h1>

            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item active">
                  <a class="page-link" href="./news">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="./news">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="./news">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="./news">
                    4
                  </a>
                </li>
              </ul>
            </nav>
            <div>
              <div>
                <CardDeck className="card-container">
                  <Card>
                    <Card.Img variant="top" src="./images/news-1.jpg" />
                    <Card.Body>
                      <Card.Title>Nunc porttitor vel</Card.Title>
                      <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                      </Card.Text>
                    </Card.Body>
                    <Button className="news-btn" variant="primary">
                      More
                    </Button>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./images/news-2.jpg" />
                    <Card.Body>
                      <Card.Title>Nunc porttitor vel</Card.Title>
                      <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                      </Card.Text>
                    </Card.Body>
                    <Button className="news-btn" variant="primary">
                      More
                    </Button>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./images/news-3.jpg" />
                    <Card.Body>
                      <Card.Title>Nunc porttitor vel</Card.Title>
                      <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                      </Card.Text>
                    </Card.Body>
                    <Button className="news-btn" variant="primary">
                      More
                    </Button>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="./images/news-4.jpg" />
                    <Card.Body>
                      <Card.Title>Nunc porttitor vel</Card.Title>
                      <Card.Text>
                        Nunc malesuada eget est fringilla dapibus.
                      </Card.Text>
                    </Card.Body>
                    <Button className="news-btn" variant="primary">
                      {" "}
                      More
                    </Button>
                  </Card>
                </CardDeck>
              </div>
              <div className="row">
                <div className="col-sm">
                  <CardDeck className="card-container">
                    <Card>
                      <Card.Img variant="top" src="./images/news-5.jpg" />
                      <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                          Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                      </Card.Body>
                      <Button className="news-btn" variant="primary">
                        More
                      </Button>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src="./images/news-6.jpg" />
                      <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                          Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                      </Card.Body>
                      <Button className="news-btn" variant="primary">
                        More
                      </Button>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src="./images/news-7.jpg" />
                      <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                          Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                      </Card.Body>
                      <Button className="news-btn" variant="primary">
                        More
                      </Button>
                    </Card>
                    <Card>
                      <Card.Img variant="top" src="./images/news-8.jpg" />
                      <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                          Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                      </Card.Body>
                      <Button className="news-btn" variant="primary">
                        More
                      </Button>
                    </Card>
                  </CardDeck>
                </div>
              </div>

              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item active">
                    <a class="page-link" href="./news">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="./news">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="./news">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="./news">
                      4
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default News;

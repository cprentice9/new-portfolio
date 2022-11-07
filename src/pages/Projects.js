import React from "react";
import "./Projects.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Home() {
  return (
    <div>
      <h1 className="my_work">My Work</h1>
      <div className="projects_container">
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
          <Card.Body>
            <Card.Title>Amazon Clone</Card.Title>
            <Card.Text>
              I built a working Amazon Clone with React that has payment processing built in through the stripe API.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>React</ListGroup.Item>
            <ListGroup.Item>Node</ListGroup.Item>
            <ListGroup.Item>Express</ListGroup.Item>
            <ListGroup.Item>Firebase Cloud Functions</ListGroup.Item>
            <ListGroup.Item>Stripe Payment API</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://amazon-clone.coolestconnor.com/">Link to App</Card.Link>
            <Card.Link href="https://github.com/cprentice9/Devmountain/tree/main/amazonCloneFinalProject/amazon-clone">
              GitHub Repo
            </Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
          <Card.Body>
            <Card.Title>Random Movie Picker</Card.Title>
            <Card.Text>
              I built a Random Movie Picker app with React that connects to the IMdB 250 Most Popular Movies API and
              picks a random movie from the pool for you to watch.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>React</ListGroup.Item>
            <ListGroup.Item>IMDb 250 Most Popular Movies API</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://random-movie-picker-assessment.herokuapp.com/">Link to App</Card.Link>
            <Card.Link href="https://github.com/cprentice9/random-movie-picker">GitHub Repo</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./Projects.css";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <div>
      <h1 className="my_work">My Work</h1>
      <div className="projects_container">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Amazon Clone</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              React, Node, Express, Firebase Cloud Functions, Stripe API
            </Card.Subtitle>
            <Card.Text>
              I built a working Amazon Clone with React that has payment processing built in through the stripe API.
            </Card.Text>
            <Card.Link href="https://amazon-clone.coolestconnor.com/">Link to App</Card.Link>
            <Card.Link href="https://github.com/cprentice9/Devmountain/tree/main/amazonCloneFinalProject/amazon-clone">
              GitHub Repo
            </Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Random Movie Picker</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">React, IMDb 250 Most Popular Movies API</Card.Subtitle>
            <Card.Text>
              I built a Random Movie Picker app with React that connects to the IMdB 250 Most Popular Movies API and
              picks a random movie from the pool for you to watch.
            </Card.Text>
            <Card.Link href="https://random-movie-picker-assessment.herokuapp.com/">Link to App</Card.Link>
            <Card.Link href="https://github.com/cprentice9/random-movie-picker">GitHub Repo</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import Card from "react-bootstrap/Card";

const Welcome = () => {
  return (
    <Card  className="mb-2 mt-2 text-center" bg="light">
      <Card.Title className="mt-2">Welcome to Meme generator or just an image edditor</Card.Title>
      <Card.Body>Here you can upload a image and write a text on it. Please try to upload only images, file validation not implamented.</Card.Body>
    </Card>
  );
};

export default Welcome;

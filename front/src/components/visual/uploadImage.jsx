import React from "react";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const uploadImage = ({ hendlePictureInput }) => {
  return (
    <Card className="mb-2 pl-2" bg="light">
      <Form.Label>Upload image or select from list</Form.Label>
      <Form.Control
        className="mb-1"
        type="file"
        name="image"
        onChange={value => hendlePictureInput(value)}
      />
    </Card>
  );
};

export default uploadImage;

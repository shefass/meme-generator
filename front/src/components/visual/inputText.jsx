import React from "react";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const InputText = ({ text, hendleTextInput }) => {
  return (
    <Card className="mb-2 pl-2 pr-2" bg="light">
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Please input here text which you want put on the image</Form.Label>
        <Form.Control
          placeholder="Please input here text which you want put on the image"
          aria-label="Meme text"
          value={text}
          onChange={value => hendleTextInput(value)}
        />
      </Form.Group> 
    </Card>
  );
};

export default InputText;

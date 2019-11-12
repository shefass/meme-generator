import React from "react";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const TextCordinates = ({xTextMove, hendleXmove, yTextMove, hendleYmove}) => {
  return (
    <Card>
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Please input X move</Form.Label>
            <Form.Control
              placeholder="Please input X move"
              aria-label="X move"
              value={xTextMove}
              onChange={value => hendleXmove(value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Please input Y move</Form.Label>
            <Form.Control
              placeholder="Please input Y move"
              aria-label="Y move"
              value={yTextMove}
              onChange={value => hendleYmove(value)}
            />
          </Form.Group>
        </Form.Row>
      </Form>
    </Card>
  );
};

export default TextCordinates;

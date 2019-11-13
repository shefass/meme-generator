import React from "react";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const TextCordinates = ({xTextMove, hendleXmove, yTextMove, hendleYmove}) => {
  return (
    <Card className="mb-2 pl-2 pr-2 pt-2" bg="light">
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Please input how many pixels to move by X-axis</Form.Label>
            <Form.Control
              placeholder="Please input how many pixels to move by X-axis"
              aria-label="X move"
              value={xTextMove}
              onChange={value => hendleXmove(value)}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Please input how many pixels to move by Y-axis</Form.Label>
            <Form.Control
              placeholder="Please input how many pixels to move by Y-axis"
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

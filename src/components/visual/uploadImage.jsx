import React from "react";

import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FirstPicture from "../../images/first.png";
import SecondPicture from "../../images/second.png";
import ThirdPicture from "../../images/third.png";

const uploadImage = ({ hendlePictureInput, hendlePictureClick, error}) => {
  return (
    <Card className="mb-2 pl-2" bg="light">
      <Form.Label>Upload image or select from the gallery</Form.Label>
      <Form.Control
        className="mb-1"
        type="file"
        name="image"
        onChange={value => hendlePictureInput(value)}
      />
      {<strong style={{color: 'red'}}>{error}</strong>}
      <Container>
        <Row>
          <Col>
            <Image
              src={FirstPicture}
              thumbnail
              name="first"
              onClick={(value) => hendlePictureClick(value)}
            />
          </Col>
          <Col>
            <Image src={SecondPicture} thumbnail name="second"  onClick={(value) => hendlePictureClick(value)}/>
          </Col>
          <Col>
            <Image src={ThirdPicture} thumbnail name="third"  onClick={(value) => hendlePictureClick(value)}/>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default uploadImage;

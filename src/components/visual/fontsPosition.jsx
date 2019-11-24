import React from "react";

import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const FontsPositionAndConvert = ({
  vertical_align,
  hendleVerticalAlign,
  horizontal_align,
  hendleHorizantalAlign,
  fontSize,
  hendleDropDownClick,
  fontColor,
  hendleColor  
}) => {
  return (
    <Card className="mb-2" bg="light">
      <ButtonGroup aria-label="Vertical Aligment" vertical className="m-2">
        <Button
          variant="info"
          active={"top" === vertical_align}
          value="top"
          onClick={value => hendleVerticalAlign(value)}
        >
          Text vertical position - Top
        </Button>
        <Button
          variant="info"
          active={"middle" === vertical_align}
          value="middle"
          onClick={value => hendleVerticalAlign(value)}
        >
          Middle
        </Button>
        <Button
          variant="info"
          active={"bottom" === vertical_align}
          value="bottom"
          onClick={value => hendleVerticalAlign(value)}
        >
          Bottom
        </Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Horizontal Aligment" className="mr-2 ml-2 mb-2">
        <Button
          variant="info"
          active={"left" === horizontal_align}
          value="left"
          onClick={value => hendleHorizantalAlign(value)}
        >
          Left
        </Button>
        <Button
          variant="info"
          active={"center" === horizontal_align}
          value="center"
          onClick={value => hendleHorizantalAlign(value)}
        >
          Text horizontal position - Center
        </Button>
        <Button
          variant="info"
          active={"right" === horizontal_align}
          value="right"
          onClick={value => hendleHorizantalAlign(value)}
        >
          Right
        </Button>
      </ButtonGroup>
      <Dropdown as={ButtonGroup} className="mr-2 ml-2 mb-2">
        <Button variant="secondary">Font size: {fontSize} Click to change font size --></Button>

        <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item name="8" onClick={value => hendleDropDownClick(value)}>
            8
          </Dropdown.Item>
          <Dropdown.Item
            name="16"
            onClick={value => hendleDropDownClick(value)}
          >
            16
          </Dropdown.Item>
          <Dropdown.Item
            name="32"
            onClick={value => hendleDropDownClick(value)}
          >
            32
          </Dropdown.Item>
          <Dropdown.Item
            name="64"
            onClick={value => hendleDropDownClick(value)}
          >
            64
          </Dropdown.Item>
          <Dropdown.Item
            name="128"
            onClick={value => hendleDropDownClick(value)}
          >
            128
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <ButtonGroup aria-label="Horizontal Aligment" className="mr-2 ml-2 mb-2">
        <Button
          variant="info"
          active={"black" === fontColor}
          value="black"
          onClick={value => hendleColor(value)}
        >
          Font color black
        </Button>
        <Button
          variant="info"
          active={"white" === fontColor}
          value="white"
          onClick={value => hendleColor(value)}
        >
         Font color white
        </Button>
      </ButtonGroup>
    
    </Card>
  );
};

export default FontsPositionAndConvert;

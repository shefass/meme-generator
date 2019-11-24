import React from "react";
//import { Progress } from "reactstrap";
import Card from "react-bootstrap/Card";


const Picture = ({ picture, convertedPicture, loaded }) => {
  if (convertedPicture) {
    return (
      <Card>
       {/*<Progress max="100" color="success" value={loaded}>
          {Math.round(loaded, 2)}%
        </Progress>
        */} 
        <Card.Body className="text-center">
          <Card.Text>
            Here you can see your converted image, now you can save it or change configuration again.
          </Card.Text>
        </Card.Body>
      
      <Card.Img variant="bottom" src={convertedPicture} />
      
      </Card>
    );
  } else if (picture) {
    return (
      <Card>
        <Card.Body className="text-center">
          <Card.Text>
            Here you can see your uploaded or selected image, now write cool
            text and position it. After you will push the convert button, here you will see a converted image. 
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={picture} />
      </Card>
    );
  }

  return null;
};

export default Picture;


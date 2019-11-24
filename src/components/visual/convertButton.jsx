import React from "react";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Card from "react-bootstrap/Card";

const Convert = ({ hendleConvertion, picture, convertedPicture }) => {
 
  if (!picture && !convertedPicture) {
    return (
      <OverlayTrigger
        overlay={
          <Tooltip>
            Please upload your image or select from the galary. Good luck!
          </Tooltip>
        }
      >
        <Card className="mb-2">
          <Button disabled style={{ pointerEvents: "none" }}>
            Convert image
          </Button>
        </Card>
      </OverlayTrigger>
    );
  } else {
    return (
      <Card className="mb-2">
        <Button
          variant="success"
          onClick={hendleConvertion}
          >
          Convert image
        </Button>
      </Card>
    );
  }
};

export default Convert;

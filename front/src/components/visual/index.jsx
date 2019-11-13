import React from "react";

import Welcome from "./welcome";
import Picture from "./picture";
import UploadImage from "./uploadImage";
import InputText from "./inputText";
import TextCordinates from "./textCordinates";
import FontsPositionAndConvert from "./fontsPositionAndConvert";

const Index = ({
  text,
  hendleTextInput,
  picture,
  hendlePictureInput,
  horizontal_align,
  vertical_align,
  hendleHorizantalAlign,
  hendleVerticalAlign,
  fontSize,
  hendleDropDownClick,
  hendleConvertion,
  fontColor,
  hendleColor,
  xTextMove,
  yTextMove,
  hendleXmove,
  hendleYmove,
  convertedPicture,
  loaded,
  hendlePictureClick
}) => {
  return (
    <React.Fragment>
      <Welcome />
      <Picture
        picture={picture}
        convertedPicture={convertedPicture}
        loaded={loaded}
      />
      <UploadImage
        hendlePictureInput={hendlePictureInput}
        hendlePictureClick={hendlePictureClick}
      />
      <InputText text={text} hendleTextInput={hendleTextInput} />
      <TextCordinates
        xTextMove={xTextMove}
        yTextMove={yTextMove}
        hendleXmove={hendleXmove}
        hendleYmove={hendleYmove}
      />
      <FontsPositionAndConvert
        horizontal_align={horizontal_align}
        vertical_align={vertical_align}
        hendleHorizantalAlign={hendleHorizantalAlign}
        hendleVerticalAlign={hendleVerticalAlign}
        fontSize={fontSize}
        hendleDropDownClick={hendleDropDownClick}
        hendleConvertion={hendleConvertion}
        fontColor={fontColor}
        hendleColor={hendleColor}
      />
    </React.Fragment>
  );
};

export default Index;

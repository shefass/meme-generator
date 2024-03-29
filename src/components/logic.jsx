import React, { Component } from "react";
import axios from "axios";

import Visual from "./visual/index";
import {
  SERVER_ADDRESS,
  FRONT_SERVER_ADDRESS
  
} from "../CONFIQ";

class Logic extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
    this._mounted = false;
  }
  state = {
    text: "",
    picture: null,
    convertedPicture: null,
    internalPicture: null,  
    loaded: 0, //not used
    horizontal_align: "center",
    vertical_align: "top",
    fontSize: "16",
    fontColor: "black",
    xTextMove: "",
    yTextMove: "",
    error: null
  };

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  hendleTextInput = e => {
    if (this._mounted) {
      this.setState({ text: e.target.value });
    }
  };

  hendlePictureInput = e => {


    if (e.target.files[0] && this._mounted) {
      if(!/image/.test(e.target.files[0].type)) {
       return this.setState({ error: "Please upload image, not a "+ e.target.files[0].type })
      } else if(Number(e.target.files[0].size) > 1024 * 1024 * 4){
        return this.setState({ error: "Please upload smaller image, max size 4mb"})
      } else {
        this.setState({ picture: e.target.files[0], convertedPicture: null, internalPicture: null, error: null });
      }
    }
  };

  hendlePictureClick = e => {

    this.setState({ picture: null, convertedPicture: e.target.src, internalPicture: e.target.name, error: null  });
   
  };

  hendleHorizantalAlign = e => {
    this.setState({ horizontal_align: e.target.value });
  };

  hendleVerticalAlign = e => {
    this.setState({ vertical_align: e.target.value });
  };

  hendleDropDownClick = e => {
    this.setState({ fontSize: e.target.name });
  };

  hendleColor = e => {
    this.setState({ fontColor: e.target.value });
  };

  hendleXmove = e => {
    this.setState({ xTextMove: e.target.value });
  };

  hendleYmove = e => {
    this.setState({ yTextMove: e.target.value });
  };

  hendleConvertion = () => {
    //console.log("convertion");
    if (!this.state.picture && !this.state.convertedPicture && !this.state.internalPicture) {
      return console.log("Please select image");
    }

    const data = new FormData();
    //console.log(this.state.picture)
    data.append("image", this.state.picture);
    data.append("internalPicture", this.state.internalPicture);
    //modify again modified picture (add second line or more)
    //this.state.picture ? data.append('image', this.state.picture) : data.append('image', this.state.convertedPicture.slice(9));
    data.append(
      "text",
      this.state.text === "" ? "Please write your text!" : this.state.text
    );
    data.append("fontSize", this.state.fontSize);
    data.append("fontColor", this.state.fontColor);
    data.append("horizontal_align", this.state.horizontal_align);
    data.append("vertical_align", this.state.vertical_align);
    data.append(
      "xTextMove",
      this.state.xTextMove === "" ? "0" : this.state.xTextMove
    );
    data.append(
      "yTextMove",
      this.state.yTextMove === "" ? "0" : this.state.yTextMove
    );
    console.log(this.state.text);
    axios
      .post(SERVER_ADDRESS + "api/upload/", data, {  
        /* onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100
          });
        }*/
      })
      .then(res => {
        // timeout for local development, pc tooks some time to save img
        //and Cross-Origin Read Blocking (CORB)
        this.timer = setTimeout(() => {
          this.setState({
            convertedPicture: FRONT_SERVER_ADDRESS + res.data.picture
          }); 
          return console.log(res.data);
        }, 2000);
      });
  };

  render() {
    let pictureUrl = null;
    const {
      text,
      picture,
      horizontal_align,
      vertical_align,
      fontSize,
      fontColor,
      xTextMove,
      yTextMove,
      convertedPicture,
      loaded,
      error
    } = this.state;
    
    if (typeof picture === "object" && picture) {
      //leftover for sellect pictures implamentation
      pictureUrl = URL.createObjectURL(picture);
    } else {
      pictureUrl = picture;
    }

    return (
      <Visual
        text={text}
        picture={pictureUrl}
        hendleTextInput={this.hendleTextInput}
        hendlePictureInput={this.hendlePictureInput}
        horizontal_align={horizontal_align}
        vertical_align={vertical_align}
        hendleHorizantalAlign={this.hendleHorizantalAlign}
        hendleVerticalAlign={this.hendleVerticalAlign}
        fontSize={fontSize}
        hendleDropDownClick={this.hendleDropDownClick}
        hendleConvertion={this.hendleConvertion}
        fontColor={fontColor}
        hendleColor={this.hendleColor}
        xTextMove={xTextMove}
        yTextMove={yTextMove}
        hendleXmove={this.hendleXmove}
        hendleYmove={this.hendleYmove}
        convertedPicture={convertedPicture}
        loaded={loaded}
        hendlePictureClick={this.hendlePictureClick}
        error={error}
      />
    );
  }
}

export default Logic;

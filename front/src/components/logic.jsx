import React, { Component } from "react";
import axios from "axios";

import Visual from "./visual/index";

class Logic extends Component {
  constructor(props){
    super(props);
    this.timer = null;
    this._mounted = false;
}
  state = {
    text: "",
    picture: null,
    convertedPicture: null,
    loaded: 0,
    horizontal_align: "center",
    vertical_align: "top",
    fontSize: "16",
    fontColor: "black",
    xTextMove: "",
    yTextMove: ""
  };

  componentDidMount() {
    this._mounted = true;
  };

  componentWillUnmount() {
    this._mounted = false;
    if(this.timer){
      clearTimeout(this.timer);
  }
  };

  hendleTextInput = e => {
    if(this._mounted){
    this.setState({ text: e.target.value });
    }
  };

  hendlePictureInput = e => {
    if (e.target.files[0] && this._mounted) {
      this.setState({ picture: e.target.files[0], convertedPicture: null });
    }
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
    console.log("convertion");
    if (!this.state.picture && !this.state.convertedPicture) {
      return;
    }

    const data = new FormData();
    data.append("image", this.state.picture);
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
      .post("http://localhost:4000/api/upload/", data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100
          });
        }
      })
      .then(res => {
        // timeout for local development, pc tooks some time to save img
        this.timer = setTimeout(()=> {
        this.setState({ convertedPicture: "./images/" + res.data.picture });
        return console.log(res.data);
      }, 200)
      });
    /* axios({
        method: 'post',
        url: 'http://localhost:4000/upload/post',
        data: {
           image: this.state.picture, 
          text: this.state.text
        },
        headers: { 'content-type': 'multipart/form-data' }
      }); */
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
      loaded
    } = this.state;
    if (picture) {
      pictureUrl = URL.createObjectURL(picture);
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
      />
    );
  }
}

export default Logic;

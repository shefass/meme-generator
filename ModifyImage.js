const Jimp = require("jimp");
const uuidv4 = require("uuid/v4");
const path = require("path");
const sizeOf = require("image-size");

class ModifyImage {
  constructor(
    folder,
    text,
    horizontalAlign,
    verticalAlign,
    fontSize,
    fontColor,
    xTextMove,
    yTextMove
  ) {
    this.folder = folder;
    this.text = text;
    this.horizontalAlign = horizontalAlign;
    this.verticalAlign = verticalAlign;
    this.fontSize = fontSize;
    this.fontColor = fontColor;
    this.xTextMove = Number(xTextMove);
    this.yTextMove = Number(yTextMove);
  }
  async save(buffer) {
    const filename = ModifyImage.filename();
    const filepath = this.filepath(filename);
    const dimensions = sizeOf(buffer);
    //console.log(dimensions.width, dimensions.height);
    const horizontalAlign = this.horizantalAlignConvert();
    const verticalAlign = this.verticalAlignConvert();
    const fonts = this.choseFonts();
    await Jimp.read(buffer)
      //.then(image => image.resize(500, Jimp.AUTO))
      .then(image => {
        Jimp.loadFont(fonts).then(font => {
          image
            .print(
              font,
              this.xTextMove, //x
              this.yTextMove, //y
              {
                text: this.text,
                alignmentX: horizontalAlign,
                alignmentY: verticalAlign
              },
              dimensions.width, //picture maxWidth,
              dimensions.height // maxHeight
            )
            .write(filepath);
        });
      });
    return filename;
  }
  static filename() {
    return `${uuidv4()}.png`;
  }
  filepath(filename) {
    return path.resolve(`${this.folder}/${filename}`);
  }
  horizantalAlignConvert() {
    switch (this.horizontalAlign) {
      case "left":
        return Jimp.HORIZONTAL_ALIGN_LEFT;

      case "center":
        return Jimp.HORIZONTAL_ALIGN_CENTER;

      case "right":
        return Jimp.HORIZONTAL_ALIGN_RIGHT;
      default:
        console.log("Bad horizantalAlign");
    }
    return align;
  }
  verticalAlignConvert() {
    switch (this.verticalAlign) {
      case "top":
        return Jimp.VERTICAL_ALIGN_TOP;
      case "middle":
        return Jimp.VERTICAL_ALIGN_MIDDLE;
      case "bottom":
        return Jimp.VERTICAL_ALIGN_BOTTOM;
      default:
        console.log("Bad verticalAlign");
    }
  }
  choseFonts() {
    if (this.fontColor === "black") {
      switch (this.fontSize) {
        case "8":
          return Jimp.FONT_SANS_8_BLACK;
        case "16":
          return Jimp.FONT_SANS_16_BLACK;
        case "32":
          return Jimp.FONT_SANS_32_BLACK;
        case "64":
          return Jimp.FONT_SANS_64_BLACK;
        case "128":
          return Jimp.FONT_SANS_128_BLACK;
        default:
          console.log("Bad black font");
      }
    } else {
      switch (this.fontSize) {
        case "8":
          return Jimp.FONT_SANS_8_WHITE;
        case "16":
          return Jimp.FONT_SANS_16_WHITE;
        case "32":
          return Jimp.FONT_SANS_32_WHITE;
        case "64":
          return Jimp.FONT_SANS_64_WHITE;
        case "128":
          return Jimp.FONT_SANS_128_WHITE;
        default:
          console.log("Bad white font");
      }
    }
  }
}

module.exports = ModifyImage;

const express = require("express");
const router = express.Router();
const upload = require("./uploadMiddleware");
const ModifyImage = require("./ModifyImage");
const path = require("path");

const WHERE_SAVE_CONVERTED_IMAGES = require("./CONFIQ"); //LOCAL TESTING or server

//disable helmet, if this test not works
/*
router.get("/", (req, res) => {
  console.log("Accesed root");
  res.status(200).json({ greetings: "Hello world" });
});
*/

router.post("/upload", upload.single("image"), async function(req, res) {
  if (
    !req.file &&
    req.body.image === "null" &&
    req.body.internalPicture === "null"
  ) {
    return res.status(401).json({ error: "Please provide an image" });
  }
  const imagePath = path.join(__dirname, WHERE_SAVE_CONVERTED_IMAGES);
  const fileUpload = new ModifyImage(
    imagePath,
    req.body.text,
    req.body.horizontal_align,
    req.body.vertical_align,
    req.body.fontSize,
    req.body.fontColor,
    req.body.xTextMove,
    req.body.yTextMove
  );
  console.log(req.body);

  const filename = await fileUpload.save(
    req.file
      ? req.file.buffer
      : req.body.internalPicture
      ? findSelectedImage(req.body.internalPicture)
      : imagePath + req.body.image
  );
  res.status(200).json({ picture: filename }); //returns new pictures filename
});

const findSelectedImage = image => {
  switch (image) {
    case "first":
      return "./images/first.png";
    case "second":
      return "./images/second.png";
    case "third":
      return "./images/third.png";
    default:
      console.log("error in findSelectedImage()");
  }
};
module.exports = router;

//other implamentations
/*
//https://www.npmjs.com/package/multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    }
  });
  
const upload = multer({ storage: storage }).single("file");
*/
/*
router.post('/upload', (req, res) =>{
    console.log("Upload recived...");
    
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
   //return res.status(200).send(req.file)
   
 })
    res.status(200).json({ answer: Date.now() + ' Upload worked'})
});
*/

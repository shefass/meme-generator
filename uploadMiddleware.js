const multer = require("multer");

//Error handling not implamented, so set to 4GB limit
const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024 * 1024
  }
});

module.exports = upload;

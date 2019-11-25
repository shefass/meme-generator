# Meme-generator(beta)
Simple text writer on the image<br>
It is a full-stack program. BackEnd: Node.js(express.js, ...). FrontEnd: React(front folder)<br>
You can try this web app here: http://meme.vaickelionis.com (not working) <br>

Images converted using JIMP library.
https://www.npmjs.com/package/jimp

## To run locally
Install docker<br>
docker run -d -p 3000:3000 -p 4000:4000 shefass/meme-generator <br>
Go to http://localhost:3000/ (frontend), backend accessed using 4000 port<br> 
Other way: <br>
Clone this repo.<br>
<b>npm install</b> <br>
<b>npm start</b><br>

## Todo
Image delete from server. <br>

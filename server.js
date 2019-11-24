const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors')

const app = express();
const port = process.env.PORT || 4000;
const router = require('./router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.use(cors())

//disable helmet, if authorization problems
app.use(helmet());

app.use('/api', router);

app.listen(port, () => {
  console.log('Server is running on PORT', port);
});
const express = require('express');
const app = express();
const cors = require('cors');

const pagesController = require('./src/controllers/pages');

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/pages/home', pagesController.home);
app.get('/pages/education', pagesController.education);
app.get('/pages/experience', pagesController.experience);
app.get('/pages/spoken', pagesController.spoken);

app.listen(3000, () => console.log('Example app listening on port 3000!'));

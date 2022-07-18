const express = require('express')
const app = express()
const port = 80;
const bodyParser = require("body-parser");
const router = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/',(req,res) => {
    const x = req.body;
    console.log(x);
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

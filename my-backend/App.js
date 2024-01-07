const express = require('express');
const fileSystem = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.post('/getemail', (req, res, next,) => {
  const {email} = req.body;
  fileSystem.appendFile('email.txt', email+ '\n', (error) => {
    if (error) {
      res.status(500).send('Email could not be saved :(')
      console.error(error);
    }else {
      res.status(201).send('Email was saved!');
      console.log('Email saved successfully');
    }
  });
  
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
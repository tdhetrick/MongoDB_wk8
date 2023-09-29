const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3030;

app.use(cors());



// app.use('/', express.static('public'));

// app.get('/hello',(req,res) => {
//     res.send('Hello World!?');
// });

app.get('/budget',(req,res) => {
   // res.json(budget);
   res.sendFile(path.join(__dirname, 'budget.json'));
});



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
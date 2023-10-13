const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then(() => {
        console.log('MongoDB Connected');
    }).catch(err => {
        console.error('Error', err);
        console.log(err);
    });

const budgetSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    budget:{
        type: Number,
        required: true,
        unique: false
    },
    color:{
        type: String,
        required: true,
        unique: true,
        match: [/^#[0-9A-Fa-f]{6}$/, 'Invalid HEX color.']
    }

}, { collection: 'budget' }); 

const Budget = mongoose.model('budget', budgetSchema, 'budget');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));



app.use('/', express.static('public'));

app.get('/hello',(req,res) => {
    res.send('Hello World!?');
});

app.get('/budget',async (req,res) => {
    try {
        const data = await Budget.find({});
        res.json(data);
    } catch (err) {
        res.status(500).send('error: ' + err.message);
    }
});

// app.get('/budget',(req,res) => {
//     // res.json(budget);
//     res.sendFile(path.join(__dirname, 'budget.json'));
// });

app.post('/additem', async(req,res) => {
    try {
        console.log(req.body)        
        const newItem = new Budget(req.body); 
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        console.error("Error adding :", err.message);
        res.status(500).send('error');
    }
   
});


app.listen(port, () => {
    console.log(`Server listening on port${port}`);
});
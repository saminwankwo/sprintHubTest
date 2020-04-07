const Joi =require('joi');
const express = require('express');
const router = express.Router();

router.use(express.json());

const testData = [
    { id: 4, name: 'something' },
    { id: 3, name: 'somwfffething' },
    { id: 2, name: 'something' },
    { id: 6, name: 'somet  n  hing' },
    { id: 7, name: 'something'},
]

router.get('/', (req, res, next) => {
    res.send([1, 2, 3, 'gpok', 9, 'sdfffgf', 'comr', '56']);
});

router.get('/:Id', (req, res) => {
    const year = testData.find(c => c.Id === parseInt(req.params.Id))
     if (!year) res.status(404).send('The data is unavaliable ');
    res.send(year);
    // res.send(req.params.Id) 
});

router.put('/:Idd ', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send('name is required and mini');
        return;
    } 
    const testData = {
        id: testData.length + 1,
        name: req.body.name
    }; 
    testData.push(testData);
    res.send(testData);
});

// router.get('/:Id/:percentile', (req, res) => {
//     res.send(req.params);
    
// });

// router.get('/:post/:home', (req, res) => {
//     res.send(req.query);
    
// });

module.exports = router;

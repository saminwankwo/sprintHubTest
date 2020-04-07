const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });

    // req.status(200).json({
    //     message:'handling '
    // });
});

router.post('/', (req, res) => {
    res.status(200).json({
        message: 'Handling post requests to /products'
    });
});

router.get('/:productId', (req, res) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'Handling post requests to /productsghngf'
        }); 
    }
});

module.exports = router;
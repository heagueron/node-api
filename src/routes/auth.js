const router = require('express').Router();


router.post('/register', (req, res) => {
    res.send('Register here ... ');
});

router.post('/', (req, res) => {
    res.send('Home here ... ');
});


module.exports = router;
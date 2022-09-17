var express = require('express');
var router = express.Router();

/* GET Index page. */
router.get('/', (req, res) => {
    res.render('index');
})

router.get('/sala', (req, res) => {
    const roomId = req.query.roomId;
    res.render('room', {roomId})
})

module.exports = router;
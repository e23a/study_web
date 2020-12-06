const express = require('express');
const router = express.Router();
// router.use((req, res, next) => {
//     next();
// });
router.get('/', (req, res) => {
    res.send("a");
});

router.get('/b', (req, res) => {
    res.send("b");
});

module.exports = router;
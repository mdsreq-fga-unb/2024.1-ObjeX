const express = require('express');
const router = express();

router.get('/', (req, res) => {
    res.send('RECEBA');
});
router.get('/test', (req, res) => {
    res.send('Teste');
})

module.exports = router;
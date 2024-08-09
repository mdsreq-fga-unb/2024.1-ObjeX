const express = require('express');
const router = express();


router.get('/', (req, res) => {
    res.send('Rota de professores');
});


module.exports = router;
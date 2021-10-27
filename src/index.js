const express = require('express');
const queue = require("./queue");

const app = express();         
 
app.use(express.json());
 
const router = express.Router();
 
router.post('/task', (req, res) => {
    queue.sendToQueue("fila1", req.body);
    res.json({ message: 'Your request will be processed!', body: req.body });
});
 
app.use('/', router);
 
app.listen(3000, () => console.log('app started'));

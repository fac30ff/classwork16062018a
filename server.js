let express = require('express');
let app = express();

const data = require("./data/fakeData");

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname));

app.get('/api/ping', (req, res) => {
   res.json({
       "ping": new Date().toISOString(),
       "param": req.query.id
   });
});

app.get('/api/data', (req, res) => {
    res.json(data);
});

app.listen(app.get('port'), () => {
    console.log('Server started: http://localhost:' + app.get('port') + '/')
});
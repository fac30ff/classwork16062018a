let express = require('express');
let app = express();

const data = require("./data/fakeData");
const version = require("./package");

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname));

app.get('/api/version', (req, res) => {
    res.json({
        "version": version.version,
        "author": version.author
    });
});

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
let express = require('express');
let app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname));

app.get('/api/ping', (req, res) => {
   res.json({
       "ping": new Date().toISOString()
   });
});

app.listen(app.get('port'), () => {
    console.log('Server started: http://localhost:' + app.get('port') + '/')
});
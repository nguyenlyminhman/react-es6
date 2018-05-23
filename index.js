const express = require('express');
const app = express();
const config = require('config');


app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
    res.render('index');
});

let port = config.get('server.port')
app.listen(port, () => {
    console.log('Example app listening on port', port);
});

//Run app, then load http://localhost:port in a browser to see the output.
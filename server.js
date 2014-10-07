var express         = require('express'),
    https           = require('https'),
    http            = require('http'),
    hbs             = require('hbs'),
    path            = require('path'),
    fs              = require('fs'),
    util            = require('util'),
    request         = require('request'),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser')
    favicon         = require('serve-favicon');
    router          = express.Router();
    serveStatic     = require('serve-static')
    env             = process.env.NODE_ENV || 'development';
    app             = express();



    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/server/templates');
    app.set('view engine', 'html');
    app.engine('html', require('hbs').__express);
    app.use(serveStatic(__dirname + '/public', {'index': ['index.html', 'index.htm']}));
    app.use(bodyParser.json());
    app.use(cookieParser('H3R0'));


app.route('/').all().get(function (req, res) {
        res.render('index');
});

app.route('/page').get(function (req, res) {
    res.render('page')
});


//start server
app.listen(app.get('port'), function(){
    console.log("Simple app server listening on port " + app.get('port'));
});







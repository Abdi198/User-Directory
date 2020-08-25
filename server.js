var express = require ("express");
var Port = process.env.PORT || 3009
var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.listen(Port, function() {
    console.log("app is listening!" + Port)
});
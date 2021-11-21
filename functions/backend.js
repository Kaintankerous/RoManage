const express = require('express');

const app = express();

app.get('/login&name=:user&pass=:pass', (req, res) => res.send(
    
    var user = Widgets.getById(req.params.user);
    var pass = Widgets.getById(req.params.pass);

    ));
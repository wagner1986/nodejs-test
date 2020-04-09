const functions = require('firebase-functions');

const express= require("express");
const app=express();

app.get("/time",(request, response) => {
    response.send(`Epoca atual ${Date.now()}`);
});

app.get("/time-cahe",(request, response) => {
    response.send('Cache-Control', 'public, max-age=300, s-maxage=600');
    response.send(`Epoca atual ${Date.now()}`);
});

 exports.helloWorld = functions.https.onRequest(app);

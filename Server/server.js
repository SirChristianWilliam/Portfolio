const express = require('express');
 
const bodyParser = require('body-parser');

console.log('in server.js! 👹');
const app = express();
//Make files in the server/pulic folder available to any who wants them. 
app.use(express.static('./server/public'));
app.listen(3000, () => {
    console.log("We are live! :ls 😮");
});
app.use(bodyParser.urlencoded({ extended: true }));





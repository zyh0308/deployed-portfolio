'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));



//routes are the address/locations/endpoints that respond to a request 


//visiting the route causes the callback funtion to be invoked



app.get('/melokisses',function(request, response){
    console.log('someone wants a melo kisses');
    response.send('here a kiss');
    Response.send({
        kiss:'here is a kiss',
        from:'melo'
    });
});





app.listen(3000,function(){
    console.log('good job Yihang');

});

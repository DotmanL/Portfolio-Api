const express = require ('express');
//const cors = require('cors');
const app = express();

if (process.env.NODE_ENV !== 'production') require ('dotenv').config();




const port = process.env.PORT || 5000;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());

app.use('/mailMe', require('./mailMe'))



app.listen(port, error => {
    if(error) throw error;
    console.log('Server is running on port ' + port);
});




const express = require('express');
const morgan = require('morgan');
const multer =require('multer');
const path = require('path');
//inicializaciones
const app = express();
require('./database');
//settings
app.set('port',4000);
//middleware
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'docs'),
    filename(req,file,cb){
        cb(null,new Date().getTime() + path.extname(file.originalname));
    }

})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());



//static files
app.use(express.static(path.join(__dirname, 'docs')));

//inicar servidor
app.listen(app.get('port'),() => {
    console.log('server on port', app.get('port'));

})




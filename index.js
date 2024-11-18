const express = require('express'); 
const { Sequelize } = require('sequelize'); 
const jwt = require("jsonwebtoken");

const User = require('./models/user').User; 
const File = require('./models/file'); 

const app = express(); 
const sequelize = new Sequelize('sqlite::memory:'); // Or change to a file-based SQLite or other databases 
app.use(express.json()); 

sequelize.sync() 
    .then(() => { 
        console.log('Database & tables created!'); 
    })
    .catch((error) => { 
        console.error('Error syncing the database:', error); 
    });

app.listen(3000, () => { 
    console.log('Server is running on port 3000'); 
}); 
module.exports = app;
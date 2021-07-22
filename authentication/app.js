const express = require('express');

/**
 * -------------- GENERAL SETUP ----------------
*/
// Create the Express application
const app = express();

// Configures the database and opens a global connection that can be used in any module
sequelize = require('./config/database');

// Must first load the models
require('./models/User');

// Instead of using body-parser middleware, use the new Express implementation of the same thing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js
app.use(require('./routes'));

/**
 * -------------- SERVER ----------------
 */

// Server listens on http://localhost:3000
app.listen(5000);
const express = require('express');
const consign = require('consign');

const app = express();

consign()
    .include('models')
    .then('middlewares.js')
    .then('routes')
    .then('boot.js')
    .into(app);
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/upgrade_class_3';
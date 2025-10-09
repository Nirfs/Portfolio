const express = require("express")
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

const authRoutes = require('./routes/auth')
const worksRoutes = require('./routes/works')

const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
    .then(() => console.log('✅ Connecté à MongoDB'))
    .catch(err => console.error('❌ Erreur de connexion MongoDB:', err));

app.use(cors())
app.use(express.json())
app.use('/images', express.static('images'))

app.use('/api/auth', authRoutes)
app.use('/api/work', worksRoutes)
module.exports = app
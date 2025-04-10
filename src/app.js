const express = require('express');
const app = express();
const cors = require('cors');
const pacienteRoutes = require('./routes/pacienteRoutes');
const authRoutes = require('./routes/authRoutes');
const prontuarioRoutes = require('./routes/prontuarioRoutes');

// allow all origins

const corsOptions = {
    origin: '*',
    methods: "GET, POST, PUT, DELETE"
}

app.use(express.json({ limit: '10mb' })); 
app.use(cors(corsOptions));

app.use('/api/pacientes', pacienteRoutes);
app.use('/api/auth', authRoutes); 
app.use('/api/prontuario', prontuarioRoutes);

module.exports = app;

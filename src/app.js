const express = require('express');
const app = express();
const cors = require('cors');
const pacienteRoutes = require('./routes/pacienteRoutes');
const authRoutes = require('./routes/authRoutes');
const prontuarioRoutes = require('./routes/prontuarioRoutes');

app.use(express.json()); 
app.use(cors());

app.use('/api/pacientes', pacienteRoutes);
app.use('/api/auth', authRoutes); 
app.use('/api/prontuario', prontuarioRoutes);

module.exports = app;

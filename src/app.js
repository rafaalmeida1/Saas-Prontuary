const express = require('express');
const app = express();
const cors = require('cors');
const pacienteRoutes = require('./routes/pacienteRoutes');
const authRoutes = require('./routes/authRoutes');
const prontuarioRoutes = require('./routes/prontuarioRoutes');

// Configuração básica do CORS
app.use(cors({
    origin: true, // Permite todas as origens
    credentials: true, // Permite credenciais
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
}));

app.use(express.json({ limit: '10mb' })); 

app.use('/api/pacientes', pacienteRoutes);
app.use('/api/auth', authRoutes); 
app.use('/api/prontuario', prontuarioRoutes);

module.exports = app;

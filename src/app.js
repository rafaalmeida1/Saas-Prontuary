const express = require('express');
const app = express();
const cors = require('cors');
const pacienteRoutes = require('./routes/pacienteRoutes');
const authRoutes = require('./routes/authRoutes');
const prontuarioRoutes = require('./routes/prontuarioRoutes');

const corsOptions = {
    origin: process.env.FRONTEND_URL || 'https://prontuario-acompanhamento.vercel.app/', // Substitua pela URL do seu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(express.json({ limit: '10mb' })); 
app.use(cors(corsOptions));

app.use('/api/pacientes', pacienteRoutes);
app.use('/api/auth', authRoutes); 
app.use('/api/prontuario', prontuarioRoutes);

module.exports = app;

const express = require('express');
const clientRoutes = require('./src/routes/ClientRoute');

const app = express();

app.use(express.json());

app.use('/clients', clientRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
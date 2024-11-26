const { readClients, writeClients } = require('../utils/fileHandler.js');
const Client = require ('../models/Client')

const addClient = async (req, res) => {
    try {
        const newClient = new Client(req.body);
        const clients = await readClients();

        if (clients.some((client) => client.id === newClient.id)){
            return res.status(500).json({
                message: 'Already exist client with equals Id'
            })
        }
        clients.push(newClient);
        await writeClients(clients);
        res.status(201).json({ message: 'Sucessfully client save.', client: newClient });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'An error occurred while adding the client.' });
    }
};

const getClientsSoretedByName = async (req, res) => {
    const clients = await readClients();
    const sortedClients = [...clients].sort((client1,client2) => client1.name.localeCompare(client2.name));
    res.json(sortedClients);
}

const getClientsByAge = async (req, res) => {
    const clients = await readClients();

    const sortedByAge = clients.map((client) => {
        const age = calculateAge(client.birthday);
        return { name: client.name, age };
    }).sort((a, b) => a.age - b.age);

    res.json(sortedByAge);
}

const getClientsAverage = async (req, res) => {
    const clients = await readClients();

    const totalClients = clients.length;
    const totalAge = clients.reduce((sum, client) => sum + calculateAge(client.birthday), 0);
    const averageAge = totalClients ? totalAge / totalClients : 0;

    res.json({ totalClients, averageAge });
};

const calculateAge = (birthday) => {
    const birthDate = new Date(birthday);
    const currentDate = new Date();
    
    const miliseconds = currentDate - birthDate;
    const ageInYears = miliseconds / (1000 * 60 * 60 * 24 * 365.25);
    
    return Math.floor(ageInYears); 
}

module.exports = {
    addClient,
    getClientsSoretedByName,
    getClientsByAge,
    getClientsAverage
}
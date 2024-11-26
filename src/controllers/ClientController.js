import { readClients, writeClients } from '../utils/fileHandler.js'
import { Client } from '../models/Client.js'

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
        res.status(201).json({ message: error.message, client: newClient });
    }
};

const getClientsSoretedByName = async (req, res) => {
    const clients = await readClients();
    const sortedClients = [...clients].sort((client1,client2) => client1.name.localCompare(client2.name));
    res.json(sortedClients);
}
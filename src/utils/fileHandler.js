import fs from 'fs'

const CLIENTS_FILE = './Clients.json'

const readClients = async () => {
    try {
        const data = await fs.readFile(CLIENTS_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error read file ${error.message}`);
        return[];
    }
};

const writeClients = async (clients) => {
    try {
        await fs.writeFile(CLIENTS_FILE, JSON.stringify(clients));
    } catch (error) {
        console.error(`Error write file ${error.message}`);
    }
}

module.exports = {
    readClients,
    writeClients,
}


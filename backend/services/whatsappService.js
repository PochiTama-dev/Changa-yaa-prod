import qrcode from 'qrcode-terminal';
import pkgWhatsapp from 'whatsapp-web.js';

const { Client, LocalAuth } = pkgWhatsapp;

const client = new Client({
    authStrategy: new LocalAuth({
        dataPath: 'sessionWhatsApp'
    }),
    webVersionCache: {
        type: "remote",
        remotePath: "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
    },
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

export const sendMessage = async (numeroDestino, mensaje) => {
    const chatId = `${numeroDestino}@c.us`;
    return await client.sendMessage(chatId, mensaje);
};

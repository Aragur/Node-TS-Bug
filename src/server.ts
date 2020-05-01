import { TeamSpeakClient } from 'node-ts';

const env = process.env;

async function bootstrap(): Promise<void> {
    const client = new TeamSpeakClient(env.TEAMSPEAK_HOST);

    try {
        await client.connect();
        await client.send('use', { sid: 1 });
        await client.send('login', {
            client_login_name: env.TEAMSPEAK_QUERY_NAME,
            client_login_password: env.TEAMSPEAK_QUERY_PASS,
        });
    } catch (err) {
        console.error('Error initializing TeamSpeak Server connection', err, 'TeamspeakService');
    }
}

bootstrap();
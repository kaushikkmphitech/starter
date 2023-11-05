import 'dotenv/config';
import messages from './messages.js';

const config = {
    app: {
        appName: process.env.APP_NAME,
        port: process.env.PORT || 3000,
        appURL: process.env.APP_URL
    },
    db: {
        mongoURL: process.env.MONGODB_URL
    },
    auth: {
        jwtSecret: 'someSuperSecretSecret',
        jwtExpiresIn: '1d',
        bcryptSaltLength: 10
    },
    messages
}

export default config;
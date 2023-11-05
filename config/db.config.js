import mongoose from 'mongoose';
import config from './app.config.js';

export default () => {
    mongoose.connect(config.db.mongoURL)
        .then(() => {
            console.log('Database Connected!');
        })
        .catch(async error => {
            console.log('MONGODB ERROR: ', error.message);
        });
}
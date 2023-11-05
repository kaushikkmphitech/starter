import express from 'express';
import routes from './routes/index.js';
import config from './config/app.config.js';
import mongooseConnect from './config/db.config.js';
import errorHandler from './utils/errorHandler.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

app.listen(config.app.port, () => {
    console.log('Server is running on:', config.app.port);
});

mongooseConnect()

app.use('/api', routes);

errorHandler(app);
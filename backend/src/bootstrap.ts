import http from 'http';
import * as graphqlServerFactory from './api/graphqlServerFactory';
import {App} from './api/App';

const normalizePort = (val: string) => {
	const port = parseInt(val, 10);
	if (isNaN(port)) {
		return val;
	}
	if (port >= 0) {
		return port;
	}
	return false;
};

const graphqlServer = graphqlServerFactory.create();

const app = new App(graphqlServer);
const port = normalizePort(process.env.PORT || '3000');

app.expressApp.set('port', port);

const server = http.createServer(app.expressApp);
server.listen(port);
console.log("Server listening on port " + port);

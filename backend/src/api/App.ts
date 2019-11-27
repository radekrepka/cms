import express, {Request, Response} from 'express';
import http from "http";
import {ApolloServer} from 'apollo-server-express';

export class App {
	public expressApp: express.Application;
	public readonly httpServer: http.Server;
	readonly graphqlServer: ApolloServer;

	constructor(graphqlServer: ApolloServer) {
		this.expressApp = express();
		this.httpServer = http.createServer(this.expressApp);
		this.graphqlServer = graphqlServer;
		this.config().then();
		this.routes();
	}

	public async config(): Promise<void> {
		this.expressApp.use((req: Request, res: Response, next) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header(
				'Access-Control-Allow-Methods',
				'GET, POST, PUT, DELETE, OPTIONS',
			);
			res.header(
				'Access-Control-Allow-Headers',
				'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials',
			);
			res.header('Access-Control-Allow-Credentials', 'true');

			next();
		});

		this.graphqlServer.installSubscriptionHandlers(this.httpServer);

		this.graphqlServer.applyMiddleware({
			app: this.expressApp,
			path: '/graphql',
		});
	}

	public routes(): void {
		const router: express.Router = express.Router();

		this.expressApp.use('/', router);
		this.expressApp.get('/health-check', (req: Request, res: Response) => {
			res.send('I\'m alive.');
		});
	}
}


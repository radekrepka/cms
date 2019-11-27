import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
// @ts-ignore
import ScrollToTop from 'react-router-scroll-top';
import 'bootstrap/dist/css/bootstrap.css';
import client from './graphql/client';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './App.css'
import routes, {RouteItem} from './routes';
import Loader from './components/Loader';

export const App: React.FC = () => {
	return (
		<Router>
			<ScrollToTop>
				<Menu/>
				<div className="content-wrapper main-wrap">
					<div id="main" className="container">
						<React.Suspense fallback={<Loader />}>
							<ApolloProvider client={client}>
								<Switch>
									{routes.map((route: RouteItem) => (
										<Route key={route.path} {...route} />
									))}
								</Switch>
							</ApolloProvider>
						</React.Suspense>
					</div>
				</div>
				<Footer/>
			</ScrollToTop>
		</Router>
	);
};

export default App;

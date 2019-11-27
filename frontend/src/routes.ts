import React from 'react';

export const HOME = '/';
export const ARTICLE = '/article/:id';
export const SECTION = '/section/:sectionUrl';
export const NOT_FOUND = '*';

const Home = React.lazy(() => import('./pages/Home'));
const Article = React.lazy(() => import('./pages/Article'));
const Section = React.lazy(() => import('./pages/Section'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

export interface RouteItem {
	path: string;
	name?: string;
	exact: boolean;
	component?: React.LazyExoticComponent<any>;
}

const routes: RouteItem[] = [
	{ path: HOME, name: "Homepage", exact: true, component: Home },
	{ path: ARTICLE, name: "Article", exact: true, component: Article },
	{ path: SECTION, name: "Section", exact: true, component: Section },
	{ path: NOT_FOUND, name: "NotFound", exact: true, component: NotFound },
];

export default routes;

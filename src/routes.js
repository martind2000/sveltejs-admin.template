import Home from './pages/Home.svelte';


import NotFound from './pages/NotFound.svelte';

const routes = new Map();
routes.set('/', Home);

routes.set('*', NotFound);

export default routes;

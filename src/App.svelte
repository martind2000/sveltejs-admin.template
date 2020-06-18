<script>
  import Router from 'svelte-spa-router';
  import routes from './routes'

  let currentPage;

  function conditionsFailed(event) {
    // eslint-disable-next-line no-console
    console.error('Caught event conditionsFailed', event.detail)
  }

  // Handles the "routeLoaded" event dispatched by the router after a route has been successfully loaded
  function routeLoaded(event) {
    // eslint-disable-next-line no-console
    console.info('Caught event routeLoaded', event.detail)
    currentPage = event.detail;
    console.log('currentPage', currentPage);
  }

  // Handles event bubbling up from nested routes
  function routeEvent(event) {
    // eslint-disable-next-line no-console
    console.info('Caught event routeEvent', event.detail)
  }
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<Router {routes} on:conditionsFailed={conditionsFailed} on:routeLoaded={routeLoaded} on:routeEvent={routeEvent} />

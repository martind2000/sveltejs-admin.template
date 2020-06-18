<script>
  import Router from 'svelte-spa-router'
  import routes from './routes';
  import Header from "./components/Header.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";

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


<div class="admin">
  <Header/>
  <Navbar/>
  <main class="admin__main">
    <Router {routes} on:conditionsFailed={conditionsFailed} on:routeLoaded={routeLoaded} on:routeEvent={routeEvent}/>
  </main>
  <Footer/>
</div>


<style lang="scss" global>
  @import "./css/admin.scss";
</style>

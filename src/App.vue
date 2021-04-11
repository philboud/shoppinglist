<template>
  <div id="app">
    <div>
  <b-navbar type="dark" variant="dark" fixed="top">
    <b-navbar-nav>
      <b-nav-item href="#/">Accueil</b-nav-item>
      <b-nav-item href="#/gestionliste">Gestion de liste</b-nav-item>
      <b-nav-item href="#">help</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
  </div>
     <div class="entete">
      <h1 class="accueilEntete">Shopping list</h1>
       </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: []
    }
  },
  mounted () {
    if (localStorage.getItem('selected') === null) {
      localStorage.setItem('selected', JSON.stringify(this.selected))
    }
  }
}
</script>
<style>
.accueilEntete {
  background-color: aquamarine;
  text-align: center;
}
.buttSave{
  margin: 0 auto;
  text-align: center;
  width: 200px;
}
.subtitle{
  margin: 0 auto;
  text-align: center;
  width: 200px;
  background-color: rgb(92, 213, 243);
  margin-bottom: 50px;
}
</style>

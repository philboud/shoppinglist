<template>
  <div id="app">
    <div>
  <b-navbar type="dark" variant="dark" fixed="top">
    <b-navbar-nav>
      <b-nav-item href="#/">Accueil</b-nav-item>
      <b-nav-item href="#/gestionliste">Gestion de liste</b-nav-item>
      <b-nav-item href="#/help">help</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
  </div>
     <div class="entete">
      <h3 class="accueilEntete">Shopping list</h3>
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
.articles{
  margin-bottom: 10px;
  margin-left: 20px;
  font-size: 2em;
}
.selectInList{
  margin: 0 auto;
  width: 275px;
}
.nav-link{
    color: #e7ade9 !important;
    font-weight: bold;
}
.bg-dark{
  background-color: rgb(36, 129, 235) !important;
}
.accueilEntete {
  margin: 0 auto;
  width: 250px;
  margin-top: 70px;
  background-color: aquamarine;
  text-align: center;
  margin-bottom: 10px;
}
.buttSave{
  margin: 0 auto;
  text-align: center;
  width: 200px;
  margin-bottom: 10px;
}
.subtitle{
  margin: 0 auto;
  text-align: center;
  width: 250px;
  background-color: rgb(92, 213, 243);
  margin-bottom: 10px;
}
.selectSize{
  width: 250px;
}
.tabList{
  margin: 0 auto;
  width: 400px;
}
</style>

<template>
  <div>
    <div class="entete">
      <h1 class="accueil">Shopping list</h1>
      <p class="layus">petite app pour creer votre liste de courses</p>
    </div>
    <div class="corpus">
      <div class="create">
        <b-button class="butt" variant="primary">Creer une liste</b-button>
      </div>
      <div class="look">
        <b-button class="butt" variant="primary">Voir la liste</b-button>
      </div>
      <div class="supp">
        <b-button class="butt" variant="primary">supprimer la liste</b-button>
      </div>
        <div>
         <b-img :src="require('../assets/panier.png')" class="panierimg"></b-img>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Accueil'
}
</script>
<style>
.accueil {
  background-color: aquamarine;
  text-align: center;
}
.layus {
  margin-top: 20px;
  text-align: center;
}
.corpus{
  margin-top: 50px;
    text-align: center;
}
.butt {
  min-width: 150px;
  margin-left: 10px;
  margin-top: 20px;
}
.panierimg{
  margin-top: 100px;
  max-width: 100%;
  max-height: 100%;

}
</style>

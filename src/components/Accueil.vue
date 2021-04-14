<template>
  <div class="entete">
    <p class="layus">petite app pour créer votre liste de courses</p>
        <div class="goMag">
          <b-button class="butt" @click="goToApp()" variant="primary">Entrer dans le pense-bête</b-button>
        </div>
      <div>
        <b-img :src="require('../assets/panier.png')" class="panierimg"></b-img>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Accueil',
  data () {
    return {
      selected: [],
      freeList: []
    }
  },
  mounted () {
    if (localStorage.getItem('selected') === null) {
      localStorage.setItem('selected', JSON.stringify(this.selected))
    }
    if (localStorage.getItem('freeList') === null) {
      localStorage.setItem('freeList', JSON.stringify(this.freeList))
    }
  },
  methods: {
    goToApp () {
      this.$router.push({path: '/listecreat'})
    }
  }
}

</script>
<style>
.layus {
  margin-top: 30px;
  margin-bottom: 50px;
  text-align: center;
}
.image{
  text-align: center;
}
.panierimg{
  margin: 0 auto;
  margin-top: 100px;
  max-width: 100%;
  max-height: 100%;
  display: block;
}
.goMag{
  margin: 0 auto;
  width: 200px;
}
</style>

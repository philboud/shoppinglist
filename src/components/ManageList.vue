<template>
  <div>
    <div class="corpus">
              <div class="subtitle">
          <p>Choisis ton type de liste</p>
        </div>
      <div class="create">
        <div id="container">
          <div class="item">
            <p>Par catégorie</p>
            <b-img :src="require('../assets/cat.jpg')" fluid alt="liste"  @click="gotoListCrea()"></b-img>
         </div>
         <div class="item">
           <p>Liste libre</p>
           <b-img :src="require('../assets/liste.jpg')" fluid alt="liste" @click="gotoFreeList()"></b-img>
        </div>
        <div class="item">
          <p>Liste rapide</p>
          <b-img :src="require('../assets/roadrunner.jpg')" fluid alt="liste" @click="gotoFastList()"></b-img>
        </div>
      </div>
      </div >
      <div class="look">
        <b-button class="butt" @click="goToList()" variant="primary">Voir la liste</b-button>
      </div>
      <div class="supp">
        <b-button class="butt" @click="suppList()" variant="primary">supprimer la liste</b-button>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ManageList',
  methods: {
    gotoListCrea () {
      this.$router.push({ name: 'ListeCreat' })
    },
    goToList () {
      this.$router.push({name: 'Liste'})
    },
    gotoFreeList () {
      this.$router.push({name: 'FreeList'})
    },
    gotoFastList () {
      this.$router.push({name: 'EssentielList'})
    },
    suppList () {
      localStorage.removeItem('freeList')
      localStorage.removeItem('selected')
      this.$router.push({name: 'Accueil'})
    }
  }
}

</script>
<style>
.layus {
  margin-top: 20px;
  text-align: center;
}
#container{
  margin: 0 auto;
  width: 400px;
  display: flex;
}
.item {
  background-color: rgb(236, 174, 223);
  margin-left: 9px;
  order: 5; /* default is 0 */
}
.corpus{
  margin-top: 20px;
  text-align: center;
}
.butt {
  min-width: 150px;
  margin-left: 10px;
  margin-top: 20px;
}
</style>

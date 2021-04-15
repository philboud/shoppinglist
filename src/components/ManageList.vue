<template>
  <div>
    <div class="corpus">
      <div class="create">
        <b-button class="butt" @click="gotoListCrea()" variant="primary">Creer la liste</b-button>
      </div>
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
.corpus{
  margin-top: 50px;
    text-align: center;
}
.butt {
  min-width: 150px;
  margin-left: 10px;
  margin-top: 20px;
}
</style>

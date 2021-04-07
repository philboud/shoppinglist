<template>
  <div>
    <div class="corpus">
      <div class="create">
        <b-button class="butt" @click="gotoListCrea()" variant="primary">Creer une liste</b-button>
      </div>
      <div class="look">
        <b-button class="butt" variant="primary">Voir la liste</b-button>
      </div>
      <div class="supp">
        <b-button class="butt" variant="primary">supprimer la liste</b-button>
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

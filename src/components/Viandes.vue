<template>
<div>
  <div class="subtitle">
    <h4>Rayon boucherie</h4>
    </div>
      <div class="articles">
 <div>
    <b-form-select v-model="selected" :options="options" @change="addTolist"></b-form-select>
  </div>
    </div>
    <div class="buttSave">
    <b-button variant="success" @click="goToCat()">Enregistrer</b-button>
      <div>
    <b-table striped hover :items="listeEnCours"></b-table>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: '*Viandes',
  data () {
    return {
      qty: '',
      selected: [],
      listeEnCours: [],
      options: [
        {id: 0, text: 'Boeuf', value: 'Boeuf', qty: ''},
        {id: 1, text: 'Agneau', value: 'Agneau', qty: ''},
        {id: 2, text: 'Mouton', value: 'Mouton', qty: ''},
        {id: 3, text: 'Porc', value: 'Porc', qty: ''},
        {id: 4, text: 'Poulet', value: 'Poulet', qty: ''},
        {id: 5, text: 'canard', value: 'canard', qty: ''},
        {id: 6, text: 'Saucisses', value: 'Saucisses', qty: ''},
        {id: 7, text: 'Rillettes', value: 'Rillettes', qty: ''}
      ]
    }
  },
  mounted () {
    this.listeEnCours = JSON.parse(localStorage.getItem('selected'))
  },
  methods: {
    goToCat () {
      localStorage.setItem('selected', JSON.stringify(this.listeEnCours))
      this.$router.push({name: 'ListeCreat'})
    },
    addTolist (item) {
      this.listeEnCours.push({produit: this.selected})
      console.log(this.listeEnCours)
    }
  }
}
</script>

<style>
.articles{
  margin-left: 20px;
  font-size: 2em;
}
</style>

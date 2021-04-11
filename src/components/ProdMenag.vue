<template>
<div>
  <div class="subtitle">
    <h4>Produit maison entretien</h4>
    </div>
    <div class="articles">
      <label><p>Produits courants</p></label>
       <div class="selectProd">
      <b-form-select placeholder="Produits courants" v-model="selected" :options="options" @change="addTolist"></b-form-select>
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
  name: 'ProdMenag',
  data () {
    return {
      qty: '',
      selected: [],
      listeEnCours: [],
      options: [
        {id: 0, text: 'Javel', value: 'Javel', qty: ''},
        {id: 1, text: 'Produit vitres', value: 'Produit vitres', qty: ''},
        {id: 2, text: 'lessive', value: 'lessive', qty: ''},
        {id: 3, text: 'Pastilles lave-vaisselle', value: 'Pastilles lave-vaisselle', qty: ''},
        {id: 4, text: 'Detergent', value: 'Detergent', qty: ''},
        {id: 5, text: 'lingettes', value: 'lingettes', qty: ''},
        {id: 6, text: 'PQ', value: 'PQ', qty: ''},
        {id: 7, text: 'Sopalain', value: 'Sopalain', qty: ''}
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
.selectProd{
  width: 200px;
}
.articles{
  margin-left: 20px;
  font-size: 2em;
}
</style>

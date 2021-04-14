<template>
<div>
  <div class="subtitle">
    <h4>Produit maison entretien</h4>
    </div>
    <div class="articles">
 <div>
    <b-form-select class="selectSize" v-model="selected" :options="options" @change="addTolist"></b-form-select>
  </div>
  <div>
    <b-modal ref="my-modal" hide-footer title="Combien en voulez vous?" centered>
      <div class="d-block text-center">
         <b-form-select v-model="qtys" :options="unites"></b-form-select>
         <b-input v-model="qty" placeholder="Ou ecris ce que tu veux!"></b-input>
      </div>
      <b-button class="mt-3" variant="success" block @click="hideModal">Validez!</b-button>
        </b-modal>
    </div>
    </div>
    <div class="buttSave">
    <b-button variant="success" @click="goToCat()">Enregistre et retourne aux catégories</b-button>
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
      qtys: null,
      qty: '',
      selected: null,
      listeEnCours: [],
      options: [
        {value: null, text: 'Selectionne ton produit'},
        {text: 'Javel', value: 'Javel'},
        {text: 'Produit vitres', value: 'Produit vitres'},
        {text: 'lessive', value: 'lessive'},
        {text: 'Pastilles lave-vaisselle', value: 'Pastilles lave-vaisselle'},
        {text: 'Detergent', value: 'Detergent'},
        {text: 'lingettes', value: 'lingettes'},
        {text: 'PQ', value: 'PQ'},
        {text: 'Sopalain', value: 'Sopalain'}
      ],
      unites: [{value: null, text: 'Combien en veux-tu?'}, '1', '1 litre', '1 kg', '2', '2 litre', '2 kg', '3', '3 litre', '3 kg', '4', '4 litre', '4 kg']
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
    addTolist () {
      if (this.qty === '') {
        this.showModal()
      }
    },
    showModal () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      if (this.qtys !== null) {
        this.qty = this.qtys
      }
      if (this.qty !== '') {
        this.listeEnCours.push({produit: this.selected, qty: this.qty})
        this.qty = ''
        this.qtys = null
        this.selected = null
      }
      this.$refs['my-modal'].hide()
    }
  }
}
</script>

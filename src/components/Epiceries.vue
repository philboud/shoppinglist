<template>
  <div>
    <div class="subtitle">
      <h4>Epicerie</h4>
    </div>
    <div class="articles">
 <div>
    <b-form-select class="selectSize" v-model="selected" :options="options" @change="addTolist"></b-form-select>
  </div>
  <div>
    <b-modal ref="my-modal" hide-footer title="Combien en voulez vous?" centered>
      <div class="d-block text-center">
        <label>Choisis dans la liste!</label>
         <b-form-select v-model="qtys" :options="unites"></b-form-select>
         <label>Ou ecris ce que tu veux!</label>
         <b-input v-model="qty"></b-input>
      </div>
      <b-button class="mt-3" variant="success" block @click="hideModal">Validez!</b-button>
        </b-modal>
    </div>
    </div>
    <div class="buttSave">
    <b-button variant="success" @click="goToCat()">Enregistrer</b-button>
      <div class="tabList">
    <b-table striped hover :items="listeEnCours"></b-table>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Epicerie',
  data () {
    return {
      qtys: [],
      qty: '',
      selected: [],
      listeEnCours: [],
      options: [
        {id: 0, text: 'lait (pack)', value: 'lait (pack)', qty: ''},
        {id: 1, text: 'eau (pack)', value: 'eau (pack)', qty: ''},
        {id: 2, text: 'farine', value: 'farine', qty: ''},
        {id: 3, text: 'beurre', value: 'beurre', qty: ''},
        {id: 4, text: 'oeufs', value: 'oeufs', qty: ''},
        {id: 5, text: 'sel', value: 'sel', qty: ''},
        {id: 6, text: 'poivre', value: 'poivre', qty: ''},
        {id: 7, text: 'pates', value: 'pates', qty: ''}
      ],
      unites: ['1', '1 litre', '1 kg', '2', '2 litre', '2 kg', '3', '3 litre', '3 kg', '4', '4 litre', '4 kg']
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
      console.log('qtys', this.qtys)
      if (this.qtys.length !== 0) {
        this.qty = this.qtys
      }
      if (this.qty !== '') {
        this.listeEnCours.push({produit: this.selected, qty: this.qty})
        this.qty = ''
        this.qtys = []
        this.selected = []
      }
      this.$refs['my-modal'].hide()
    }
  }
}
</script>

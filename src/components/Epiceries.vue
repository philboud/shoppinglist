<template>
  <div>
    <div class="subtitle">
      <h4>Epicerie</h4>
    </div>
    <div class="articles">
 <div>
    <b-form-select v-model="selected" :options="options" @change="addTolist"></b-form-select>
  </div>
  <div>
    <b-modal ref="my-modal" hide-footer title="Combien en voulez vous?" centered>
      <div class="d-block text-center">
         <b-form-select v-model="qtys" :options="unites"></b-form-select>
      </div>
      <b-button class="mt-3" variant="success" block @click="hideModal">Validez!</b-button>
        </b-modal>
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
      unites: [
        {text: '1', value: '1'},
        {text: '1 kg', value: '1 kg'},
        {text: '1 litre', value: '1 litre'},
        {text: '2', value: '2'},
        {text: '2 kg', value: '2 kg'},
        {text: '2 litre', value: '2 litre'},
        {text: '3', value: '3'},
        {text: '3 kg', value: '3 kg'},
        {text: '3 litre', value: '3 litre'},
        {text: '4', value: '4'},
        {text: '4 kg', value: '4 kg'},
        {text: '4 litre', value: '4 litre'},
        {text: '5', value: '5'},
        {text: '5 kg', value: '5 kg'},
        {text: '5 litre', value: '5 litre'}
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
      this.qty = this.qtys
      if (this.qty !== '') {
        this.listeEnCours.push({produit: this.selected, qty: this.qty})
        this.qty = ''
        this.qtys = []
        this.selected = []
        console.log(this.listeEnCours)
      }
      this.$refs['my-modal'].hide()
    }
  }
}
</script>

<style>
.listList{
  list-style: none;
}
input[type=checkbox] {
    -webkit-appearance: none;
    -moz-appearance: none;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    font-size: 30px;
    background-color: #eee;
}

input[type=checkbox]:checked:after {
    position: relative;
    bottom: 3px;
    left: 1px;
    color: blue;
    content: "\2713";
}
.qtyfield{
  width: 80px;
  height: 40px;
  margin-right: 10%;
  float: right;
}
.articles{
  margin-left: 20px;
  font-size: 2em;
}
</style>

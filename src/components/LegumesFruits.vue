<template>
<div>
  <div class="subtitle">
    <h4>Fruits et légumes</h4>
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
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-button>
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
      checked: '',
      qty: '',
      qtys: [],
      listeEnCours: [],
      selected: [],
      options: [
        {id: 0, text: 'Pommes', value: 'Pommes', qty: ''},
        {id: 1, text: 'Poires', value: 'Poires', qty: ''},
        {id: 2, text: 'Bananes', value: 'Bananes', qty: ''},
        {id: 3, text: 'Oranges', value: 'Oranges', qty: ''},
        {id: 4, text: 'Clémentines', value: 'Clémentines', qty: ''},
        {id: 5, text: 'Raisin', value: 'Raisin', qty: ''},
        {id: 6, text: 'Litchis', value: 'Litchis', qty: ''},
        {id: 7, text: 'Prunes', value: 'Prunes', qty: ''}
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

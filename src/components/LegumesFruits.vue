<template>
<div>
  <div class="subtitle">
    <h4>Fruits et légumes</h4>
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
    </div>
      <div class="tabList">
    <b-table striped hover :items="listeEnCours" :fields="fields">
      <template v-slot:cell(produit)="row">
        <b-form-input v-model="row.item.produit"/>
      </template>
      <template v-slot:cell(qty)="row">
        <b-form-input v-model="row.item.qty"/>
      </template>
      <template v-slot:cell(action)="row">
        <b-icon icon="trash" style="width: 30px; height: 30px;" @click="deleteItem(row.index)"></b-icon>
        </template>
    </b-table>
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
      qtys: null,
      listeEnCours: [],
      selected: null,
      fields: [ {
        key: 'produit',
        label: 'Produits'
      },
      {
        key: 'qty',
        label: 'Quantité'
      },
      {
        key: 'action',
        label: ''
      }
      ],
      options: [
        {value: null, text: 'Selectionne ton produit'},
        {text: 'Pommes', value: 'Pommes'},
        {text: 'Poires', value: 'Poires'},
        {text: 'Bananes', value: 'Bananes'},
        {text: 'Oranges', value: 'Oranges'},
        {text: 'Clémentines', value: 'Clémentines'},
        {text: 'Raisin', value: 'Raisin'},
        {text: 'Litchis', value: 'Litchis'},
        {text: 'Prunes', value: 'Prunes'}
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
    deleteItem (index) {
      this.listeEnCours.splice(index, 1)
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

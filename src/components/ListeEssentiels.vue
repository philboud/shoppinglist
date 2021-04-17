<template>
    <div>
      <div class="subtitle">
        <h5>Créé une liste rapide avec les produits essentiels</h5>
      </div>
      <div>
        <div class="buttSave">
          <b-button variant="success" @click="goToCat()">Enregistre et retourne aux catégories</b-button>
            <b-alert
              :show="dismissCountDown3"
              dismissible
              fade
              variant="warning"
              @dismiss-count-down="countDownChanged3"
            >
              tu n'as pas ajouté l'article à ta liste...!
            </b-alert>
        </div>
        </div>
    <b-table striped hover :items="essentielsTab" :fields="fields" >
      <template v-slot:cell(checkbox)="row">
        <b-form-checkbox @change="clickRow(row.item)"></b-form-checkbox>
      </template>
    </b-table>
    </div>
</template>

<script>
export default {
  name: 'EssentielList',
  data () {
    return {
      selected: [],
      qty: '',
      freeListTab: [],
      freeListTabTmp: [],
      fields: [ {
        key: 'value',
        label: 'Produits'
      },
      {
        key: 'checkbox',
        label: ''
      }
      ],
      dismissSecs1: 3,
      dismissCountDown1: 0,
      dismissSecs2: 3,
      dismissCountDown2: 0,
      dismissSecs3: 3,
      dismissCountDown3: 0,
      essentielsTab: [
        {text: 'Farine', value: 'Farine'},
        {text: 'Oeuf', value: 'Oeuf'},
        {text: 'Sucre morceaux', value: 'Sucre morceaux'},
        {text: 'Sucre poudre', value: 'Sucre poudre'},
        {text: 'Sel', value: 'Sel'},
        {text: 'Poivre', value: 'Poivre'},
        {text: 'Steaks hachés', value: 'Steaks hachés'},
        {text: 'Pates', value: 'Pates'},
        {text: 'Alcool', value: 'Alcool'},
        {text: 'Eaux', value: 'Eaux'},
        {text: 'Lait', value: 'Lait'},
        {text: 'Huile', value: 'Huile'},
        {text: 'Vinaire', value: 'Vinaigre'},
        {text: 'Mayonnaise', value: 'Mayonnaise'},
        {text: 'Ketchup', value: 'Ketchup'},
        {text: 'Pain', value: 'Pain'}
      ]
    }
  },
  mounted () {
    this.freeListTab = JSON.parse(localStorage.getItem('selected'))
  },
  methods: {
    countDownChanged3 (dismissCountDown) {
      this.dismissCountDown3 = dismissCountDown
    },
    showAlert3 () {
      this.dismissCountDown3 = this.dismissSecs3
    },
    clickRow (item) {
      this.freeListTab.push({produit: item.value})
    },
    goToCat () {
      if (this.freeListData !== '' && this.qty !== '') {
        this.showAlert3()
      } else {
        localStorage.setItem('selected', JSON.stringify(this.freeListTab))
        this.$router.push({name: 'ManageList'})
      }
    }
  }
}
</script>

<style>
.qtysize{
    width: 130px;
}
  textarea.form-control{
    height: 600px !important;
  }
</style>

<template>
<div>
  <div class="subtitle">
    <h4>Hygiene du corps</h4>
    </div>
    <div class="articles">
 <div>
    <b-form-select class="selectSize" v-model="selected" :options="options" @change="addTolist"></b-form-select>
  </div>
  <div>
    <b-modal ref="my-modal" hide-footer title="Combien en veux tu?" centered>
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
    <b-table striped hover :items="listeEnCours"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HygieneCorps',
  data () {
    return {
      qtys: null,
      qty: '',
      selected: null,
      listeEnCours: [],
      options: [
        {value: null, text: 'Choisis ton produit dans la liste'},
        {text: 'Gel douche', value: 'Gel douche'},
        {text: 'Savon', value: 'Savon'},
        {text: 'Shampoing', value: 'Shampoing'},
        {text: 'Dentifrice', value: 'Dentifrice'},
        {text: 'Crème pour le corps', value: 'Crème pour le corps'},
        {text: 'Crème pour les mains', value: 'Crème pour les mains'},
        {text: 'Labello', value: 'Labello'},
        {text: 'Après-Shampoing', value: 'Après-Shampoing'}

      ],
      unites: [{value: null, text: 'Choisis ta quantité'}, '1', '1 litre', '1 kg', '2', '2 litre', '2 kg', '3', '3 litre', '3 kg', '4', '4 litre', '4 kg']
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

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
          <label>Choisis dans la liste!</label>
         <b-form-select v-model="qtys" :options="unites"></b-form-select><br><br>
         <label>Ou ecris ce que tu veux!</label>
         <b-input v-model="qty"></b-input>
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
  name: 'ProdMenag',
  data () {
    return {
      qtys: [],
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

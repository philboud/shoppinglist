<template>
  <div>
    <div class="pdfbutt">
    <b-button @click="generatePdf()">Imprimer</b-button>
    <b-button @click="goToCreat()">Retour</b-button>
      <b-alert
        :show="dismissCountDown1"
         dismissible
         fade
         variant="warning"
         @dismiss-count-down="countDownChanged1"
      >
        Tu n'as pas enrigistré tes modif...? clique sur enregitré sinon c'est perdu!
      </b-alert>
    <b-button v-if="!visible" @click="modifList()">Modifie</b-button>
    <b-button v-if="visible" @click="saveModif()">Enregistre</b-button>
    </div>
    <div class="container">
      <div>
        <h4>Ta p'tite liste de courses!!!</h4>
      </div>
 <b-table id="products" striped hover :fields="fields" :items="selected">
      <template v-if="!visible" v-slot:cell(checkbox)>
        <b-form-checkbox></b-form-checkbox>
      </template>
      <template v-if="visible" v-slot:cell(produit)="row">
        <b-form-input v-model="row.item.produit"/>
      </template>
      <template v-if="visible" v-slot:cell(qty)="row">
        <b-form-input v-model="row.item.qty"/>
      </template>
      <template v-if="visible" v-slot:cell(action)="row">
        <b-icon icon="trash" style="width: 30px; height: 30px;" @click="deleteItem(row.index)"></b-icon>
      </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import JSPDF from 'jspdf'
import 'jspdf-autotable'

export default {
  name: 'Liste',
  data () {
    return {
      visible: false,
      fields: [ {
        key: 'checkbox',
        label: ''
      },
      {
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
      selected: [],
      products: [],
      selectedTemp: [],
      freeList: '',
      dismissSecs1: 4,
      dismissCountDown1: 0
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    countDownChanged1 (dismissCountDown) {
      this.dismissCountDown1 = dismissCountDown
    },
    showAlert1 () {
      this.dismissCountDown1 = this.dismissSecs1
    },
    goToCreat () {
      if (this.visible) {
        this.showAlert1()
      } else {
        this.$router.push({name: 'ManageList'})
      }
    },
    saveModif () {
      localStorage.setItem('selected', JSON.stringify(this.selected))
      this.visible = false
    },
    modifList () {
      this.visible = true
    },
    deleteItem (index) {
      this.selected.splice(index, 1)
    },
    getData () {
      this.selected = JSON.parse(localStorage.getItem('selected'))
    },
    generatePdf () {
      const doc = new JSPDF({
        orientation: 'p',
        unit: 'mm',
        format: [297, 210]
      })
      doc.text('liste de courses', 10, 10)
      doc.autoTable({html: '#products'})
      doc.save('liste_de_courses.pdf')
    }
  }
}
</script>

<style>
.pdfbutt{
  text-align: center;
  margin: 0 auto;
  width: 280px;
}
</style>

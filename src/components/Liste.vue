<template>
  <div>
    <div class="pdfbutt">
    <b-button @click="generatePdf()">Imprimer</b-button>
    <b-button @click="goToCreat()">Retour à la création</b-button>
    </div>
    <div class="container">
 <b-table id="products" striped hover :fields="fields" :items="selected"></b-table>
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
      fields: [ {
        key: 'produit',
        label: 'Produits'
      },
      {
        key: 'qty',
        label: 'quantité'
      }
      ],
      selected: [],
      products: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    goToCreat () {
      this.$router.push({name: 'ListeCreat'})
    },
    getData () {
      this.selected = JSON.parse(localStorage.getItem('selected'))
    },
    generatePdf () {
      const doc = new JSPDF()
      doc.text('liste de courses', 10, 10)
      doc.autoTable({html: '#products'})
      doc.save('a4.pdf')
      console.log(doc)
    }
  }
}
</script>

<style>
.pdfbutt{
  margin-left: 20px;
}
</style>

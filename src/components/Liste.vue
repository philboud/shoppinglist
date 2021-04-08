<template>
  <div>
    <div class="pdfbutt">
    <b-button @click="generatePdf()">Imprimer</b-button>
    <b-button @click="goToCreat()">Retour à la création</b-button>
    </div>
    <div class="container">
 <b-table id="products" striped hover :fields="fields" :items="products"></b-table>
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
        label: 'Contenu de la liste'
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
      for (var i = 0; i < this.selected.length; i++) {
        this.products.push({'produit': this.selected[i]})
      }
      console.log(this.products)
    },
    generatePdf () {
      const doc = new JSPDF()
      doc.text('liste de courses', 5, 5)
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

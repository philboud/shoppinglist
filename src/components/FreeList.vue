<template>
    <div>
      <div class="subtitle">
        <h2>Liste Libre</h2>
        </div>
        <div>
          <div class="buttSave">
             <b-button variant="success" @click="goToCat()">Enregistre la liste</b-button>
          </div>
          <b-input type="text" v-model="freeListData" placeholder="Ecris tes articles ici"></b-input>
          <div>
          <input class="qtysize" type="text" v-model="qty" placeholder="Quantité"/>
             <b-button variant="success" @click="addToFreeList()">Ok</b-button>
          </div>
        </div>
        <div >
            <b-table id="products" striped hover :fields="fields" :items="freeListTab"></b-table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FreeList',
  data () {
    return {
      selected: [],
      qty: '',
      freeListData: '',
      freeListTab: [],
      fields: [
        {
          key: 'produit'
        },
        {
          key: 'qty'
        }
      ]
    }
  },
  mounted () {
    this.freeListTab = JSON.parse(localStorage.getItem('selected'))
  },
  methods: {
    addToFreeList () {
      this.freeListTab.push({produit: this.freeListData, qty: this.qty})
      this.qty = ''
      this.freeListData = ''
    },
    goToCat () {
      localStorage.setItem('selected', JSON.stringify(this.freeListTab))
      this.$router.push({name: 'ListeCreat'})
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

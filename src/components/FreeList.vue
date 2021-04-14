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
            <b-alert
              :show="dismissCountDown1"
              dismissible
              fade
              variant="warning"
              @dismiss-count-down="countDownChanged1"
            >
              Tu n'as pas mis d'article...!
            </b-alert>
          <div>
            <input class="qtysize" type="text" v-model="qty" placeholder="Quantité"/>
              <b-alert
                :show="dismissCountDown2"
                dismissible
                fade
                variant="warning"
                @dismiss-count-down="countDownChanged2"
              >
                Combien tu en veux...?
              </b-alert>
            <b-button variant="success" @click="addToFreeList()">Ajoute à ta liste</b-button>
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
      ],
      dismissSecs1: 3,
      dismissCountDown1: 0,
      dismissSecs2: 3,
      dismissCountDown2: 0
    }
  },
  mounted () {
    this.freeListTab = JSON.parse(localStorage.getItem('selected'))
  },
  methods: {
    countDownChanged1 (dismissCountDown) {
      this.dismissCountDown1 = dismissCountDown
    },
    showAlert1 () {
      this.dismissCountDown1 = this.dismissSecs1
    },
    countDownChanged2 (dismissCountDown) {
      this.dismissCountDown2 = dismissCountDown
    },
    showAlert2 () {
      this.dismissCountDown2 = this.dismissSecs1
    },
    addToFreeList () {
      if (this.freeListData === '') {
        this.showAlert1()
      }
      if (this.qty === '') {
        this.showAlert2()
      } else {
        this.freeListTab.push({produit: this.freeListData, qty: this.qty})
        this.qty = ''
        this.freeListData = ''
      }
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

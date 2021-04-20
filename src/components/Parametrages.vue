<template>
    <div>
      <div class="buttonSave">
        <b-button class="mt-3" variant="success"  @click="saveListPerso()">Enregistre et retourne aux listes</b-button>
      </div>
    <div class="selectItem">
     <b-table striped hover :items="globalListe" :fields="fields" >
             <template v-slot:cell(checkbox)="row">
        <b-form-checkbox v-model="row.item.checked" @change="clickRow($event,row.item, row.index)"></b-form-checkbox>
      </template>
     </b-table>
    </div>
    </div>
</template>

<script>

export default {
  name: 'Parametrages',
  data () {
    return {
      fields: [ {
        key: 'value',
        label: 'Produits'
      },
      {
        key: 'checkbox',
        label: ''
      }
      ],
      checked: false,
      listePerso: [],
      global: [],
      globalListe: []

    }
  },
  mounted () {
    this.listePerso = JSON.parse(localStorage.getItem('listePerso'))
    var testArrayGlobalState = JSON.parse(localStorage.getItem('global'))
    console.log(testArrayGlobalState)
    testArrayGlobalState.length >= 1
      ? this.globalListe = JSON.parse(localStorage.getItem('global'))
      : localStorage.setItem('global', JSON.stringify(this.global))
  },
  methods: {
    clickRow ($event, item, index) {
      if ($event === true) {
        this.globalListe.slice(index, 1)
        this.globalListe.slice(index, 1, {'text': item.text, 'value': item.value, 'checked': true})
        this.listePerso.push({'text': item.text, 'value': item.value})
      } else {
        this.listePerso = []
        for (var i = 0; i < this.globalListe.length; i++) {
          if (this.globalListe[i].checked === true) {
            this.listePerso.push(this.globalListe[i])
          }
        }
      }
    },
    saveListPerso () {
      localStorage.setItem('global', JSON.stringify(this.globalListe))
      localStorage.setItem('listePerso', JSON.stringify(this.listePerso))
      this.$router.push({name: 'EssentielList'})
    }
  }
}
</script>
<style>
.selectItem{
  margin-top: 80px;
}
li{
  list-style: none;
  }
</style>

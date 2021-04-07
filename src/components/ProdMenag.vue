<template>
<div>
  <div class="subtitle">
    <h4>Produit maison entretien</h4>
    </div>
    <div class="articles">
      <b-form-group>
    <b-form-checkbox-group
      v-model='selected'
      :options="options"
      size="lg"
      stacked>
      </b-form-checkbox-group>
    </b-form-group>
    </div>
    <b-button variant="success" @click="goToCat()">Enregistre et etour</b-button>
  </div>
</template>

<script>
export default {
  name: 'ProdMenag',
  data () {
    return {
      selected: [],
      options: [
        {text: 'Javel', value: 'Javel'},
        {text: 'Produit vitres', value: 'Produit vitres'},
        {text: 'lessive', value: 'lessive'},
        {text: 'Pastilles lave-vaisselle', value: 'Pastilles lave-vaisselle'},
        {text: 'Detergent', value: 'Detergent'},
        {text: 'lingettes', value: 'lingettes'},
        {text: 'PQ', value: 'PQ'},
        {text: 'Sopalain', value: 'Sopalain'}
      ]
    }
  },
  mounted () {
    this.selected = JSON.parse(localStorage.getItem('selected'))
  },
  methods: {
    getList () {

    },
    goToCat () {
      localStorage.setItem('selected', JSON.stringify(this.selected))
      this.$router.push({name: 'ListeCreat'})
    }
  }
}
</script>

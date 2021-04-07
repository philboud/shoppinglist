<template>
  <div>
    <div class="subtitle">
      <h4>Epicerie</h4>
    </div>
    <div class="articles">
     <b-form-group>
    <b-form-checkbox-group
      v-model="selected"
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
  name: 'Epicerie',
  data () {
    return {
      selected: [],
      options: [
        {text: 'lait', value: 'lait'},
        {text: 'eau', value: 'eau'},
        {text: 'farine', value: 'farine'},
        {text: 'beurre', value: 'beurre'},
        {text: 'oeufs', value: 'oeufs'},
        {text: 'sel', value: 'sel'},
        {text: 'poivre', value: 'poivre'},
        {text: 'pates', value: 'pates'}
      ]
    }
  },
  mounted () {
    this.selected = JSON.parse(localStorage.getItem('selected'))
  },
  methods: {
    goToCat () {
      console.log(this.selected)
      localStorage.setItem('selected', JSON.stringify(this.selected))
      this.$router.push({name: 'ListeCreat'})
    }
  }
}
</script>

<style>
.articles{
  margin-left: 20px;
  font-size: 2em;
}
</style>

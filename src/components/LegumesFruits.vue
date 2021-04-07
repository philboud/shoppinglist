<template>
<div>
  <div class="subtitle">
    <h4>Fruits et légumes</h4>
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
        {text: 'Pommes', value: 'Pommes'},
        {text: 'Poires', value: 'Poires'},
        {text: 'Bananes', value: 'Bananes'},
        {text: 'Oranges', value: 'Oranges'},
        {text: 'Clémentines', value: 'Clémentines'},
        {text: 'Raisin', value: 'Raisin'},
        {text: 'Litchis', value: 'Litchis'},
        {text: 'Prunes', value: 'Prunes'}
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

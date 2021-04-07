<template>
<div>
  <div class="subtitle">
    <h4>Rayon boucherie</h4>
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
        {text: 'Boeuf', value: 'Boeuf'},
        {text: 'Agneau', value: 'Agneau'},
        {text: 'Mouton', value: 'Mouton'},
        {text: 'Porc', value: 'Porc'},
        {text: 'Poulet', value: 'Poulet'},
        {text: 'canard', value: 'canard'},
        {text: 'Saucisses', value: 'Saucisses'},
        {text: 'Rillettes', value: 'Rillettes'}
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

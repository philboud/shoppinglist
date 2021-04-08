<template>
    <div>
      <div class="subtitle">
        <h3>Catégories</h3>
        </div>
        <div class="listcentrage">
        <ul id="listcat" v-for="item in images" :key="item.image">
          <li  @click="goToCategory(item)"><b-avatar size="120px" square><b-img :src="require('../assets/imagescat/' + item.image + '.jpg')"></b-img></b-avatar></li>
        </ul>
        <div class="listbutt">
          <b-button @click="goToList">voir la liste</b-button>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'ListeCreat',
  data () {
    return {
      pathImage: '../assets/imagescat/',
      images: [
        {image: 'entretien'},
        {image: 'legumes'},
        {image: 'epicerie'},
        {image: 'viandes'}
      ]
    }
  },
  methods: {
    goToList () {
      this.$router.push({name: 'Liste'})
    },
    goToCategory (item) {
      if (item.image === 'epicerie') {
        this.$router.push({name: 'Epicerie'})
      }
      if (item.image === 'entretien') {
        this.$router.push({name: 'ProdMenag'})
      }
      if (item.image === 'viandes') {
        this.$router.push({name: 'Viandes'})
      }
      if (item.image === 'legumes') {
        this.$router.push({name: 'FruitLeg'})
      }
    }
  }
}
</script>
<style>

.listcentrage{
  margin: 0 auto;
  Width: 300px;
}
#listcat{
  padding-left: 10px;
  list-style: none;
  display: inline-table;
}
</style>

<template>
  <div>
    <ul v-for="item in selected" :key="item">
        <li>
            {{item}}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Liste',
  data () {
    return {
      selected: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.selected = JSON.parse(localStorage.getItem('selected'))
    }
  }
}
</script>

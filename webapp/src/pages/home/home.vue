<template>
  <div class="homeBox">
    首页<br>
    <button @click="goArt">文章</button>
  </div>
</template>
<script>
import { getAllUser } from '@/api'
export default {
  data () {
    return {}
  },
  methods: {
    goArt () {
      this.$router.push('/art')
    },
    init () {
      getAllUser({}).then(res => {
        console.log(res, 'res')
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

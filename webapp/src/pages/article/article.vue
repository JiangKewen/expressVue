<template>
  <div class="articleBox">
    具体文章页面<br>
    <button @click="backHome">返回首页</button>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    backHome () {
      this.$router.push('/home')
    }
  }
}
</script>

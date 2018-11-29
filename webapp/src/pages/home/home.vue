<template>
  <div class="homeBox">
    <tp-head />
    <div class="homeBody">
      <div>
        <i class="el-icon-edit"></i>
      </div>
      <el-button type="primary" @click="goArt">文章</el-button>
      <p v-for="(item, index) in users" :key="index">{{item.name}}</p>
      <el-button type="primary" @click="goIndex">可以前往index页面了</el-button>
    </div>
  </div>
</template>
<script>
import { getAllUser } from '@/api'
import tpHead from './head.vue'
export default {
  data () {
    return {
      users: {}
    }
  },
  components: {
    tpHead
  },
  methods: {
    goArt () {
      this.$router.push('/art')
    },
    goIndex () {
      this.$router.push('/index')
    },
    init () {
      getAllUser({}).then(res => {
        this.users = res
        console.log(res, 'res')
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>
<style scoped lang="scss">
.homeBox {
  width: 1024px;
  margin: 0 auto;
  background: rgb(247, 246, 244);
  .homeBody {
    padding: 10px 16px;
    box-sizing: border-box;
  }
}
</style>

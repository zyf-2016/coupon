<template>
  <div class="home">
    <header class="header">
      <img src="../assets/image/banner.png" class="banner">
      <transition enter-active-class="animate__bounceInLeft">
        <img v-show="visible" src="../assets/image/logo.png" class="logo animate__animated">
      </transition>
      <transition enter-active-class="animate__bounceInRight">
        <img v-show="visible" src="../assets/image/title.png" class="title animate__animated">
      </transition>
    </header>
    <main class="list">
      <ul class="clearfix">
        <li v-for="(item, index) in 10" :key="item" @click="handleClick(item, score[index])">
          <button></button>
        </li>
      </ul>
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<style lang="less" scoped>
  .header {
    position: relative;
  }
  .banner {
    width: 100%;
    height: auto;
    display: block;
  }
  .logo {
    width: 279px;
    position: absolute;
    top: 30px;
    left: 30px;
  }
  .title {
    width: 415px;
    height: 61px;
    position: absolute;
    left: 167.5px;
    bottom: 68px;
  }
  .list {
    height: 2092px;
    background-image: url(../assets/image/list.png);
    background-repeat: no-repeat;
    background-size: cover;
    ul {
      padding: 32px 62px 0;
    }
    li {
      position: relative;
      float: left;
      width: 300px;
      height: 350px;
      margin-top: 30px;
      &:nth-of-type(2n) {
        margin-left: 26px;
      }
    }
    button {
      position: absolute;
      width: 132px;
      height: 43px;
      left: 50%;
      bottom: 34px;
      transform: translate(-50%);
      background-image: url(../assets/image/button.png);
      background-repeat: no-repeat;
      background-size: contain;
      outline: none;
      border: none;
    }
  }
  .footer {
    height: 1123px;
    background-image: url(../assets/image/rule.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>

<script>
export default {
  name: 'Home',
  data() {
    return {
      visible: false,
      score: [ 240, 240, 600, 720, 1200, 1200, 1800, 3000, 3600, 6000 ]
    }
  },
  mounted() {
    this.visible = !this.visible
  },
  methods: {
    handleClick(id, price) {
      this.$router.push({
        path: `/detail/${id}`,
        query: {
          price
        }
      })
    }
  }
}
</script>

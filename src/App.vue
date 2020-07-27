<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
  @import url(./assets/style/reset.css);
  .clearfix:after {
    content:" ";
    display:block;
    height:0;
    clear:both;
    visibility:hidden
  }
</style>

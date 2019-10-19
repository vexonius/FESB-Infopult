<template>
  <div id="app">
    <div class="container shadow">
      <div class="nav">
        <h1 class="title">FESB Infopult</h1>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "src/styles/global.scss";

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #272727;
}
</style>

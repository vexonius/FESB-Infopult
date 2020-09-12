<template>
  <div id="app">
    <div class="">
      <div class="nav navbar-padding">
        <h1 class="title pointer" @click="$router.push('/')">{{ appName }}</h1>
      </div>
    </div>
    <router-view />
    <infopultFooter />
  </div>
</template>

<script>
import InfopultFooter from './components/InfopultFooter'

export default {
  components: {
    InfopultFooter
  },
  data() {
    return {
      appName: 'FESB Infopult'
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bulma';
@import 'src/styles/global.scss';

@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #272727;
}
</style>

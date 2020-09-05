<template>
  <div class="card pointer" @click="routeToGuide()">
    <div class="card-image">
      <figure class="image is-1by1">
        <img v-if="photoUrl"
          :src="photoUrl"
          :alt="name + ' ' + lastname"
        />
        <img v-else
          src="https://bulma.io/images/placeholders/1280x960.png"
          :alt="name + ' ' + lastname"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="title is-6">{{name}} {{lastname}}</p>
        <p class="subtitle is-7 has-padding-8">{{email}}</p>
        <p class="subtitle is-7">Ured {{room}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    name: {
      type: String,
      default: ''
    },
    lastname: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    room: {
      type: String,
      default: ''
    },
    photoUrl: {
      type: String,
      default: "https://bulma.io/images/placeholders/1280x960.png"
    }
  },
  methods: {
    routeToGuide() {
      return this.$router.push('/guide')
    }
  },
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div class="card pointer" @click="routeToGuide()">
    <div class="card-image">
      <figure class="image is-1by1">
        <img
          v-if="person.photoUrl"
          :src="person.photoUrl"
          :alt="person.name + ' ' + person.lastname"
        />
        <img v-else src="https://bulma.io/images/placeholders/1280x960.png" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="title is-6">{{person.firstName}} {{person.lastName}}</p>
        <p class="subtitle is-7 has-padding-8">{{ person.email }}</p>
        <p class="subtitle is-7">Ured {{ person.officeID }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    person: {
      type: Object
    }
  },
  methods: {
    routeToGuide() {
      return this.$router.push('/guide/' + this.person.id)
    }
  }
}
</script>

<style lang="scss" scoped></style>

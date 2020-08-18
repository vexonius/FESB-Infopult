<template>
  <div class="card pointer">
    <div class="card-image">
      <figure class="image is-2by2">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="title is-5">{{name}}</p>
        <p class="subtitle is-6">{{email}}</p>
        <p class="is-6">{{room}}</p>
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
    email: {
      type: String,
      default: ''
    },
    room: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>

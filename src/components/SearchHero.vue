<template>
  <div class="hero is-large is-primary">
    <div class="hero-body">
      <div class="container max-width-800">
        <h2 class="subtitle is-size-3">{{ inputHeading }}</h2>
        <div class="shadow has-background-white">
          <input
            class="text light"
            :placeholder="inputPlaceholder"
            @focus="magic_flag = true"
          />
          <div v-show="magic_flag == true" class="dropdown has-padding-16">
            <ul style="display: block;">
              <li v-for="item in items" :key="item.id" class="full-width">
                <p
                  type="button"
                  @click="routeToGuide()"
                  class="text light hover-highlight full-width"
                >
                  {{ item.name }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchHero',
  data() {
    return {
      inputPlaceholder: 'Unesite ime osobe...',
      inputHeading: 'Pronađite put do ureda osoblja FESB-a',
      magic_flag: false,
      items: [
        {
          name: 'Julije Ožegović',
          soba: 'B502'
        },
        {
          name: 'Ivica Puljak',
          soba: 'B601'
        },
        {
          name: 'Slavko Vujević',
          soba: 'B704'
        }
      ]
    }
  },
  methods: {
    routeToGuide() {
      return this.$router.push('/guide')
    }
  }
}
</script>

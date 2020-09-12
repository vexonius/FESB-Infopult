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
            @keyup="getSearchResults()"
            v-model="searchTerm"
          />
          <div v-show="magic_flag == true" class="dropdown has-padding-16">
            <ul style="display: block;">
              <li v-for="item in items" :key="item.id" class="full-width">
                <p
                  type="button"
                  @click="routeToGuide(item.id)"
                  class="text light hover-highlight full-width"
                >
                  {{ item.title }} {{ item.firstName }} {{ item.lastName }}
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
import axios from 'axios'

export default {
  name: 'searchHero',
  data() {
    return {
      inputPlaceholder: 'Unesite ime osobe...',
      inputHeading: 'Pronađite put do ureda osoblja FESB-a',
      magic_flag: false,
      items: [],
      searchTerm: ''
    }
  },
  methods: {
    routeToGuide(id) {
      return this.$router.push('/guide/' + id)
    },
    getSearchResults() {
      axios
        .get('http://localhost:8081/pretraga/' + this.searchTerm)
        .then(response => {
          this.items = response.data
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

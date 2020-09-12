<template>
  <div class="section is-desktop">
    <h2 class="title is-3 has-text-black">{{header}}</h2>
    <div class="columns">
      <div class="column is-one-quarter" v-for="item in staff" :key="item.id">
        <card :person="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import axios from 'axios'

export default {
  name: 'popularStaff',
  components: {
    Card
  },
  props: {
    header: {
      type: String,
      default: ''
    },
    departmentProp: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      staff: [],
      popularSearches: 'Često tražene osobe'
    }
  },
  mounted () {
    axios.get('http://localhost:8081/osobe/department/' + this.departmentProp)
    .then(response => {
      this.staff = response.data
    })
    .catch(err => console.log(err))
  },
}
</script>
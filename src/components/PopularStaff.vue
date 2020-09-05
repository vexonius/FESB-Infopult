<template>
  <div class="section is-desktop">
    <h2 class="title is-3 has-text-black">{{header}}</h2>
    <div class="columns">
      <div class="column is-one-quarter" v-for="item in staff" :key="item">
        <card :name="item.firstName" :lastname="item.lastName" :email="item.email" :room="item.officeID" :photoUrl="item.photoUrl" />
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
      console.log(response.data)
    })
    .catch(err => console.log(err))
  },
}
</script>

<style lang="scss" scoped></style>

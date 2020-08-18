<template>
  <div class="section is-desktop">
    <h2 class="title is-3 has-text-black">{{ header }}</h2>
    <div class="columns">
      <div class="column is-one-quarter" v-for="item in staff" :key="item">
        <card :name="item.name" :email="item.email" :room="item.room" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'

export default {
  name: 'popularStaff',
  components: {
    Card
  },
  props: {
    header: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      staff: [
        {
          name: 'Sven Gotovac',
          email: 'sven@fesb.hr',
          room: 'A312'
        },
        {
          name: 'Julije Ožegović',
          email: 'julije@fesb.hr',
          room: 'B502'
        },
        {
          name: 'Ivica Puljak',
          email: 'julije@fesb.hr',
          room: 'B601'
        },
        {
          name: 'Slavko Vujević',
          email: 'julije@fesb.hr',
          room: 'B704'
        }
      ],
      popularSearches: 'Često tražene osobe'
    }
  }
}
</script>

<style lang="scss" scoped></style>

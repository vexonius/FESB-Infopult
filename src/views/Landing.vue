<template>
  <div>
    <searchHero />
    <popularStaff :header="popularSearches" />
    <popularStaff :header="deanOffice" />
  </div>
</template>

<script>
import SearchHero from '../components/SearchHero'
import PopularStaff from '../components/PopularStaff'

export default {
  name: 'landing',
  components: {
    SearchHero,
    PopularStaff,
  },
  data() {
    return {
        popularSearches: 'Često tražene osobe',
        deanOffice: 'Dekanat',
    }
  }
}
</script>

<style lang="scss" scoped></style>

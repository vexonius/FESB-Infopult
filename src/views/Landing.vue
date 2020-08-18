<template>
  <div>
    <searchHero />
    <popularStaff :header="popularSearches" />
    <popularStaff :header="deanOffice" />
    <infopultFooter />
  </div>
</template>

<script>
import SearchHero from '../components/SearchHero'
import PopularStaff from '../components/PopularStaff'
import InfopultFooter from '../components/InfopultFooter'

export default {
  name: 'landing',
  components: {
    SearchHero,
    PopularStaff,
    InfopultFooter
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

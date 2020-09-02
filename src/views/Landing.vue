<template>
  <div>
    <searchHero />
    <popularStaff :header="deanOffice" />
    <popularStaff :header="studentDuty" />
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
        studentDuty: 'Studenska služba',
        deanOffice: 'Dekanat',
    }
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <searchHero />
    <popularStaff :header="deanOffice" departmentProp="dekanat" />
    <popularStaff :header="zee" departmentProp="elektroenergetika" />
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
        zee: 'Zavod za elektroenergetiku',
        deanOffice: 'Dekanat',
    }
  }
}
</script>

<style lang="scss" scoped></style>

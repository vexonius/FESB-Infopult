<template>
  <div class="container row">
    <div class="columns">
      <div class="column is-one-half">
        <div class="image">
          <img alt="Tlocrt trećeg kata" src="../assets/kat.png" />
        </div>
      </div>
      <div class="column">
        <div class="section">
          <p class="title is-4">{{ steps }}</p>
          <ol>
            <li>
              <p class="subtitle is-5 has-text-dark">
                Otiđite do lifta na 2. katu
              </p>
            </li>
            <li>
              <p class="subtitle is-5 has-text-dark">Izađite na 5. katu</p>
            </li>
            <li>
              <p class="subtitle is-5 has-text-dark">
                Slijedite interaktivnu kartu do ureda
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'

export default {
  components: {},
  data() {
    return {
      steps: 'Koraci do ureda'
    }
  }
}
</script>

<style lang="scss" scoped></style>

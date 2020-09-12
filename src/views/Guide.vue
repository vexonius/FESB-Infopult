<template>
  <div class="container">
    <div class="section max-size-400">
      <div class="card is-horizontal">
        <div class="card-image">
          <figure class="image is-square">
            <img :src="person.photoUrl" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-stacked">
          <div class="card-content">
            <div class="media-content">
              <p class="title is-4">
                {{ person.title }} {{ person.firstName }} {{ person.lastName }}
              </p>
              <p class="subtitle is-6">{{ person.email }}</p>
            </div>
            <div class="content margin-20">
              {{ person.position }} <br />
              Ured {{ person.officeID }} <br />
              Telefon: + (021) {{ person.phone }} <br />
              <a :href="person.profilePage">{{ person.profilePage }}</a> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <span><span class="green-dot"></span>Vaša pozicija</span>
      <span><span class="red-dot"></span>Vaša destinacija</span>
    </div>
    <div class="columns">
      <div class="column is-one-half">
        <div class="image" ref="container">
          <img
            alt="Tlocrt četvrtog kata"
            src="../assets/kat.png"
            @load="calculateStageDimens()"
          />
          <v-stage ref="stage" :config="stageSize" class="overlay">
            <v-layer>
              <v-line :config="linesConfig"></v-line>
              <v-circle :config="startCircleConfig"></v-circle>
              <v-circle :config="destinationCircleConfig"></v-circle>
            </v-layer>
          </v-stage>
        </div>
      </div>
      <div class="column">
        <div class="section">
          <p class="title is-4">{{ steps }}</p>
          <ol class="">
            <li>
              Popnite se stepenicama do {{ person.officeID.charAt(2) }}. kata
            </li>
            <li>Pronađite {{ person.officeID.charAt(0) }} odjel</li>
            <li>
              Slijedite interaktivnu kartu do ureda
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'
import axios from 'axios'

const width = window.innerWidth
const height = window.innerHeight

export default {
  components: {},
  data() {
    return {
      person: null,
      steps: 'Koraci do ureda',

      stageSize: {
        width: width,
        height: height
      },
      linesConfig: {
        points: [],
        //test values 0.268, 0.655, 0.268, 0.871, 0.74, 0.871, 0.74, 0.722
        stroke: '#00f9ff',
        strokeWidth: 2
      },
      startCircleConfig: {
        x: 0.268,
        y: 0.655,
        radius: 6,
        fill: '#00d1b2'
      },
      destinationCircleConfig: {
        x: 0.74,
        y: 0.722,
        radius: 6,
        fill: '#ff6347'
      }
    }
  },
  mounted() {
    axios
      .get('http://localhost:8081/osobe/' + this.$route.params.id)
      .then(response => {
        this.person = response.data.person
        this.updateOfficePathAndPosition(response.data.points)
      })
      .catch(err => console.log(err))
  },
  methods: {
    calculateStageDimens() {
      const container = this.$refs.container

      if (!container) return

      const height = container.offsetHeight
      const width = container.offsetWidth

      this.stageSize.width = width
      this.stageSize.height = height

      this.startCircleConfig.x *= width
      this.startCircleConfig.y *= height

      this.destinationCircleConfig.x *= width
      this.destinationCircleConfig.y *= height

      for (let el = 0; el < this.linesConfig.points.length; el++) {
        if (el % 2 == 0) this.linesConfig.points[el] *= width
        else this.linesConfig.points[el] *= height
      }
    },
    updateOfficePathAndPosition(points) {
      // Sort points by orderNumber property
      this.sortPoints(points)

      // draw a path to the office
      points.map(point => {
        this.linesConfig.points.push(Number(point.x))
        this.linesConfig.points.push(Number(point.y))
      })

      // draw start position
      this.startCircleConfig.x = points[0].x
      this.startCircleConfig.y = points[0].y

      // draw destionation position
      this.destinationCircleConfig.x = points[points.length - 1].x
      this.destinationCircleConfig.y = points[points.length - 1].y
    },
    sortPoints(points) {
      return points.sort(function(a, b) {
        return a.orderNumber - b.orderNumber
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>

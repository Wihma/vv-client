<template>
  <v-card :color="color" dark>
    <v-card-title class="text-center">
      <div class="display-1">{{ title }}</div>
    </v-card-title>
    <v-card-text>
      <v-sparkline
        :value="time"
        :labels="labels"
        color="rgba(255, 255, 255, .7)"
        height="100"
        padding="24"
        stroke-linecap="round"
        smooth
      />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      title: 'Genomsnitt senaste 4 veckorna',
      time: [325, 123, 273, 573, 325, 123, 273, 573],
      color: 'teal',
      labels: [],
      dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
    }
  },
  created() {
    Date.prototype.getCurrentWeek = function() {
      let onejan = new Date(this.getFullYear(), 0, 1)
      return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() - 1) / 7)
    }

    // set week span
    for (let i = 0; i < 8; i++) {
      this.labels.unshift(`v. ${new Date().getCurrentWeek() - i}`)
    }
  }
}
</script>

<style lang="scss" scoped></style>

<template>
  <v-card :color="color" dark v-if="completed.length > 0">
    <v-card-title class="text-center">
      <div class="display-1">{{ title }}</div>
    </v-card-title>
    <v-card-text>
      <v-sparkline
        :value="habitCompletedTimes"
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
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      title: 'Tid spenderad senaste 4 veckorna',
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
  computed: {
    ...mapGetters({
      habitCompletedTimes: 'habit/habitCompletedTimes'
    })
  },
  created() {
    for (let i = 0; i < 4; i++) {
      this.labels.unshift(`v. ${new Date().getCurrentWeek() - i}`)
    }
    Date.prototype.getCurrentWeek = function() {
      let onejan = new Date(this.getFullYear(), 0, 1)
      return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() - 1) / 7)
    }
  }
}
</script>

<style lang="scss" scoped></style>

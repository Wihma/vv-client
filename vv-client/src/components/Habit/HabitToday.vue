<template>
  <v-container style="max-width: 450px; text-align: left">
    <v-row no-gutters>
      <v-col cols="8">
        <v-card class="pa-4 habit-card -shadow">
          <h2>{{ habit.name }}</h2>
          <h3>@{{ habit.time }}</h3>
          <v-text-field
            v-if="timestampStatus['finish']"
            :label="labels.amount"
            v-model="amount"
            type="number"
          ></v-text-field>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="4" style="text-align:center" class="justify-center">
        <v-btn
          v-if="timestampStatus['start'] === 1"
          @click="start"
          block
          icon
          height="100%"
          width="100%"
        >
          <v-icon color="green" style="font-size: 100px">mdi-play</v-icon>
        </v-btn>
        <v-btn
          v-if="timestampStatus['stop'] === 1"
          @click="stop"
          block
          icon
          height="100%"
          width="100%"
        >
          <v-icon color="red" style="font-size: 100px">mdi-stop</v-icon>
        </v-btn>
        <v-btn
          v-if="timestampStatus['finish'] === 1"
          @click="finish"
          block
          icon
          height="100%"
          width="100%"
        >
          <v-icon color="black" style="font-size: 100px">
            mdi-flag-checkered
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    habit: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timestampStatus: {
        start: 1,
        stop: 0,
        finish: 0
      },
      habitCompleted: {},
      amount: 0,
      labels: {
        amount: 'Antal'
      }
    }
  },
  methods: {
    start() {
      console.log(this.start.name)
      this.timestampStatus['start'] = 0
      this.timestampStatus['stop'] = 1

      this.habitCompleted.start = Date.now()
    },
    stop() {
      console.log(this.stop.name)
      this.timestampStatus['stop'] = 0
      this.habitCompleted.stop = Date.now()

      console.log({ measure: this.habit.measure })
      if (!this.habit.measure) {
        console.log({ masure: this.habit.measure })
        this.complete()
      }

      this.timestampStatus['finish'] = 1
    },
    finish() {
      console.log(this.finish.name)
      if (!this.amount) {
        if (!confirm('Slutför vana med 0 i antal?')) {
          return
        }
      }
      this.timestampStatus['finish'] = 0
      this.habitCompleted.amount = this.amount
      this.complete()
    },
    complete() {
      this.$store.dispatch('habit/completeHabit', {
        _id: this.habit._id,
        habitCompleted: this.habitCompleted
      })
    }
  }
}
</script>

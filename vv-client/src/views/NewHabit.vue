<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" lg="6">
        <HabitForm :habit="habit" />
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import HabitForm from '@/components/Habit/HabitForm.vue'
export default {
  data() {
    return {
      habit: {}
    }
  },
  components: {
    HabitForm
  },
  mounted() {
    this.habit = this.getNewHabit()
  },
  methods: {
    getNewHabit() {
      return {
        active: true,
        selectedWeekdays: [0, 1, 2, 3, 4, 5, 6],
        time: '08:00',
        measure: true,
        name: 'Ny vana',
        description: 'En kort beskrivning av vanan och ditt minimimål',
        daysPerformed: [],
        statistics: []
      }
    }
  }
}
</script>

<style scoped></style>

<template>
  <v-container>
    <v-row style="text-align:center">
      <v-spacer />
      <v-col cols="4" sm="3"> <v-btn disabled depressed>Aktiva</v-btn></v-col>
      <v-col cols="4" sm="3"><v-btn>Arkiverade</v-btn></v-col>
      <v-spacer />
    </v-row>
    <v-row>
      <v-spacer />
      <v-col cols="12" sm="10" md="9" lg="6" xl="4">
        <HabitListItem v-for="habit in habits" :key="habit.id" :habit="habit" />
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import HabitListItem from '@/components/Habit/HabitListItem.vue'
export default {
  components: {
    HabitListItem
  },
  data() {
    return {
      habits: [
        {
          id: 1,
          name: 'Push-Ups',
          description: 'Get down on the floor/ground and do one push-up',
          time: '06:15'
        },
        {
          id: 2,
          name: 'Meditate',
          description: 'Sit down, close your eyes and take a deep breath',
          time: '08:00'
        },
        {
          id: 3,
          name: 'Meditate',
          description: 'Sit down, close your eyes and take a deep breath',
          time: '08:00'
        },
        {
          id: 4,
          name: 'Meditate',
          description: 'Sit down, close your eyes and take a deep breath',
          time: '08:00'
        }
      ]
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>

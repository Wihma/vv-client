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
        <HabitListItem
          v-for="habit in habit.habits"
          :key="habit._id"
          :habit="habit"
        />
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
// import store from '@/store/index.js'

import HabitListItem from '@/components/Habit/HabitListItem.vue'
export default {
  components: {
    HabitListItem
  },
  computed: {
    test() {
      return 'test value'
    },
    ...mapState(['habit'])
  },
  created() {
    this.$store.dispatch('habit/fetchHabits')
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>

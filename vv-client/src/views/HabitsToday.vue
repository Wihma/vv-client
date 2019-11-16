<template>
  <v-container>
    <v-row>
      <v-spacer />
      <!-- <v-col cols="12" sm="10" md="9" lg="6" xl="4"> -->
      <v-col cols="12" class="container">
        <h2 v-if="habitsToday.length === 0">
          Hurra! Du har klarat alla dina vanor. Bra jobbat!
        </h2>
        <HabitToday
          v-for="habit in habitsToday"
          :key="habit._id"
          :habit="habit"
        />
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import HabitToday from '@/components/Habit/HabitToday.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    HabitToday
  },
  computed: {
    ...mapGetters({
      habitsToday: 'habit/habitsToday'
    })
  }
}
</script>

<style scoped></style>

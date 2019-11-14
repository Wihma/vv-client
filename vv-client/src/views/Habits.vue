<template>
  <v-container>
    <v-row style="text-align:center">
      <v-spacer />
      <v-col cols="4" sm="3">
        <v-btn @click="change(true)" :depressed="showActive">
          Aktiva
        </v-btn>
      </v-col>
      <v-col cols="4" sm="3">
        <v-btn @click="change(false)" :depressed="!showActive">
          Arkiverade
        </v-btn>
      </v-col>
      <v-spacer />
    </v-row>
    <v-row>
      <v-spacer />
      <v-col cols="12" sm="10" md="9" lg="6" xl="4">
        <HabitListItem
          v-for="habit in habits"
          :key="habit._id"
          :habit="habit"
        />
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'
// import store from '@/store/index.js'

import HabitListItem from '@/components/Habit/HabitListItem.vue'
export default {
  data() {
    return {
      showActive: true,
      habits: []
    }
  },
  methods: {
    change(showActive) {
      if (showActive) {
        this.habits = this.activeHabits
      } else {
        this.habits = this.archivedHabits
      }
    }
  },
  components: {
    HabitListItem
  },
  computed: {
    ...mapGetters({
      activeHabits: 'habit/activeHabits',
      archivedHabits: 'habit/archivedHabits'
    }),
    ...mapState(['habit'])
  },
  created() {
    this.$store
      .dispatch('habit/fetchHabits')
      .then(() => {
        this.habits = this.activeHabits
      })
      .catch(() => {})
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>

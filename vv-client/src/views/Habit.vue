<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="4">
        <HabitForm :habit="habit" />
      </v-col>
      <v-col cols="12" lg="8" v-if="habit.statistics > 0">
        <h1>Statistik</h1>
        <v-container>
          <v-row>
            <v-col
              cols="6"
              sm="4"
              md="6"
              v-for="statistic in habit.statistics"
              :key="statistic.title"
            >
              <StatisticsCard :statistic="statistic" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <Graph />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HabitForm from '@/components/Habit/HabitForm.vue'
import StatisticsCard from '@/components/Dashboard/StatisticsCard.vue'
import Graph from '@/components/Dashboard/Graph.vue'

export default {
  components: {
    HabitForm,
    StatisticsCard,
    Graph
  },
  props: {
    habit: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>

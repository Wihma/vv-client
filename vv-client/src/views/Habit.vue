<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="4">
        <HabitForm />
      </v-col>
      <v-col cols="12" lg="8">
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
import HabitForm from "@/components/Habit/HabitForm.vue";
import StatisticsCard from "@/components/Dashboard/StatisticsCard.vue";
import Graph from "@/components/Dashboard/Graph.vue";

export default {
  components: {
    HabitForm,
    StatisticsCard,
    Graph
  },
  props: {
    habit: {
      type: Object,
      required: true,
      default: () => {
        return {
          id: 1,
          name: "Push-Ups",
          description: "Get down on the floor/ground and do one push-up",
          time: "06:15",
          statistics: [
            {
              title: "Tot. antal dagar",
              value: 365
            },
            {
              title: "Dagar i rad (nu)",
              value: 65
            },
            {
              title: "Dagar i rad",
              value: 150
            },
            {
              title: "Längst tid",
              value: "120 (s)"
            },
            {
              title: "Mest/Flest",
              value: 36
            }
          ]
        };
      }
    }
  }
};
</script>

<style scoped></style>

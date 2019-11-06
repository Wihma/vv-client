<template>
  <v-container>
    <v-row>
      <v-spacer />
      <v-col cols="12" sm="10" md="9" lg="6" xl="4"
        ><HabitToday
          v-for="habit in todayHabits"
          :key="habit.id"
          :habit="habit"
        />
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import HabitToday from "@/components/Habit/HabitToday.vue";
export default {
  components: {
    HabitToday
  },
  data() {
    return {
      todayHabits: [
        {
          id: 1,
          name: "test 1",
          time: "20:00"
        },
        {
          id: 2,
          name: "test 2",
          time: "08:00"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>

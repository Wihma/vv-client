<template>
  <router-link
    class="habit-link"
    :to="{ name: 'habit', params: { id: habit.id } }"
  >
    <v-card class="mb-4 habit-card -shadow">
      <v-card-title>
        <h2>{{ habit.name }}</h2>
      </v-card-title>
      <v-card-text>
        <h3>@{{ habit.time }}</h3>
        <h4>{{ habit.description }}</h4>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn>Gå till</v-btn>
      </v-card-actions>
    </v-card>
  </router-link>
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
      show: true
    };
  }
};
</script>

<style scoped>
.habit-card {
  padding: 10px;
  margin-bottom: 14px;
  transition: all 0.1s linear;
  cursor: pointer;
}
.habit-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.habit-card > .title {
  margin: 0;
}

.habit-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>

<template>
  <v-container style="max-width: 450px">
    <v-row no-gutters>
      <v-col cols="8">
        <v-card class="pa-2 habit-card -shadow">
          <h2>{{ habit.name }}</h2>
          <h3>@{{ habit.time }}</h3>
        </v-card>
      </v-col>
      <v-col cols="4" style="text-align:center" class="justify-center">
        <v-btn block icon height="100%" width="100%">
          <v-icon color="green" style="font-size: 100px">mdi-play</v-icon>
        </v-btn>
        <!-- <v-btn block icon height="100%" width="100%">
          <v-icon color="red" style="font-size: 100px">mdi-stop</v-icon>
        </v-btn> -->
        <!-- <v-btn block icon height="100%" width="100%">
          <v-icon color="black" style="font-size: 100px">mdi-flag-checkered</v-icon>
        </v-btn> -->
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
  }
};
</script>

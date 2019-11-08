<template>
  <v-card :color="color" dark>
    <v-card-title class="text-center">
      <div class="display-1">{{ title }}</div>
    </v-card-title>
    <v-card-text>
      <v-sparkline
        :value="time"
        :labels="labels"
        color="rgba(255, 255, 255, .7)"
        height="100"
        padding="24"
        stroke-linecap="round"
        smooth
      />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      title: 'Genomsnitt senaste 4 veckorna',
      time: [325, 123, 273, 573],
      color: 'teal',
      labels: ['v.40', 'v.41', 'v.42', 'v.43']
    }
  }
}
</script>

<style lang="scss" scoped></style>

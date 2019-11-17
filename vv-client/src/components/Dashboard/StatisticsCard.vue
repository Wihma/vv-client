<template>
  <v-card>
    <v-card-title class="display-1"
      >{{ statistic.title }}: {{ statistic.value }}</v-card-title
    >
    <!-- <v-card-text class="display-1"></v-card-text> -->
  </v-card>
</template>

<script>
export default {
  name: 'StatisticCard',
  props: {
    statistic: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>

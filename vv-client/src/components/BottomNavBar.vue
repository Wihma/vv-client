<template>
  <v-bottom-navigation app :value="true" grow color="green">
    <v-btn :to="{ name: 'habits' }">
      <span>Vanor</span>
      <v-icon>mdi-format-list-bulleted</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'habits-today' }">
      <span>I dag</span>
      <v-icon>mdi-checkbox-marked-outline</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'new-habit' }">
      <span>Ny Vana</span>
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'settings' }">
      <span>Inställningar</span>
      <v-icon>mdi-settings</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' }
    ]
  })
}
</script>

<style scoped></style>

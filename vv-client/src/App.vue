<template>
  <v-app>
    <AppBar name="AppBar" />
    <v-content>
      <router-view></router-view>
    </v-content>
    <BottomNavBar />
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
import BottomNavBar from '@/components/BottomNavBar.vue'
export default {
  name: 'App',

  components: {
    AppBar,
    BottomNavBar
  },

  data: () => ({
    //
  })
}
</script>
<style>
.text-tooltip {
  color: red;
}

.-shadow {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
}

/* .container {
  text-align: center;
} */
</style>

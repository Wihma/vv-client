<template
  ><v-card>
    <v-card-title
      ><h2>{{ habit.name }}</h2></v-card-title
    >
    <v-card-text>
      <v-form @submit.prevent="register">
        <v-text-field
          :label="labels.name"
          v-model="habit.name"
          type="text"
        ></v-text-field>
        <v-text-field
          :label="labels.description"
          v-model="habit.description"
          type="text"
        ></v-text-field>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="habit.time"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="habit.time"
              :label="labels.time"
              prepend-icon="mdi-clock"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="menu"
            v-model="habit.time"
            full-width
            format="24hr"
            @click:minute="$refs.menu.save(habit.time)"
          ></v-time-picker>
        </v-menu>

        <v-select
          :items="weekdays"
          name="weekday"
          :label="labels.weekdays"
          v-model="habit.selectedWeekdays"
          multiple
          persistent-hint
        ></v-select>
        <v-switch :label="labels.active" v-model="habit.active"></v-switch>
        <v-switch :label="labels.measure" v-model="habit.measure"></v-switch>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn v-if="routeName != 'new-habit'" icon>
        <v-icon color="red" @click="deleteHab" x-large>mdi-delete</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn v-if="routeName == 'new-habit'" icon>
        <v-icon color="green" @click="create" x-large>mdi-cloud-upload</v-icon>
      </v-btn>
      <v-btn v-else icon>
        <v-icon color="green" @click="update" x-large>mdi-cloud-upload</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
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
      menu: false,
      labels: {
        name: 'Namn',
        description: 'Beskrivning',
        time: 'Tidpunkt',
        weekdays: 'Vanedagar',
        active: 'Aktiv',
        measure: 'Mät antal'
      },
      weekdays: [
        {
          text: 'Söndag',
          value: 0
        },
        {
          text: 'Måndag',
          value: 1
        },
        {
          text: 'Tisdag',
          value: 2
        },
        {
          text: 'Onsdag',
          value: 3
        },
        {
          text: 'Torsdag',
          value: 4
        },
        {
          text: 'Fredag',
          value: 5
        },
        {
          text: 'Lördag',
          value: 6
        }
      ]
    }
  },
  methods: {
    create() {
      this.$store
        .dispatch('habit/create', this.habit)
        .then(() => {
          this.$router.push({ name: 'habits' })
        })
        .catch(err => console.log(err))
    },
    update() {
      this.$store
        .dispatch('habit/update', this.habit)
        .then(() => {
          this.$router.push({ name: 'habits' })
        })
        .catch(err => console.log(err))
    },
    deleteHab() {
      if (!confirm('Är du säker på att du vill ta bort vanan?')) return
      this.$store
        .dispatch('habit/delete', this.habit._id)
        .then(() => {
          this.$router.push({ name: 'habits' })
        })
        .catch(err => console.log(err))
    }
  },
  computed: {
    routeName() {
      return this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped></style>

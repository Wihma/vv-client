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
        <v-switch
          :label="labels.measure"
          v-model="habit.measureWUnit"
        ></v-switch>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn icon>
        <v-icon color="red" x-large>mdi-delete</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn icon>
        <v-icon color="green" x-large>mdi-cloud-upload</v-icon>
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
      // put template for a new object here?
      // default: () => {
      //   return {
      //     id: 1,
      //     name: 'Push-Ups',
      //     description: 'Get down on the floor/ground and do one push-up',
      //     time: '06:15'
      //   }
      // }
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
        measure: 'Mät'
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
  }
}
</script>

<style lang="scss" scoped></style>

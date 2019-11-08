<template
  ><v-card>
    <v-card-title
      ><h2>{{ habit.name }}</h2></v-card-title
    >
    <v-card-text>
      <v-form @submit.prevent="register">
        <v-text-field :label="labels.name" type="text"></v-text-field>
        <v-text-field :label="labels.description" type="text"></v-text-field>
        <v-menu
          ref="menu"
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="time"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="time"
              :label="labels.time"
              prepend-icon="mdi-clock"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="menu2"
            v-model="time"
            full-width
            format="24hr"
            @click:minute="$refs.menu.save(time)"
          ></v-time-picker>
        </v-menu>

        <v-select
          :items="weekdays"
          name="weekday"
          :label="labels.weekdays"
          item-text="text"
          item-value="value"
          multiple
          persistent-hint
        ></v-select>
        <v-switch :label="labels.active"></v-switch>
        <v-switch :label="labels.measure"></v-switch>
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
      required: true,
      default: () => {
        return {
          id: 1,
          name: 'Push-Ups',
          description: 'Get down on the floor/ground and do one push-up',
          time: '06:15'
        }
      }
    }
  },
  data() {
    return {
      time: null,
      menu2: false,
      labels: {
        name: 'Namn',
        description: 'Beskrivning',
        time: 'Ridpunkt',
        weekdays: 'Vanedagar',
        active: 'Aktiv',
        measure: 'Mät'
      },
      weekdays: [
        {
          text: 'Sunday',
          value: 0
        },
        {
          text: 'Monday',
          value: 1
        },
        {
          text: 'Tuesday',
          value: 2
        },
        {
          text: 'Wednesday',
          value: 3
        },
        {
          text: 'Thursday',
          value: 4
        },
        {
          text: 'Friday',
          value: 5
        },
        {
          text: 'Saturday',
          value: 6
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>

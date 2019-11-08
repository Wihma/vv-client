<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="12" md="6" lg="6" class="text-center">
        <RegistrationForm v-if="regForm" />
        <v-btn v-if="regForm" @click="regForm = false" text class="mt-2"
          >jag har redan ett konto</v-btn
        >
        <LoginForm v-if="!regForm" />
        <v-btn v-if="!regForm" @click="regForm = true" text class="mt-2"
          >jag vill registrera mig</v-btn
        >
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import RegistrationForm from '@/components/RegistrationForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
    RegistrationForm
  },
  data() {
    return {
      show: false,
      regForm: true
    }
  }
}
</script>

<style></style>

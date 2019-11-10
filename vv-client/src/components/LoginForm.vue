<template>
  <v-card class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="credentials.email"
          label="Email"
          prepend-icon="mdi-account-circle"
          autofocus
        />
        <v-text-field
          v-model="credentials.password"
          :type="showPassword ? 'text' : 'password'"
          label="Lösenord"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
      <v-alert v-if="loginError" text info type="error">
        Det gick inte att logga in. Skrev du in rätt användaruppgifter?
      </v-alert>
      <a href=""><p>Jag har glömt mitt lösenord</p></a>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="info" @click="login">Logga in</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      loginError: false,
      credentials: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('auth/login', this.credentials)
        .then(() => {
          this.$router.push({ name: 'habits' })
        })
        .catch(() => {
          this.loginError = true
        })
    }
  }
}
</script>

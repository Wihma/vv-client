<template>
  <v-container>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="5" lg="4" xl="3" class="text-center">
        <RegistrationForm v-if="regForm" />
        <v-btn v-if="regForm" @click="regForm = false" text class="mt-2"
          >jag har redan ett konto</v-btn
        >
        <LoginForm v-if="!regForm" />
        <v-btn v-if="!regForm" @click="regForm = true" text class="mt-2"
          >jag vill registrera mig</v-btn
        >
      </v-col>
      <v-col cols="12" sm="7" lg="6" xl="5">
        <v-card class="mx-auto mt-5">
          <v-card-title><h1 class="display-1">Vänliga Vanor</h1></v-card-title>
          <v-card-text>
            <p>
              Välkommen, praktisera <a href="">mikrovanor</a> i ditt eget tempo.
              Använd appen till att:
            </p>
            <ul>
              <li>
                hitta till den där "jag är klar"-känslan som så få av oss får
                uppleva.
              </li>
              <li>
                påbörja nya saker med självförtroendet att du kommer fortsätta
                med det efter två veckor
              </li>
              <li>
                börja staka ut en ny väg i livet. Ett steg i taget
              </li>
            </ul>
            <br />
            <p>
              Jag vill inte komma med allt för stora påståendet då det i
              slutändand beror på om du kommer lägga ner
              <v-tooltip v-model="show" top>
                <template v-slot:activator="{ on }">
                  <span @click="show = !show" class="green--text text--darken-2"
                    >en minut</span
                  >
                </template>
                <span>
                  om du måste lägga ner mer än en minut gör du dig själv en
                  otjänst
                </span>
              </v-tooltip>
              om dagen under din överskådliga framtid. På mål du själv sätter
              upp.
            </p>

            <p>
              Om nu väljer att prova och det fungerar för dig vill jag inget mer
              än att du ska känna dig varmt välkommen att bidra till
              utvecklingen av en här appen. Jag utvecklar för tillfället den här
              appen helt ideelt utan ersättning och står själv för alla
              kostnader för servrar, domäner, databaser, etc. Om du finner värde
              i appen får du gärna bidra en slant, men ännu hellre skulle jag
              vilja ha din direkta hjälp. Om du har erfarenhet av programmering
              är det toppen. I utbyte kommer jag lära dig allt jag kan. Om du
              inte har något intresse av programmering finns det 100-tals andra
              områden jag kommer behöva hjälp inom.
            </p>
            <p>
              Om vi jobbar hårt och finns där för varandra kommer vi kanske
              kunna försörja oss på detta snabbare än du kanske tror.
            </p>

            <p>Vänligen, Marc Wihlstrand</p>
          </v-card-text>
        </v-card>
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
      regForm: true,
      on: false
    }
  }
}
</script>

<style></style>

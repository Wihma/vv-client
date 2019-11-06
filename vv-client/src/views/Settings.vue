<template>
  <v-container style="max-width:800px">
    <v-card>
      <v-card-title>Ändra lösenord</v-card-title>
      <v-card-text
        >Den här appen har ännu inte funktionalitet för tvåstegs-autentisiering
        så använd ett unikt lösenord. Om du inte orkar komma på ett bra lösenord
        använd en lösenordshanterare som: <a href="">Lockwise</a>,
        <a href="">Keypass</a> eller <a href="">Lastpass</a></v-card-text
      >
      <v-card-actions>
        <v-container>
          <v-row no-gutters class="settings-input-row">
            <v-col cols="4" class="pt-1 pl-1">Lösenord</v-col>
            <v-col cols="6" class="pt-1">
              Ändrades senast: {{ new Date().toLocaleDateString("sv") }}
            </v-col>
            <v-col cols="2" style="text-align:right">
              <v-btn icon left>
                <v-icon right>mdi-chevron-double-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>

    <v-card class="mt-3 mb-10">
      <v-card-title>Användaruppgifter</v-card-title>
      <!-- <v-card-text>Den här appen har ännu inte funktionalitet för tvåstegs-autentisiering så använd ett unikt lösenord. Om du inte orkar komma på ett bra lösenord använd en lösenordshanterare som: <a href="">Lockwise</a>, <a href="">Keypass</a> eller <a href="">Lastpass</a></v-card-text> -->

      <v-card-text>
        <v-form>
          <v-text-field type="text" label="namn"></v-text-field>
          <v-text-field type="text" label="efternamn"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn fab right>
          <v-icon color="green">mdi-cloud-upload</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-btn block color="red" dark>Logga ut</v-btn>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.settings-input-row {
  border-top: 1px solid grey;
  padding: 3px 0 3px 0;
  border-bottom: 1px solid grey;
  cursor: pointer;
}

.settings-input-row:hover {
  background-color: aliceblue;
}
</style>

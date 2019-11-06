import Vue from "vue";
import Vuetify from "vuetify/lib";
import sv from "vuetify/es5/locale/sv";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#00cc55",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  },
  lang: {
    locales: { sv },
    current: "sv"
  }
});

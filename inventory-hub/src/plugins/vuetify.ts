// plugins/vuetify.ts

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
// Импортируем нужные иконки, темы и т.д. при необходимости
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976D2'
        }
      }
    }
  }
})

// src/plugins/date.js
import dayjs from 'dayjs'
import 'dayjs/locale/fr'

export default {
  install: (app, options) => {
    // Ajoutez dayjs à l'objet globalProperties de l'application Vue
    dayjs.locale('fr')
    app.config.globalProperties.$date = (date) => {
      // Formater la date au format "DD MMMM YYYY"
      return dayjs(date).format('DD MMMM YYYY')
    }
  }
}
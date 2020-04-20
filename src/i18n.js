import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      'app_title': 'Read my messages by babe',

      'login_name': 'Name',
      'login_password': 'Password',
      'login_message': "You don't have an accont yet?",
      'login_signup':  'Sign up!',
      'login_gotomessenger': "Go to messenger"
    }
  },
  fr: {
    translation: {
      'app_title': 'Lire mes messages', 
      'login_name': 'Nom',
      'login_password': 'Mot de passe', 
      'login_message': "Vous n'avez pas encore de compte",
      'login_signup':  'Inscrivez-vous!',
      'login_gotomessenger': "Aller au messager"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
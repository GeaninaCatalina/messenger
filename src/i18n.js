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
      'login_gotomessenger': "Go to messenger",

      'signup_name': 'Name',
      'signup_password': 'Password',
      'signup_confirm': 'Confirm password',
      'signup_message': "You already have an accont?",
      'signup_login':  'Login!',
      'signup_button': "Create account",
      
      'submit':'Submit', 
      'submit_placeholder': 'Add your message here',
      'clear': 'Clear',

      'group_global': 'Global',
      'group_friends': 'Friends'
    }
  },
  fr: {
    translation: {
      'app_title': 'Lire mes messages', 
      'login_name': 'Nom',
      'login_password': 'Mot de passe', 
      'login_message': "Vous n'avez pas encore de compte",
      'login_signup':  'Inscrivez-vous!',
      'login_gotomessenger': "Aller au messager", 

      'signup_name': 'Nom',
      'signup_password': 'Mot de passe',
      'signup_confirm': 'Confirmez le mot de passe',
      'signup_message': "Avez-vous déjà un compte? ",
      'signup_login':  "S'identifier!",
      'signup_button': "Créer un compte", 

      'submit':'Soumettre', 
      'submit_placeholder': 'Ajoutez votre message ici',
      'clear': 'Messages clairs',

      'group_global': 'Globale',
      'group_friends': 'Copains'
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
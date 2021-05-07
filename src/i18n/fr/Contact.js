export default {
  PageMeta: {
    Title: 'Contacts',
    Description: 'Page de contact du site Konoha Technologies'
  },
  Title: "Dites Bonjour",
  Form: {
    Title1: "Des questions ?",
    Title2: "Nous saurons probalement vous repondre.",
    Subtitle: "Laissez nous un message et voyons comment nous pouvons ameliorer votre empreinte numerique.",
    Submit: "Envoyer",
    Clear: "Effacer",
    Fields: {
      Firstname: {
        name: "Prénom",
        Label: "Prénom",
        Errors:{
          RequiredMessage: "Votre Prénom est requis",
          LengthMessage: 'Maximum {maxLength} caractères !'
        }
      },
      Lastname: {
        name: "Nom",
        Label: "Nom",
        Errors: {
          RequiredMessage: "Votre Nom est requis",
          LengthMessage: 'Maximum {maxLength} caractères !'
        }
      },
      Company: {
        name: "Société",
        Label: "Société",
        Errors: {
          LengthMessage: 'Maximum {maxLength} caractères !'
        }
      },
      Email: {
        name: "Email",
        Label: "E-mail",
        Errors: {
          RequiredMessage: "Votre E-mail est requis",
          LengthMessage: "",
          ValidMessage: 'E-Mail non valide !'
        }
      },
      Message: {
        name: "Message",
        Label: "Message",
        Errors: {
          RequiredMessage: "Un message est requis !",
          LengthMessage: 'Maximum {maxLength} caractères !'
        }
      },
    }
  }

}
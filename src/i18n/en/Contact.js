export default {
  Title: "Say Hello",
  Form: {
    Title1: "Have questions ?",
    Title2: "We probably have answers.",
    Subtitle: "Drop us a line and let us know how we can help you up your digital game.",
    Submit: "Submit",
    Clear: "Clear",
    Fields: {
      Firstname: {
        Name: "Firstname",
        Label: "Firstname",
        Errors:{
          RequiredMessage: "Firstname is required",
          MaxLengthMessage: 'Name must be at most {maxLength} characters long !'
        }
      },
      Lastname: {
        Name: "Lastname",
        Label: "Lastname",
        Errors: {
          RequiredMessage: "Lastname is required",
          MaxLengthMessage: 'Lastname must be at most {maxLength} characters long !'
        }
      },
      Company: {
        Name: "Company",
        Label: "Company",
        Errors: {
          MaxLengthMessage: 'Company name must be at most {maxLength} characters long'
        }
      },
      Email: {
        Name: "Email",
        Label: "E-mail",
        Errors: {
          RequiredMessage: "Email is required",
          MaxLengthMessage: "",
          ValidMessage: 'Must be valid e-mail !'
        }
      },
      Message: {
        Name: "Message",
        Label: "Message",
        Errors: {
          RequiredMessage: "Message is required !",
          MaxLengthMessage: 'Message must be at most {maxLenght} characters long !'
        }
      },
    }
  }

}
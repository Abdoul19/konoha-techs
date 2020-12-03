<template>
<v-container>
  <v-row>
      <v-row style="width: 100%">
        <v-col cols=12>
          <v-card flat tile>
            <v-card-title class="text-h5">
              Say Hello
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols=4>
          <v-card flat tile>
            <v-card-title >
              Have questions? <br/>
              We probably have answers.
            </v-card-title>
            <v-card-subtitle>
              Drop us a line and let us know how we can help you up your digital game.
            </v-card-subtitle>
            <v-card-actions>

              <a target="_blank" href="">
                <v-icon large color="primary darken-2">mdi-facebook</v-icon>
              </a>
              
              <a target="_blank" href="">
                <v-icon large color="primary darken-2">mdi-linkedin</v-icon>
              </a>

              <a target="_blank" href="">
                <v-icon large color="primary darken-2">mdi-twitter</v-icon>
              </a>

            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols=4>
          <v-card flat tile>
            <form>
              <v-text-field
                v-model="firstname"
                :error-messages="firstnameErrors"
                :counter="10"
                label="Firstname"
                required
                outlined
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="lastname"
                :error-messages="lastnameErrors"
                :counter="10"
                label="Lastname"
                required
                outlined
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="company"
                :error-messages="companyErrors"
                :counter="10"
                label="Company"
                outlined
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                outlined
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
            </form>
          </v-card>
        </v-col>

        <v-col cols=4>
          <v-card flat tile>
            <v-textarea
                rows=8
                v-model="message"
                :error-messages="messageErrors"
                :counter="1000"
                label="Message"
                required
                outlined
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-textarea>

              <v-btn class="mr-4" @click="submit">submit</v-btn>
              <v-btn @click="clear">clear</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
</v-container>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  validations: {
      firstname: { required, maxLength: maxLength(10) },
      lastname: { required, maxLength: maxLength(10) },
      message: { required, maxLength: maxLength(1000) },
      company: { maxLength: maxLength(15) },
      email: { required, email },
    },
  data(){
    return {
      firstname: '',
      lastname: '',
      company: '',
      email: '',
      message: '',
      
    }
  },
  computed: {
    firstnameErrors () {
        const errors = []
        if (!this.$v.firstname.$dirty) return errors
        !this.$v.firstname.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.firstname.required && errors.push('Name is required.')
        return errors
    },
    lastnameErrors () {
        const errors = []
        if (!this.$v.lastname.$dirty) return errors
        !this.$v.lastname.maxLength && errors.push('Lastname must be at most 10 characters long')
        !this.$v.lastname.required && errors.push('Lastname is required.')
        return errors
    },
    companyErrors () {
        const errors = []
        if (!this.$v.company.$dirty) return errors
        !this.$v.company.maxLength && errors.push('Lastname must be at most 10 characters long')
        //!this.$v.lastname.required && errors.push('Lastname is required.')
        return errors
    },
    messageErrors () {
        const errors = []
        if (!this.$v.message.$dirty) return errors
        !this.$v.message.maxLength && errors.push('Message must be at most 1000 characters long')
        !this.$v.message.required && errors.push('Message is required.')
        return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },
  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.firstname = ''
      this.lastname = ''
      this.message = ''
      this.Company = ''
      this.email = ''
    },
  },
}
</script>

<style>

</style>
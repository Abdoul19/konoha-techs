<template>
<v-container>
  <v-row>
      <v-row style="width: 100%">
        <v-col cols=12>
          <v-card flat tile>
            <v-card-title class="text-h5 text-sm-h3 font-weight-light primary--text text--lighten-1">
              {{ $t('Contact.Title')}}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md=4>
          <v-card flat tile>
            <v-card-title >
              {{ $t('Contact.Form.Title1')}} <br/>
              {{ $t('Contact.Form.Title2')}}
            </v-card-title>
            <v-card-subtitle>
              {{ $t('Contact.Form.Subtitle')}}
            </v-card-subtitle>
            <v-card-actions>

              <a target="_blank" href="">
                <v-icon large color="primary">mdi-facebook</v-icon>
              </a>
              
              <a target="_blank" href="">
                <v-icon large color="primary">mdi-linkedin</v-icon>
              </a>

              <a target="_blank" href="">
                <v-icon large color="primary">mdi-twitter</v-icon>
              </a>

            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" md=4>
          <v-card flat tile>
            <form>
              <v-text-field
                v-model="firstname"
                :error-messages="firstnameErrors"
                :counter="10"
                :label="$t('Contact.Form.Fields.Firstname.Label')"
                required
                outlined
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="lastname"
                :error-messages="lastnameErrors"
                :counter="10"
                :label="$t('Contact.Form.Fields.Lastname.Label')"
                required
                outlined
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="company"
                :error-messages="companyErrors"
                :counter="10"
                :label="$t('Contact.Form.Fields.Company.Label')"
                outlined
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                :label="$t('Contact.Form.Fields.Email.Label')"
                required
                outlined
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
            </form>
          </v-card>
        </v-col>

        <v-col cols="12" md=4>
          <v-card flat tile>
            <v-textarea
                rows=8
                v-model="message"
                :error-messages="messageErrors"
                :counter="1000"
                :label="$t('Contact.Form.Fields.Message.Label')"
                required
                outlined
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-textarea>

              <v-btn tile color="green" class="mr-4 white--text" @click="submit"> {{$t('Contact.Form.Submit')}} </v-btn>
              <v-btn tile color="primary" @click="clear">{{$t('Contact.Form.Clear')}}</v-btn>
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
        !this.$v.firstname.maxLength && errors.push(this.$t('Contact.Form.Fields.Firstname.Errors.MaxLengthMessage', {maxLength: 10}))
        !this.$v.firstname.required && errors.push(this.$t('Contact.Form.Fields.Firstname.Errors.RequiredMessage'))
        return errors
    },
    lastnameErrors () {
        const errors = []
        if (!this.$v.lastname.$dirty) return errors
        !this.$v.lastname.maxLength && errors.push(this.$t('Contact.Form.Fields.Lastname.Errors.MaxLengthMessage', {maxLength: 10}))
        !this.$v.lastname.required && errors.push(this.$t('Contact.Form.Fields.Lastname.Errors.RequiredMessage'))
        return errors
    },
    companyErrors () {
        const errors = []
        if (!this.$v.company.$dirty) return errors
        !this.$v.company.maxLength && errors.push(this.$t('Contact.Form.Fields.Company.Errors.MaxLengthMessage', {maxLength: 10}))
        return errors
    },
    messageErrors () {
        const errors = []
        if (!this.$v.message.$dirty) return errors
        !this.$v.message.maxLength && errors.push(this.$t('Contact.Form.Fields.Message.Errors.MaxLengthMessage', {maxLength: 1000}))
        !this.$v.message.required && errors.push(this.$t('Contact.Form.Fields.Message.Errors.RequiredMessage'))
        return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push(this.$t('Contact.Form.Fields.Lastname.Errors.ValidMessage'))
      !this.$v.email.required && errors.push(this.$t('Contact.Form.Fields.Lastname.Errors.ValidMessage'))
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
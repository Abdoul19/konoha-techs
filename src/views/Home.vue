<template>
<div>
  <v-container pa-0 fluid>
        <v-parallax  width="100%" src="../assets/hero-background.jpg">
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="6">
            <h1>
            Up your digital game <br/>
            — it’s all the goal.
            </h1>
            <h2 class="text--primary">Development, analytics, data visualization, and content management for companies in the digital age.</h2>
            </v-col>
          </v-row>
          
        </v-parallax>
  </v-container>

  <v-container>
    <v-row>
      <v-row>
        <v-col cols=12>
          <v-card tile flat >
            <v-card-title >What we do</v-card-title>
            <v-card-subtitle >
              Our teams of technologists leverage modern tools and processes to solve your most pressing technology problems. 
              We do this by providing a number of services such as those described below and on our Services page: 
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <v-row>

      <v-col cols="6">
        <template v-for="(work, key) in ourWork" >
        <v-card v-if="key == 1 | key == 3 | key == 5" :key=key class="my-6" >
          <v-card-title>
            <v-icon class="mx-1" color="primary" size="24px">{{ work.icone }}</v-icon>
            {{work.title}}
          </v-card-title>
          <v-card-text>
            {{work.description}}
          </v-card-text>
        </v-card>
        </template>
      </v-col>

      <v-col cols="6">
        <template v-for="(work, key) in ourWork" >
        <v-card v-if="key == 0 | key == 2 | key == 4 | key == 6" :key=key class="my-6" >
          <v-card-title>
            <v-icon class="mx-1" color="primary" size="24px">{{ work.icone }}</v-icon>
            {{work.title}}
          </v-card-title>
          <v-card-text>
            {{work.description}}
          </v-card-text>
        </v-card>
        </template>
      </v-col>

      </v-row>
    </v-row>
    
    <v-row>
      <v-row>
        <v-col cols=12>
        <v-card tile flat>
          <v-card-title>Tech specialities</v-card-title>
        <v-card-subtitle>
          For our fellow nerds, here are some specifics of the technologies we specialize in. 
          You can see these technologies in action in Our Work. Can’t see what you’re looking for? Get in touch and we’ll help you find what you need.
        </v-card-subtitle>
        </v-card>
        </v-col>
      </v-row>

      <v-row>
        <template v-for="(tech, key) in specialities">
          <v-col cols=3 :key=key>
            <v-card outlined tile class="pa-2" min-height="300">
              <a :href="tech.link" target="_blank">
              <v-img contain max-width="70" max-height="70" :alt="tech.title+'-logo'" :src="require(`../assets/${tech.icone}`)" />
              <v-card-title color="primary" class="pa-0">
                
                  {{tech.title}}
                
              </v-card-title>
              </a>
              <v-card-text class="pa-0">
                {{tech.content}}
              </v-card-text>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-row>

    <v-row>
      <v-row style="width: 100%">
        <v-col cols=12>
          <v-card flat tile>
            <v-card-title>
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
</div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  name: 'Home',
  components: {
    //HelloWorld
  },
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
      specialities: [
        {
          title: 'Adobe Experience Manager',
          content: 'Nine-year WCM Magic Quadrant Leader according to Gartner, AEM is one of the heavy hitters in the WCM space. It takes some serious experience to master and we know it’s not always easy. Our advice: get a reliable guide.',
          icone: 'tech-aem.svg',
          link: '#'
        },
        {
          title: 'Adobe Analytics',
          content: "We won't explain to you the real value of real metrics. But we will say that designing and implementing a metrics strategy that ensures accurate, actionable results is a complex, often underestimated task. We use Adobe Analytics to make it happen. So you can put your feet up and let us do the hard work.",
          icone: 'tech-aem.svg',
          link: '#'
        },
        {
          title: 'Workfront',
          content: "Workfront is a worldwide leader in project and portfolio management. It is a robust, collaborative, and dynamic platform. We've had the chance to both use it as end-users and to look under the hood as developers and integrate it with other platforms.",
          icone: 'tech-workfront.svg',
          link: '#'
        },
        {
          title: 'Azure',
          content: 'There was a time when we worried about servers... hah! Not all good-old-times were better... Spinning up VMs, web-servers, CDNs, databases has become second nature. Deploying code from our repositories to web servers has never been easier.',
          icone: 'tech-ms-azure.svg',
          link: '#'
        },
        {
          title: 'Angular',
          content: 'Angular is at the core of most of our UI projects. You cannot have a scalable, rich user experience in a web interactive tool without a proper framework to support it. Our apps are easier to maintain and grow thanks to the structured approach Angular provides.',
          icone: 'tech-angular.svg',
          link: '#'
        },
        {
          title: 'Node.JS',
          content: "It’s in 99% of our backend code is written in Node.JS. It’s flexible, it’s fast, it’s cool, and more than half of the globe's developers are coding on it. Even better, it’s supported by all decent hosting platforms.",
          icone: 'tech-node-js.svg',
          link: '#'
        },
        {
          title: "Nest JS",
          content: "NestJS is a framework for building efficient, scalable Node.js web applications. We love it! It's the perfect choice for our scalable project approach…and it’s also really cool. We're proud sponsors of Nest and think more people need to know about it!",
          icone: 'tech-nest-js.svg',
          link: '#'
        },
        {
          title: 'Xamarin',
          content: "Hands down, Xamarin is the best tool for app development, getting our products on all platforms in next to no time. With Xamarin Test Cloud we can also make sure our apps work perfectly on any device we're targeting, lowering costs and preventing consumer frustration.",
          icone: 'tech-xamarin.svg',
          link: '#'
        },
        {
          title: "MongoDB",
          content: "The arrival of MongoDB signalled a paradigm shift for us. As a non-relational database, it suddenly provided a degree of agility and flexibility that the relational ones couldn't. Even though most of our work still relies on Oracle, MS SQL, MySQL etc., we love any opportunity to play with Mongo. It's in a league of its own.",
          icone: 'tech-mongodb.svg',
          link: '#'
        },
        {
          title: 'Power BI',
          content: "With its ability to solve complex data integration and simplify automated reporting, Power BI is a slick, speedy and sophisticated platform. We love working with it: and it’s visually stunning, especially when you match it with other Microsoft 365 tools.",
          icone: 'tech-power-bi.svg',
          link: '#'
        },
        {
          title: 'Metabase',
          content: "Metabase is an elegant, easy and affordable approach to open source BI. You may not be able to spend your entire budget on a BI tool, and Metabase proves that you really don’t need to.",
          icone: 'tech-metabase.svg',
          link: '#'
        }
      ],
      ourWork: [
        {
          title: "Web and Mobile Development",
          description: "Our experienced Agile development teams can help offload your backlog of web or mobile development projects. We can help you design, build, and launch your mobile apps into the iOS and Android stores.",
          icone: "mdi-cellphone-link"
        },
        {
          title: "Cloud Migration",
          description: "The ArchitectNow team of Cloud experts can help you efficiently migrate your applications and services to Microsoft's Azure cloud platform. Already in the cloud? We can help monitor and maintain your solutions. We also help customers 'right size' the cloud investments by reviewing their architecture and implementations against their current spending patterns.",
          icone: "mdi-cloud-check"
        },
        {
          title: "CTO For Hire",
          description: "We partner with companies to give this kind of strategic technical guidance at the highest level to make sure they succeed because of their technology, not despite it.",
          icone: "mdi-handshake-outline"
        },
        {
          title: "App Modernization",
          description: "We guide customers through the application modernization process, and in most cases do the work for them while taking every opportunity possible along the way to mentor and grow their team's skills to enhance and support these new platforms.",
          icone: "mdi-cellphone-iphone"
        },
        {
          title: "Development Process Consulting",
          description: "Anything worth doing is worth doing right, especially when it comes to building your own software. We can help your team optimize their development process to make them more efficient in their work and to raise the overall quality of the products they are delivering.",
          icone: "mdi-arrow-decision"
        }
      ]
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
    massageErrors () {
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

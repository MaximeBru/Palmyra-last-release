<template>
  <section class="container">

  <!-- ... -->
<h1 class="title">
      Contact
    </h1>
    <div class="content">
      <form>
        <label class="form-label" for="name">
          Name:
        </label>
        <input class="form-field" name="name" id="name" v-model="Email.name" />
        <label class="form-label" for="email">
          Email:
        </label>
        <input class="form-field" name="email" id="email" v-model="Email.email"/>
        <label class="form-label" for="message">
          nickname
        </label>
        <input class="form-field" name="nickname" id="nickname" v-model="Email.firstname" />
        <label class="form-label" for="message">
          society:
        </label>
        <input class="form-field" name="society" id="society" v-model="Email.society" />
        <input class="form-button" type="submit" value="Send message" @click="addToApi" />
      </form>
    </div>

</section>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions, mapMutations } from 'vuex'
/* import { init } from './shared' */
import axios from 'axios'
import VueMoment from 'vue-moment'
import * as moment from 'moment'
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = 'http://localhost:1337/emails'
const strapi = new Strapi(apiUrl)
export default {
  head: {},
  async created() {
    const res = await axios('http://localhost:1337')

    console.log('res', res)
    this.$store.commit('initial', res.data)
  },

  data() {
    return {
      Email: {
        name: '',
        firstname: '',
        email: '',
        society: '',
        loading: false
      }
    }
  },
  methods: {
    addToApi() {
      let newEmail = {
        name: this.Email.name,
        firstname: this.Email.firstname,
        email: this.Email.email,
        society: this.Email.society
      }
      console.log('newemail', newEmail)
      axios
        .post('http://localhost:1337/emails', newEmail)
        .then(respone => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  computed: {
    ...mapState({
      infos: state => state.infos,
      list: state => state.list
    })
  },
  components: {}
}
</script>
<style lang="css">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>


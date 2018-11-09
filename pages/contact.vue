<template>
  <section class="container">

  <!-- ... -->
<h1 class="title">
      Contact
    </h1>
    <div class="content">

        <b-btn v-b-modal.modal1>Demande d'Information</b-btn>

  <!-- Modal Component -->
  <b-modal ref="myModalRef" v-b-modal.modallg variant="primary" hide-footer @ok="addToApi" id="modal1" title="Demande d'Information">
    <p class="my-4">We'll send you the doc by mail</p>
    <b-form>
      <b-form-group id="exampleInputGroup1"
                    label-for="name">
        <b-form-label class="form-label" for="name">
          Name:
        </b-form-label>
        <b-form-input class="form-field" name="name" id="name" v-model="Email.name" />
         </b-form-group>

      <b-form-group
                    label-for="email"
                    description="We'll never share your email with anyone else.">

        <b-form-label class="form-label" for="email">
          Email:
        </b-form-label>
        <b-form-input class="form-field" name="email" id="email" v-model="Email.email"/>
      </b-form-group>
      <b-form-group label-for="firstname">
        <b-form-label class="form-label" for="message">
          firstname
        </b-form-label>
        <b-form-input class="form-field" name="nickname" id="nickname" v-model="Email.firstname" />
      </b-form-group>
      <b-form-group label-for="firstname">
        <b-form-label class="form-label" for="message">
          society:
        </b-form-label>
        <b-form-input class="form-field" name="society" id="society" v-model="Email.society" />
      </b-form-group>
    </b-form>
          <b-btn size="sm" class="float-right" block variant="outline-primary" @click="addToApi ">
           Send
         </b-btn>

         <b-btn size="sm" class="float-right" block variant="outline-danger" @click="hideModal">
           Close
         </b-btn>


  </b-modal>


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
      this.$refs.myModalRef.hide()
    },

    hideModal() {
      this.$refs.myModalRef.hide()
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


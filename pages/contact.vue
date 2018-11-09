<template>
  <section class="container">
    <div class="content">


    <form>

        <label  name="name" >
          Name:
        </label>
        <input  name="name" id="name" v-model="Email.name" />



        <label  name="email">
          Email:
        </label>
        <input  name="email" id="email" v-model="Email.email"/>

        <label name="firstname"  >
          firstname
        </label>
        <input  name="firstname" id="firstname" v-model="Email.firstname" />


        <label  name="society" >
          society:
        </label>
        <input  name="society" id="society" v-model="Email.society" />
          <input type="submit"    @click="addToApi">

    </form>






    </div>

</section>
</template>

<script>
import Vue from 'vue'
/* import BootstrapVue from 'bootstrap-vue' */
import { mapState, mapActions, mapMutations } from 'vuex'
/* import { init } from './shared' */
import axios from 'axios'
import VueMoment from 'vue-moment'
import * as moment from 'moment'
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
    }
  },

  computed: {
    ...mapState({
      infos: state => state.email,
      list: state => state.list
    })
  },
  components: {}
}
</script>
<style lang="css">
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>


<template>
  <section class="container">
</header>
<main>
  <!-- ... -->

    <div class="content">
      <h1 class="title">
      Contact
     </h1>

  <b-btn v-b-modal.modal1>Demande d'Information</b-btn>

  <!-- Modal Component -->
  <b-modal ref="myModalRef" v-b-modal.modallg variant="primary" hide-footer @ok="addToApi" id="modal1" title="Demande d'Information">
    <p class="my-4">We'll send you the doc by mail</p>
    <b-form >
      <b-form-group id="exampleInputGroup1"
                    label-for="name">
        <b-form-group class="form-label" for="name" >
          Name:
        </b-form-group>

          <b-form-input class="form-field" name="name" id="name" v-validate="'required|min:2'" v-model="Email.name"/>
          <span class="error">{{ errors.first('name') }}</span>
      </b-form-group>

    <b-form-group label-for="email" description="We'll never share your email with anyone else.">

        <b-form-group class="form-label" for="email">
          Email:
        </b-form-group>
        <b-form-input class="form-field" name="email" id="email" v-model="Email.email" v-validate = "'required|email'"/>
        <span class="error">{{ errors.first('email') }}</span>
    </b-form-group>
    <b-form-group label-for="firstname">
        <b-form-group class="form-label" for="message">
          Firstname
        </b-form-group>
        <b-form-input class="form-field" name="firstname" id="firstname" v-validate="'required|min:2'" v-model="Email.firstname" />
         <span class="error">{{ errors.first('firstname') }}</span>
    </b-form-group>
      <b-form-group label-for="firstname">
        <b-form-group class="form-label" for="message">
          Society:
        </b-form-group>
        <b-form-input class="form-field" name="society" id="society" v-validate="'required|min:2'" v-model="Email.society" />
         <span class="error">{{ errors.first('society') }}</span>
    </b-form-group>
        <b-btn size="sm" class="float-right" block variant="outline-primary" type="submit" @click="addToApi ">
           Send
        </b-btn>

        <b-btn size="sm" class="float-right" block variant="outline-danger" @click="hideModal">
           Close
        </b-btn>
    </b-form>



  </b-modal>


    </div>
</main>
</section>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions, mapMutations } from 'vuex'
import axios from 'axios'
import VueMoment from 'vue-moment'
import * as moment from 'moment'
import VeeValidate, { Validator } from 'vee-validate'

export default {
  inject: ['$validator'],
  head: {
    script: [
      {
        src: 'https://unpkg.com/vee-validate@latest'
      }
    ]
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
        .post('http://109.13.149.252/emails', newEmail)
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
    },
    validateBeforeSubmit(e) {
      this.$validator
        .validateAll()
        .then(x => {
          console.log(x)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },

  computed: {
    ...mapState({
      Emails: state => state.Emails,
      list: state => state.list
    })
    /*    errors: function() {
      return new ErrorBag()
    } */
  },
  components: {}
}
</script>


<style scoped>
.error {
  color: red;
}
</style>

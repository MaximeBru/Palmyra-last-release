<template>
  <section class="container">
    </header>
    <main>
      <!-- ... -->
      <div class="content">
        <h1 class="title">Contact</h1>

        <!-- <b-btn v-b-modal.modal1>Demande d'Information</b-btn> -->
        <section class="wrapper style1 align-center">
          <div class="inner medium">
            <h2>Demande d'information</h2>

            <!-- Modal Component -->
            <!--  <b-modal ref="myModalRef" v-b-modal.modallg variant="primary" hide-footer @ok="addToApi" id="modal1" title="Demande d'Information"> -->
            <p class="my-4">We'll send you the doc by mail</p>
            <b-form>
              <div class="fields">
                <div class="field half">
              <b-form-group id="exampleInputGroup1" label-for="name">
                <b-form-group class="form-label" for="name">Name:</b-form-group>

                <b-form-input
                  class="form-field"
                  name="name"
                  id="name"
                  v-validate="'required|min:2'"
                  v-model="Email.name"
                />
                <span class="error">{{ errors.first('name') }}</span>
              </b-form-group>
                </div>
                <div class="field half">
              <b-form-group
                label-for="email"
                description="We'll never share your email with anyone else."
              >
                <b-form-group class="form-label" for="email">Email:</b-form-group>
                <b-form-input
                  class="form-field"
                  name="email"
                  id="email"
                  v-model="Email.email"
                  v-validate="'required|email'"
                />
                <span class="error">{{ errors.first('email') }}</span>
              </b-form-group>
                </div>
                <div class="field half">
              <b-form-group label-for="firstname">
                <b-form-group class="form-label" for="message">Firstname</b-form-group>
                <b-form-input
                  class="form-field"
                  name="firstname"
                  id="firstname"
                  v-validate="'required|min:2'"
                  v-model="Email.firstname"
                />
                <span class="error">{{ errors.first('firstname') }}</span>
              </b-form-group>
                </div>
                <div class="field half">
              <b-form-group label-for="firstname">
                <b-form-group class="form-label" for="message">Society:</b-form-group>
                <b-form-input
                  class="form-field"
                  name="society"
                  id="society"
                  v-validate="'required|min:2'"
                  v-model="Email.society"
                />
                <span class="error">{{ errors.first('society') }}</span>
              </b-form-group>
                </div>
              </div>
              <b-btn size="sm" class="float-right" type="submit" @click="addToApi ">Send</b-btn>

              <!--        <b-btn size="sm" class="float-right" block variant="outline-danger" @click="hideModal">
           Close
              </b-btn>-->
            </b-form>
          </div>
        </section>
        <!-- </b-modal> -->
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
        .post('https://back-office-palmyra.digital-dev.fr/emails', newEmail)
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
form {
  min-height: 33rem;
  max-width: 99%;
}
.title{
      padding-top: 3rem;
    margin-left: 22rem;
}

/* style of the form */

input[type='submit'],
input[type='reset'],
input[type='button'],
button,
.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -moz-transition: background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  -ms-transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  letter-spacing: 0.125em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 0.75rem;
  max-width: 20rem;
  height: 3.75em;
  line-height: 3.75em;
  border-radius: 3.75em;
  padding: 0 2.5em;
  text-overflow: ellipsis;
  overflow: hidden;
}

input[type='submit'].icon:before,
input[type='reset'].icon:before,
input[type='button'].icon:before,
button.icon:before,
.button.icon:before {
  margin-right: 0.5rem;
}

input[type='submit'].fit,
input[type='reset'].fit,
input[type='button'].fit,
button.fit,
.button.fit {
  width: 100%;
}

input[type='submit'].small,
input[type='reset'].small,
input[type='button'].small,
button.small,
.button.small {
  font-size: 0.6rem;
  height: 3.325em;
  line-height: 3.325em;
  border-radius: 3.325em;
  padding: 0 2em;
}

input[type='submit'].large,
input[type='reset'].large,
input[type='button'].large,
button.large,
.button.large {
  font-size: 0.8rem;
  height: 4em;
  line-height: 4em;
  border-radius: 4em;
  padding: 0 3em;
}

input[type='submit'].wide,
input[type='reset'].wide,
input[type='button'].wide,
button.wide,
.button.wide {
  min-width: 14em;
}

input[type='submit'].disabled,
input[type='submit']:disabled,
input[type='reset'].disabled,
input[type='reset']:disabled,
input[type='button'].disabled,
input[type='button']:disabled,
button.disabled,
button:disabled,
.button.disabled,
.button:disabled {
  pointer-events: none;
  opacity: 0.25;
}

input[type='submit'],
input[type='reset'],
input[type='button'],
button,
.button {
  background-color: transparent;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
  color: #000000 !important;
}

input[type='submit']:hover,
input[type='reset']:hover,
input[type='button']:hover,
button:hover,
.button:hover {
  box-shadow: inset 0 0 0 1px #47d3e5;
  color: #47d3e5 !important;
}

input[type='submit']:active,
input[type='reset']:active,
input[type='button']:active,
button:active,
.button:active {
  background-color: rgba(71, 211, 229, 0.2);
  box-shadow: inset 0 0 0 1px #47d3e5;
  color: #47d3e5 !important;
}

input[type='submit'].primary,
input[type='reset'].primary,
input[type='button'].primary,
button.primary,
.button.primary {
  background-color: #000000;
  box-shadow: none;
  color: #ffffff !important;
}

input[type='submit'].primary:hover,
input[type='reset'].primary:hover,
input[type='button'].primary:hover,
button.primary:hover,
.button.primary:hover {
  background-color: #47d3e5;
}

input[type='submit'].primary:active,
input[type='reset'].primary:active,
input[type='button'].primary:active,
button.primary:active,
.button.primary:active {
  background-color: #1ebdd1;
}

/* Form */

form {
  margin: 0 0 2rem 0;
}

form > :last-child {
  margin-bottom: 0;
}

form > .fields {
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: calc(100% + 3rem);
  margin: -1.5rem 0 2rem -1.5rem;
}

form > .fields > .field {
  -moz-flex-grow: 0;
  -webkit-flex-grow: 0;
  -ms-flex-grow: 0;
  flex-grow: 0;
  -moz-flex-shrink: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;
  padding: 1.5rem 0 0 1.5rem;
  width: calc(100% - 1.5rem);
}

form > .fields > .field.half {
  width: calc(50% - 0.75rem);
}

form > .fields > .field.third {
  width: calc(100% / 3 - 0.5rem);
}

form > .fields > .field.quarter {
  width: calc(25% - 0.375rem);
}

@media screen and (max-width: 480px) {
  form > .fields {
    width: calc(100% + 3rem);
    margin: -1.5rem 0 2rem -1.5rem;
  }

  form > .fields > .field {
    padding: 1.5rem 0 0 1.5rem;
    width: calc(100% - 1.5rem);
  }

  form > .fields > .field.half {
    width: calc(100% - 1.5rem);
  }

  form > .fields > .field.third {
    width: calc(100% - 1.5rem);
  }

  form > .fields > .field.quarter {
    width: calc(100% - 1.5rem);
  }
}

label {
  display: block;
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0 0 1rem 0;
}

input[type='text'],
input[type='password'],
input[type='email'],
input[type='tel'],
input[type='search'],
input[type='url'],
select,
textarea {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  background-color: transparent;
  border-radius: 4px;
  border: none;
  border: solid 1px;
  color: inherit;
  display: block;
  outline: 0;
  padding: 0 0.825rem;
  text-decoration: none;
  width: 100%;
}

input[type='text']:invalid,
input[type='password']:invalid,
input[type='email']:invalid,
input[type='tel']:invalid,
input[type='search']:invalid,
input[type='url']:invalid,
select:invalid,
textarea:invalid {
  box-shadow: none;
}

select {
  background-size: 1.25rem;
  background-repeat: no-repeat;
  background-position: calc(100% - 1rem) center;
  height: 2.75rem;
  padding-right: 2.75rem;
  text-overflow: ellipsis;
}

select:focus::-ms-value {
  background-color: transparent;
}

select::-ms-expand {
  display: none;
}

input[type='text'],
input[type='password'],
input[type='email'],
input[type='tel'],
input[type='search'],
input[type='url'],
select {
  height: 2.75rem;
}

textarea {
  padding: 0.75rem 1rem;
}

input[type='checkbox'],
input[type='radio'] {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  display: block;
  float: left;
  margin-right: -2rem;
  opacity: 0;
  width: 1rem;
  z-index: -1;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  text-decoration: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 300;
  padding-left: 2.4rem;
  padding-right: 0.75rem;
  position: relative;
  margin-bottom: 0;
}

input[type='checkbox'] + label:before,
input[type='radio'] + label:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-transform: none !important;
}

input[type='checkbox'] + label:before,
input[type='radio'] + label:before {
  border-radius: 4px;
  border: solid 1px;
  content: '';
  display: inline-block;
  height: 1.65rem;
  left: 0;
  line-height: 1.58125rem;
  position: absolute;
  text-align: center;
  top: 0;
  width: 1.65rem;
}

input[type='checkbox']:checked + label:before,
input[type='radio']:checked + label:before {
  content: '\f00c';
}

input[type='checkbox'] + label:before {
  border-radius: 4px;
}

input[type='radio'] + label:before {
  border-radius: 100%;
}

::-webkit-input-placeholder {
  opacity: 1;
}

:-moz-placeholder {
  opacity: 1;
}

::-moz-placeholder {
  opacity: 1;
}

:-ms-input-placeholder {
  opacity: 1;
}

label {
  color: #000000;
}

input[type='text'],
input[type='password'],
input[type='email'],
input[type='tel'],
input[type='search'],
input[type='url'],
select,
textarea {
  border-color: rgba(0, 0, 0, 0.2);
}

input[type='text']:focus,
input[type='password']:focus,
input[type='email']:focus,
input[type='tel']:focus,
input[type='search']:focus,
input[type='url']:focus,
select:focus,
textarea:focus {
  border-color: #47d3e5;
  box-shadow: 0 0 0 1px #47d3e5;
}

select {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(0, 0, 0, 0.2)' /%3E%3C/svg%3E");
}

select option {
  color: #000000;
  background: #ffffff;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  color: #000000;
}

input[type='checkbox'] + label:before,
input[type='radio'] + label:before {
  border-color: rgba(0, 0, 0, 0.2);
}

input[type='checkbox']:checked + label:before,
input[type='radio']:checked + label:before {
  background-color: #000000;
  border-color: #000000;
  color: #ffffff;
}

input[type='checkbox']:focus + label:before,
input[type='radio']:focus + label:before {
  border-color: #47d3e5;
  box-shadow: 0 0 0 1px #47d3e5;
}

::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.75) !important;
}

:-moz-placeholder {
  color: rgba(0, 0, 0, 0.75) !important;
}

::-moz-placeholder {
  color: rgba(0, 0, 0, 0.75) !important;
}

:-ms-input-placeholder {
  color: rgba(0, 0, 0, 0.75) !important;
}

/* Icon */

.icon {
  text-decoration: none;
  border-bottom: none;
  position: relative;
  text-align: center;
}

.icon:before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-transform: none !important;
}

.icon > .label {
  display: none;
}

.icon.style2:before {
  border-radius: 2.75em;
  display: inline-block;
  height: 2.75em;
  line-height: 2.75em;
  width: 2.75em;
}

.icon.major {
  display: block;
  margin: 0 0 1rem 0;
}

.icon.major:before {
  font-size: 1.25rem;
}

a.icon.style2:before {
  -moz-transition: background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  -ms-transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
}

.icon.style2:before {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
}

a.icon.style2:hover:before {
  box-shadow: inset 0 0 0 1px #47d3e5;
  color: #47d3e5;
}

a.icon.style2:active:before {
  background-color: rgba(71, 211, 229, 0.1);
  box-shadow: inset 0 0 0 1px #47d3e5;
  color: #47d3e5;
}
header p {
  position: relative;
  margin: -0.65rem 0 1.5rem 0;
  font-style: italic;
}

header h1 + p {
  font-size: 1.375rem;
}

header h2 + p {
  font-size: 1.25rem;
}

header h3 + p {
  font-size: 1.1rem;
}

header h4 + p,
header h5 + p,
header h6 + p {
  font-size: 0.9rem;
}

header p {
  color: rgba(0, 0, 0, 0.75);
}

.wrapper.style1 > .inner {
		padding: 7rem 3.5rem 5rem 3.5rem ;
		margin: 0 auto;
		max-width: 100%;
		width: 64rem;
	}

		.wrapper.style1 > .inner.medium {
			width: 48rem;
		}

		.wrapper.style1 > .inner.small {
			width: 32rem;
		}

	@media screen and (max-width: 1680px) {

		.wrapper.style1 > .inner {
			padding: 5rem 2.5rem 3rem 2.5rem ;
		}

	}

	@media screen and (max-width: 1280px) {

		.wrapper.style1 > .inner {
			padding: 4rem 4rem 2rem 4rem ;
		}

	}

	@media screen and (max-width: 980px) {

		.wrapper.style1 > .inner {
			padding: 4.5rem 3rem 2.5rem 3rem ;
		}

	}

	@media screen and (max-width: 736px) {

		.wrapper.style1 > .inner {
			padding: 3rem 2rem 1rem 2rem ;
		}

	}

/* Wrapper (style2) */

	.wrapper.style2 {
		padding: 7rem;
		background-color: #eeeeee;
	}

		.wrapper.style2 > .inner {
			padding: 5.25rem 3.5rem 3.25rem 3.5rem ;
			background-color: #ffffff;
			border-radius: 0.5rem;
			margin: 0 auto;
			max-width: 100%;
			position: relative;
			width: 64rem;
			z-index: 1;
		}

			.wrapper.style2 > .inner.medium {
				width: 48rem;
			}

			.wrapper.style2 > .inner.small {
				width: 32rem;
			}

		@media screen and (max-width: 1680px) {

			.wrapper.style2 {
				padding: 5rem;
			}

				.wrapper.style2 > .inner {
					padding: 3.75rem 2.5rem 1.75rem 2.5rem ;
				}

		}

		@media screen and (max-width: 1280px) {

			.wrapper.style2 {
				padding: 4rem;
			}

				.wrapper.style2 > .inner {
					padding: 3rem 2rem 1rem 2rem ;
				}

		}

		@media screen and (max-width: 980px) {

			.wrapper.style2 {
				padding: 2.25rem;
			}

				.wrapper.style2 > .inner {
					padding: 3rem 2.25rem 1rem 2.25rem ;
				}

		}

		@media screen and (max-width: 736px) {

			.wrapper.style2 {
				padding: 1.5rem;
			}

				.wrapper.style2 > .inner {
					padding: 2rem 1.5rem 0.1rem 1.5rem ;
				}

		}

	#wrapper > .wrapper.style2.invert:not(.color1):not(.color2):not(.color3):not(.color4):not(.color5):not(.color6):not(.color7) {
		background-color: #222222;
	}

	#wrapper > .wrapper.style2.invert > .inner {
		background-color: #000000;
	}

/* Items (transitions) */

	.items.onload-fade-in > * > .inner {
		-moz-transition: opacity 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out;
		-moz-transition-delay: 2.4s;
		-webkit-transition-delay: 2.4s;
		-ms-transition-delay: 2.4s;
		transition-delay: 2.4s;
	}

	.items.onload-fade-in > *:nth-child(1) > .inner {
		-moz-transition-delay: 0s;
		-webkit-transition-delay: 0s;
		-ms-transition-delay: 0s;
		transition-delay: 0s;
	}

	.items.onload-fade-in > *:nth-child(2) > .inner {
		-moz-transition-delay: 0.15s;
		-webkit-transition-delay: 0.15s;
		-ms-transition-delay: 0.15s;
		transition-delay: 0.15s;
	}

	.items.onload-fade-in > *:nth-child(3) > .inner {
		-moz-transition-delay: 0.3s;
		-webkit-transition-delay: 0.3s;
		-ms-transition-delay: 0.3s;
		transition-delay: 0.3s;
	}

	.items.onload-fade-in > *:nth-child(4) > .inner {
		-moz-transition-delay: 0.45s;
		-webkit-transition-delay: 0.45s;
		-ms-transition-delay: 0.45s;
		transition-delay: 0.45s;
	}

	.items.onload-fade-in > *:nth-child(5) > .inner {
		-moz-transition-delay: 0.6s;
		-webkit-transition-delay: 0.6s;
		-ms-transition-delay: 0.6s;
		transition-delay: 0.6s;
	}

	.items.onload-fade-in > *:nth-child(6) > .inner {
		-moz-transition-delay: 0.75s;
		-webkit-transition-delay: 0.75s;
		-ms-transition-delay: 0.75s;
		transition-delay: 0.75s;
	}

	.items.onload-fade-in > *:nth-child(7) > .inner {
		-moz-transition-delay: 0.9s;
		-webkit-transition-delay: 0.9s;
		-ms-transition-delay: 0.9s;
		transition-delay: 0.9s;
	}

	.items.onload-fade-in > *:nth-child(8) > .inner {
		-moz-transition-delay: 1.05s;
		-webkit-transition-delay: 1.05s;
		-ms-transition-delay: 1.05s;
		transition-delay: 1.05s;
	}

	.items.onload-fade-in > *:nth-child(9) > .inner {
		-moz-transition-delay: 1.2s;
		-webkit-transition-delay: 1.2s;
		-ms-transition-delay: 1.2s;
		transition-delay: 1.2s;
	}

	.items.onload-fade-in > *:nth-child(10) > .inner {
		-moz-transition-delay: 1.35s;
		-webkit-transition-delay: 1.35s;
		-ms-transition-delay: 1.35s;
		transition-delay: 1.35s;
	}

	.items.onload-fade-in > *:nth-child(11) > .inner {
		-moz-transition-delay: 1.5s;
		-webkit-transition-delay: 1.5s;
		-ms-transition-delay: 1.5s;
		transition-delay: 1.5s;
	}

	.items.onload-fade-in > *:nth-child(12) > .inner {
		-moz-transition-delay: 1.65s;
		-webkit-transition-delay: 1.65s;
		-ms-transition-delay: 1.65s;
		transition-delay: 1.65s;
	}

	.items.onload-fade-in > *:nth-child(13) > .inner {
		-moz-transition-delay: 1.8s;
		-webkit-transition-delay: 1.8s;
		-ms-transition-delay: 1.8s;
		transition-delay: 1.8s;
	}

	.items.onload-fade-in > *:nth-child(14) > .inner {
		-moz-transition-delay: 1.95s;
		-webkit-transition-delay: 1.95s;
		-ms-transition-delay: 1.95s;
		transition-delay: 1.95s;
	}

	.items.onload-fade-in > *:nth-child(15) > .inner {
		-moz-transition-delay: 2.1s;
		-webkit-transition-delay: 2.1s;
		-ms-transition-delay: 2.1s;
		transition-delay: 2.1s;
	}

	.items.onload-fade-in > *:nth-child(16) > .inner {
		-moz-transition-delay: 2.25s;
		-webkit-transition-delay: 2.25s;
		-ms-transition-delay: 2.25s;
		transition-delay: 2.25s;
	}

	.items.onload-fade-in > *:nth-child(17) > .inner {
		-moz-transition-delay: 2.4s;
		-webkit-transition-delay: 2.4s;
		-ms-transition-delay: 2.4s;
		transition-delay: 2.4s;
	}

	body.is-preload .items.onload-fade-in > * > .inner {
		opacity: 0;
	}

	.items.onscroll-fade-in > * > .inner {
		-moz-transition: opacity 0.75s ease-in-out;
		-webkit-transition: opacity 0.75s ease-in-out;
		-ms-transition: opacity 0.75s ease-in-out;
		transition: opacity 0.75s ease-in-out;
		-moz-transition-delay: 2.4s;
		-webkit-transition-delay: 2.4s;
		-ms-transition-delay: 2.4s;
		transition-delay: 2.4s;
	}

	.items.onscroll-fade-in > *:nth-child(1) > .inner {
		-moz-transition-delay: 0s;
		-webkit-transition-delay: 0s;
		-ms-transition-delay: 0s;
		transition-delay: 0s;
	}

	.items.onscroll-fade-in > *:nth-child(2) > .inner {
		-moz-transition-delay: 0.15s;
		-webkit-transition-delay: 0.15s;
		-ms-transition-delay: 0.15s;
		transition-delay: 0.15s;
	}

	.items.onscroll-fade-in > *:nth-child(3) > .inner {
		-moz-transition-delay: 0.3s;
		-webkit-transition-delay: 0.3s;
		-ms-transition-delay: 0.3s;
		transition-delay: 0.3s;
	}

	.items.onscroll-fade-in > *:nth-child(4) > .inner {
		-moz-transition-delay: 0.45s;
		-webkit-transition-delay: 0.45s;
		-ms-transition-delay: 0.45s;
		transition-delay: 0.45s;
	}

	.items.onscroll-fade-in > *:nth-child(5) > .inner {
		-moz-transition-delay: 0.6s;
		-webkit-transition-delay: 0.6s;
		-ms-transition-delay: 0.6s;
		transition-delay: 0.6s;
	}

	.items.onscroll-fade-in > *:nth-child(6) > .inner {
		-moz-transition-delay: 0.75s;
		-webkit-transition-delay: 0.75s;
		-ms-transition-delay: 0.75s;
		transition-delay: 0.75s;
	}

	.items.onscroll-fade-in > *:nth-child(7) > .inner {
		-moz-transition-delay: 0.9s;
		-webkit-transition-delay: 0.9s;
		-ms-transition-delay: 0.9s;
		transition-delay: 0.9s;
	}

	.items.onscroll-fade-in > *:nth-child(8) > .inner {
		-moz-transition-delay: 1.05s;
		-webkit-transition-delay: 1.05s;
		-ms-transition-delay: 1.05s;
		transition-delay: 1.05s;
	}

	.items.onscroll-fade-in > *:nth-child(9) > .inner {
		-moz-transition-delay: 1.2s;
		-webkit-transition-delay: 1.2s;
		-ms-transition-delay: 1.2s;
		transition-delay: 1.2s;
	}

	.items.onscroll-fade-in > *:nth-child(10) > .inner {
		-moz-transition-delay: 1.35s;
		-webkit-transition-delay: 1.35s;
		-ms-transition-delay: 1.35s;
		transition-delay: 1.35s;
	}

	.items.onscroll-fade-in > *:nth-child(11) > .inner {
		-moz-transition-delay: 1.5s;
		-webkit-transition-delay: 1.5s;
		-ms-transition-delay: 1.5s;
		transition-delay: 1.5s;
	}

	.items.onscroll-fade-in > *:nth-child(12) > .inner {
		-moz-transition-delay: 1.65s;
		-webkit-transition-delay: 1.65s;
		-ms-transition-delay: 1.65s;
		transition-delay: 1.65s;
	}

	.items.onscroll-fade-in > *:nth-child(13) > .inner {
		-moz-transition-delay: 1.8s;
		-webkit-transition-delay: 1.8s;
		-ms-transition-delay: 1.8s;
		transition-delay: 1.8s;
	}

	.items.onscroll-fade-in > *:nth-child(14) > .inner {
		-moz-transition-delay: 1.95s;
		-webkit-transition-delay: 1.95s;
		-ms-transition-delay: 1.95s;
		transition-delay: 1.95s;
	}

	.items.onscroll-fade-in > *:nth-child(15) > .inner {
		-moz-transition-delay: 2.1s;
		-webkit-transition-delay: 2.1s;
		-ms-transition-delay: 2.1s;
		transition-delay: 2.1s;
	}

	.items.onscroll-fade-in > *:nth-child(16) > .inner {
		-moz-transition-delay: 2.25s;
		-webkit-transition-delay: 2.25s;
		-ms-transition-delay: 2.25s;
		transition-delay: 2.25s;
	}

	.items.onscroll-fade-in > *:nth-child(17) > .inner {
		-moz-transition-delay: 2.4s;
		-webkit-transition-delay: 2.4s;
		-ms-transition-delay: 2.4s;
		transition-delay: 2.4s;
	}

	.items.onscroll-fade-in.is-inactive > * > .inner {
		opacity: 0;
  }

  .wrapper.style1 > .inner {
		padding: 7rem 3.5rem 5rem 3.5rem ;
		margin: 0 auto;
		max-width: 100%;
		width: 64rem;
	}

		.wrapper.style1 > .inner.medium {
			width: 48rem;
		}

		.wrapper.style1 > .inner.small {
			width: 32rem;
		}

	@media screen and (max-width: 1680px) {

		.wrapper.style1 > .inner {
			padding: 5rem 2.5rem 3rem 2.5rem ;
		}

	}

	@media screen and (max-width: 1280px) {

		.wrapper.style1 > .inner {
			padding: 4rem 4rem 2rem 4rem ;
		}

	}

	@media screen and (max-width: 980px) {

		.wrapper.style1 > .inner {
			padding: 4.5rem 3rem 2.5rem 3rem ;
		}

	}

	@media screen and (max-width: 736px) {

		.wrapper.style1 > .inner {
			padding: 3rem 2rem 1rem 2rem ;
		}

  }

  	#wrapper {
		background-color: inherit;
		width: 100%;
		overflow-x: hidden;
	}

		#wrapper > .invert {
			background-color: #000000;
			color: #ffffff;
		}

			#wrapper > .invert input, #wrapper > .invert select, #wrapper > .invert textarea {
				color: #ffffff;
			}

			#wrapper > .invert a {
				color: #ffffff;
			}

				#wrapper > .invert a:hover {
					color: #47D3E5;
				}

			#wrapper > .invert strong, #wrapper > .invert b {
				color: #ffffff;
			}

			#wrapper > .invert h1, #wrapper > .invert h2, #wrapper > .invert h3, #wrapper > .invert h4, #wrapper > .invert h5, #wrapper > .invert h6 {
				color: #ffffff;
			}

			#wrapper > .invert blockquote {
				border-left-color: white;
			}

			#wrapper > .invert code {
				background: rgba(255, 255, 255, 0.125);
				border-color: white;
			}

			#wrapper > .invert hr {
				border-bottom-color: white;
			}

			#wrapper > .invert .box {
				border-color: white;
			}

			#wrapper > .invert input[type="submit"],
			#wrapper > .invert input[type="reset"],
			#wrapper > .invert input[type="button"],
			#wrapper > .invert button,
			#wrapper > .invert .button {
				background-color: transparent;
				box-shadow: inset 0 0 0 1px white;
				color: #ffffff !important;
			}

				#wrapper > .invert input[type="submit"]:hover,
				#wrapper > .invert input[type="reset"]:hover,
				#wrapper > .invert input[type="button"]:hover,
				#wrapper > .invert button:hover,
				#wrapper > .invert .button:hover {
					box-shadow: inset 0 0 0 1px #47D3E5;
					color: #47D3E5 !important;
				}

				#wrapper > .invert input[type="submit"]:active,
				#wrapper > .invert input[type="reset"]:active,
				#wrapper > .invert input[type="button"]:active,
				#wrapper > .invert button:active,
				#wrapper > .invert .button:active {
					background-color: rgba(71, 211, 229, 0.2);
					box-shadow: inset 0 0 0 1px #47D3E5;
					color: #47D3E5 !important;
				}

				#wrapper > .invert input[type="submit"].primary,
				#wrapper > .invert input[type="reset"].primary,
				#wrapper > .invert input[type="button"].primary,
				#wrapper > .invert button.primary,
				#wrapper > .invert .button.primary {
					background-color: #ffffff;
					box-shadow: none;
					color: #000000 !important;
				}

					#wrapper > .invert input[type="submit"].primary:hover,
					#wrapper > .invert input[type="reset"].primary:hover,
					#wrapper > .invert input[type="button"].primary:hover,
					#wrapper > .invert button.primary:hover,
					#wrapper > .invert .button.primary:hover {
						background-color: #47D3E5;
					}

					#wrapper > .invert input[type="submit"].primary:active,
					#wrapper > .invert input[type="reset"].primary:active,
					#wrapper > .invert input[type="button"].primary:active,
					#wrapper > .invert button.primary:active,
					#wrapper > .invert .button.primary:active {
						background-color: #1ebdd1;
					}

			#wrapper > .invert label {
				color: #ffffff;
			}

			#wrapper > .invert input[type="text"],
			#wrapper > .invert input[type="password"],
			#wrapper > .invert input[type="email"],
			#wrapper > .invert input[type="tel"],
			#wrapper > .invert input[type="search"],
			#wrapper > .invert input[type="url"],
			#wrapper > .invert select,
			#wrapper > .invert textarea {
				border-color: white;
			}

				#wrapper > .invert input[type="text"]:focus,
				#wrapper > .invert input[type="password"]:focus,
				#wrapper > .invert input[type="email"]:focus,
				#wrapper > .invert input[type="tel"]:focus,
				#wrapper > .invert input[type="search"]:focus,
				#wrapper > .invert input[type="url"]:focus,
				#wrapper > .invert select:focus,
				#wrapper > .invert textarea:focus {
					border-color: #47D3E5;
					box-shadow: 0 0 0 1px #47D3E5;
				}

			#wrapper > .invert select {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='rgba(0, 0, 0, 0.2)' /%3E%3C/svg%3E");
			}

				#wrapper > .invert select option {
					color: #000000;
					background: #ffffff;
				}

			#wrapper > .invert input[type="checkbox"] + label,
			#wrapper > .invert input[type="radio"] + label {
				color: #ffffff;
			}

				#wrapper > .invert input[type="checkbox"] + label:before,
				#wrapper > .invert input[type="radio"] + label:before {
					border-color: white;
				}

			#wrapper > .invert input[type="checkbox"]:checked + label:before,
			#wrapper > .invert input[type="radio"]:checked + label:before {
				background-color: #ffffff;
				border-color: #ffffff;
				color: #000000;
			}

			#wrapper > .invert input[type="checkbox"]:focus + label:before,
			#wrapper > .invert input[type="radio"]:focus + label:before {
				border-color: #47D3E5;
				box-shadow: 0 0 0 1px #47D3E5;
			}

			#wrapper > .invert ::-webkit-input-placeholder {
				color: #ffffff !important;
			}

			#wrapper > .invert :-moz-placeholder {
				color: #ffffff !important;
			}

			#wrapper > .invert ::-moz-placeholder {
				color: #ffffff !important;
			}

			#wrapper > .invert :-ms-input-placeholder {
				color: #ffffff !important;
			}

			#wrapper > .invert .icon.style2:before {
				box-shadow: inset 0 0 0 1px white;
			}

			#wrapper > .invert a.icon.style2:hover:before {
				box-shadow: inset 0 0 0 1px #47D3E5;
				color: #47D3E5;
			}

			#wrapper > .invert a.icon.style2:active:before {
				background-color: rgba(71, 211, 229, 0.1);
				box-shadow: inset 0 0 0 1px #47D3E5;
				color: #47D3E5;
			}

			#wrapper > .invert ul.alt li {
				border-top-color: white;
			}

			#wrapper > .invert header p {
				color: #ffffff;
			}

			#wrapper > .invert table tbody tr {
				border-color: white;
			}

				#wrapper > .invert table tbody tr:nth-child(2n + 1) {
					background-color: rgba(255, 255, 255, 0.125);
				}

				#wrapper > .invert table tbody tr.alt {
					background-color: rgba(255, 255, 255, 0.125) !important;
				}

			#wrapper > .invert table th {
				color: #ffffff;
			}

			#wrapper > .invert table thead {
				border-bottom-color: white;
			}

			#wrapper > .invert table tfoot {
				border-top-color: white;
			}

			#wrapper > .invert table.alt tbody tr td {
				border-color: white;
			}

			#wrapper > .invert table.uniform tbody tr:nth-child(2n + 1) {
				background-color: transparent;
			}

			#wrapper > .invert .banner .image {
				background-color: rgba(255, 255, 255, 0.125);
			}

			#wrapper > .invert .banner.style4 .image {
				border-color: white;
				background-color: white;
				border-width: 1px;
			}

				#wrapper > .invert .banner.style4 .image:before {
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64px' height='32px' viewBox='0 0 64 32' zoomAndPan='disable'%3E%3Cstyle%3Erect %7Bfill: transparent%3B stroke: white%3B stroke-width: 1px%3B %7D%3C/style%3E%3Crect rx='4' ry='4' x='11' y='12' width='42' height='8' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
					border-color: white;
					width: calc(100% + 2px);
					margin-left: -1px;
				}

				#wrapper > .invert .banner.style4 .image:after {
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64px' height='32px' viewBox='0 0 64 32' zoomAndPan='disable'%3E%3Cstyle%3Ecircle %7Bfill: transparent%3B stroke: white%3B stroke-width: 1px%3B %7D%3C/style%3E%3Ccircle cx='32' cy='16' r='14' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
					border-color: white;
					width: calc(100% + 2px);
					margin-left: -1px;
				}

			#wrapper > .invert .banner.style4.android .image:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64px' height='32px' viewBox='0 0 64 32' zoomAndPan='disable'%3E%3Cstyle%3Erect %7Bfill: transparent%3B stroke: white%3B stroke-width: 1px%3B %7D%3C/style%3E%3Crect rx='4' ry='4' x='6' y='4' width='52' height='24' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
			}

			#wrapper > .invert .spotlight .image {
				background-color: rgba(255, 255, 255, 0.125);
			}

			#wrapper > .invert .spotlight.style3 .image {
				border-color: white;
				background-color: white;
				border-width: 1px;
			}

				#wrapper > .invert .spotlight.style3 .image:before {
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64px' height='32px' viewBox='0 0 64 32' zoomAndPan='disable'%3E%3Cstyle%3Erect %7Bfill: transparent%3B stroke: white%3B stroke-width: 1px%3B %7D%3C/style%3E%3Crect rx='4' ry='4' x='11' y='12' width='42' height='8' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
					border-color: white;
					width: calc(100% + 2px);
					margin-left: -1px;
				}

				#wrapper > .invert .spotlight.style3 .image:after {
					background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64px' height='32px' viewBox='0 0 64 32' zoomAndPan='disable'%3E%3Cstyle%3Ecircle %7Bfill: transparent%3B stroke: white%3B stroke-width: 1px%3B %7D%3C/style%3E%3Ccircle cx='32' cy='16' r='14' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
					border-color: white;
					width: calc(100% + 2px);
					margin-left: -1px;
				}

			#wrapper > .invert .spotlight.style3.android .image:after {
				background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='64px' height='32px' viewBox='0 0 64 32' zoomAndPan='disable'%3E%3Cstyle%3Erect %7Bfill: transparent%3B stroke: white%3B stroke-width: 1px%3B %7D%3C/style%3E%3Crect rx='4' ry='4' x='6' y='4' width='52' height='24' vector-effect='non-scaling-stroke' /%3E%3C/svg%3E");
			}

			#wrapper > .invert .gallery article .image {
				background-color: rgba(255, 255, 255, 0.125);
			}

			#wrapper > .invert .items.style1 > * {
				border-color: white;
			}

			#wrapper > .invert .items.style2 {
				border-color: white;
			}

				#wrapper > .invert .items.style2 > * {
					border-color: white;
				}

			#wrapper > .invert .index > * {
				border-top-color: white;
			}

		#wrapper > .color1 {
			background-color: #30363d;
		}

		#wrapper > .color2 {
			background-color: #db8992;
		}

		#wrapper > .color3 {
			background-color: #ab7aad;
		}

		#wrapper > .color4 {
			background-color: #897cad;
		}

		#wrapper > .color5 {
			background-color: #7794ce;
		}

		#wrapper > .color6 {
			background-color: #64abb4;
		}

		#wrapper > .color7 {
			background-color: #6ba78c;
		}

		#wrapper.divided > * {
			box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.075);
		}

			#wrapper.divided > *:first-child {
				box-shadow: none !important;
			}

		#wrapper.divided > .invert {
			box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.125);
		}

			#wrapper.divided > .invert:first-child {
				box-shadow: none !important;
			}
</style>

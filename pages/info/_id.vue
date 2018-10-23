<template>
    <section class="section">
        <div class="container">
            <h3>{{info.title }}</h3>
            <p>{{info.description || 'No description provided.' }}</p>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
import VueMoment from 'vue-moment'
import * as moment from 'moment'

export default {
  head: {},

  async created() {
    const res = await axios(
      'http://localhost:1337/infos/' + this.$route.params.id
    )
    this.$store.commit('get_info', res.data)
    /* const info = res.data */
    console.log('res', res)

    console.log('res2', res.data.title)
    console.log('info', info)
  },

  computed: {
    ...mapState({
      info: state => state.info,
      id: state => state.id
    })
  },
  methods: {
    ...mapMutations(['get_info'])
  },
  components: {}
}
</script>


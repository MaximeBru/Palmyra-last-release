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

    const info = res.data
    console.log('res', res)
    this.$store.commit('info', res.data)
    console.log('res2', res.data.title)
    console.log('info', info)
  },
  computed: {
    ...mapState({
      list: state => state.list,
      imageUrl: state => state.infos.image.Url,
      info: state => state.info
    })
  },

  methods: {
    ...mapMutations(['set', 'increment', 'reset'])
  },
  components: {}
}
</script>


<template>
    <section class="section">
        <div class="container">
            <h3>{{info.title }}</h3>
            <p>{{info.description || 'No description provided.' }}</p>
         <p>{{info.date}} </p>
         <img :src="'http://localhost:1337' + info.image.url" alt="sample66" />
         <div><span>{{$moment( info.date ).format('DD')}}</span><span>{{$moment( info.date ).format('MMM')}}</span></div><i :class="info.logo.code"></i>
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

  /*   async created() {
    const res = await axios(
      'http://localhost:1337/infos/' + this.$route.params.id
    )
    this.$store.commit('initial', res.data)
    this.$store.commit('get_info', res.data)
    this.$store.commit('get_imageUrl', res.data)
    console.log('res', res)

    console.log('res2', res.data.title)
    console.log('info', info)
  }, */
  asyncData({ params }, callback) {
    axios
      .get(`http://localhost:1337/infos/${params.id}`)
      .then(res => {
        callback(null, { info: res.data })
      })
      .catch(e => {
        callback({ statusCode: 404, message: 'Post not found' })
      })
  },
  computed: {
    ...mapState({
      info: state => state.info,
      id: state => state.id,
      imageUrl: state => state.info.image.Url
    })
  },
  methods: {
    ...mapMutations(['get_info', 'get_imageUrl'])
  },
  components: {}
}
</script>


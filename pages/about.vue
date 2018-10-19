<template>
  <section class="container">

  <section class="SecNews">
        <h2 class="NewsTilte">En Savoir Plus Sur Vermeg</h2>
        <figure v-for="info in infos" :key="info.id" class="snip1208">
          <img :src="'http://localhost:1337' + info.image.url" alt="sample66" />
          <div class="date"><span class="day">{{$moment( info.date ).format('DD')}}</span><span class="month">{{$moment( info.date ).format('MMM')}}</span></div><i class="ion-bookmark"></i>
          <figcaption>
            <h3>{{ info.title }}</h3>
            <p>{{ info.description || 'No description provided.' }}</p>
            <p>{{$moment( info.date ).format('YYYY MM DD')}}</p>
            <button>Read More</button>
          </figcaption><a href="#"></a>
        </figure>

  </section>
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
    const res = await axios('http://localhost:1337/infos')
    console.log('res', res)
    this.$store.commit('initial', res.data)
  },
  computed: {
    ...mapState({
      infos: state => state.infos,
      list: state => state.list,
      imageUrl: state => state.infos.image.Url
    })
  },
  methods: {
    ...mapMutations(['get_infos', 'set', 'increment', 'reset'])
  },
  components: {}
}
</script>

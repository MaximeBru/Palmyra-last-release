<template>
  <section class="container">



 <!-- ====================== -->
 <div v-for="info in infos" :key="info.id" class="card">
              <img :src="'http://localhost:1337' + info.image.url">
              <div class="card-body">
                <h5 class="card-title">{{ info.title }}</h5>
                <p class="card-text">{{ info.description || 'No description provided.' }}</p>
                <button class="btn btn-primary">Add to card</button>
              </div>
  </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'

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

<template>
  <section class="container">
  </header>
  <!-- ... -->
<main>
  <section class="SecNews" id="PartieNews">
        <h2 class="NewsTilte">Vermeg News</h2>
        <figure v-for="info in infos" :key="info.id" class="snip1208">
          <img :src="'https://back-office-palmyra.digital-dev.fr' + info.image.url" alt="sample66" />
          <div class="date"><span class="day">{{$moment( info.date ).format('DD')}}</span><span class="month">{{$moment( info.date ).format('MMM')}}</span></div><i :class="info.logo.code"></i>
          <figcaption>
            <h3>{{ info.title }}</h3>
            <p>{{ info.description || 'No description provided.' }}</p>
            <button>Read More</button>
          </figcaption><a :href="'info/' + info.id"></a>
        </figure>

  </section>
  </main>
</section>
</template>

<script>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
import VueMoment from 'vue-moment'
import * as moment from 'moment'

export default {
  head: {
    /*     title: this.title, */
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Ma description personnalisée'
      }
    ]
  },
  /* async created() {
    const res = await axios('https://www.digital-dev.fr/infos')
    console.log('res', res)
    this.$store.commit('initial', res.data)
  }, */
    async fetch({store, params}) {
    return axios.get('https://back-office-palmyra.digital-dev.fr/infos')
   /*  console.log('logo', res) */
/*     this.$store.commit('initial', res.data) */
    .then((res) => {
      store.commit('infos', res.data);

    })
  },
  computed: {
    ...mapState({
       infos: state => state.infos,
      list: state => state.list,
      imageUrl: state => state.infos.image.Url,
      info: state => state.info,
      initial: state => state.infos,
      logo: state => state.infos.logo,
    })
  },
  methods: {
    ...mapMutations(['get_infos', 'set', 'increment', 'reset'])
  },
  components: {}
}
</script>
<style scoped>
#PartieNews{
  height: 150rem;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.6s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
/* responsive element */
.responsiveTitle {
  display: none;
}
</style>

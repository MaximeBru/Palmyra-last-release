<template>
    <section class="section">
        <div class="container">

          <section class="InterwiewHeader">
            <div id="hero">


              <div class="hero-holder" :style="{ 'background-image': 'url(http://localhost:1337' + info.image.url + ')' }">

                <div class="hero-footer">
                  <h6>{{$moment( info.date ).format('DD')}} {{$moment( info.date ).format('MMMM')}}</h6>
                  <h1>{{info.title }}</h1>
                </div>
              </div>
            </div>

          </section>
<section class="InterwiewContent">

  <p>{{info.newsBody}}</p>
  <i :class="info.logo.code"></i>

</section>

        </div>
    </section>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import wysiwyg from 'vue-wysiwyg'
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
import VueMoment from 'vue-moment'
import * as moment from 'moment'
export default {
  head() {
    return {
      title: this.info.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '' + this.info.metaDescription + ''
        }
      ]
    }
  },

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
/* Vue.use(wysiwyg, {}) */
</script>
<style scoped>
/*=======================================================page interwiew=================================*/
/*========header========*/
.InterwiewColor {
  background-color: #f5f4f0;
}
.InterwiewHeader {
  background-color: #f5f4f0;
}

#hero {
  position: relative;
  width: 100%;
  transition: all 200ms ease-out;
  -webkit-transition: all 200ms ease-out;
  min-height: 300px;
  height: 62rem;
}
#hero figure {
}
.hero-holder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 80px;
  background: #2b2b2b;
  /*background-image: url("../images/model-429733_1920.jpg");*/
  -webkit-background-size: cover; /* pour anciens Chrome et Safari */
  background-size: cover; /* version standardisÃ©e */
  background-position: center;
}
.fig {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.hero-footer {
  display: block;
  margin: 0 auto;
  max-width: 1210px;
  bottom: 0;
  height: 200px;
  min-width: inherit;
}
.hero-footer h1 {
  font-family: 'Segoe UI Light', 'Segoe', 'Segoe UI', 'Helvetica Neue',
    sans-serif;
  bottom: -43px;
  background: #f5f4f0;
  font-weight: 100;
  font-size: 68px;
  padding: 0 30px;
  letter-spacing: 2px;
  position: absolute;
  text-transform: uppercase;
  margin-left: 20px;
  color: #d83431;
}
.hero-footer h6 {
  bottom: 0;
  padding: 13px 20px;
  height: 80px;
  background: #1d1d1d;
  color: #868375;
  text-transform: uppercase;
  font-size: 1.2em;
  font-weight: normal;
  letter-spacing: 3px;
  display: inline-block;
  margin-left: 0;
  margin-top: 36.5%;
}
/*end of header*/
/*main*/
.InterwiewContent {
  background-color: #f5f4f0;
  padding: 0 16rem;
  font-size: 1.2em;
  line-height: 1.8em;
  margin-top: 0;
  font-family: 'ff-meta-serif-web-pro', serif;
  margin-bottom: 3rem;
}
.Tiltlequote {
  font-size: 2.9em;
  text-align: left;
  padding-left: 0px;
  font-family: 'Segoe UI Light', Segoe, 'Segoe UI', 'Helvetica Neue', sans-serif;
  line-height: 1.3em;
  quotes: '“' '”';
  display: table-cell;
  vertical-align: middle;
  position: relative;
  margin: 30px 0px 50px;
  color: black;
  /* padding-bottom: 40px;*/
  top: -3.1rem;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 40px;
  -webkit-margin-end: 40px;
}

.niceBorder {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 5px 0;
}

.Internquote {
  padding-left: 0px;
  font-family: 'Segoe UI Light', Segoe, 'Segoe UI', 'Helvetica Neue', sans-serif;
  line-height: 1.3em;
  quotes: '“' '”' '‘' '’';
  background-color: #f5f4f0;
  padding: 0 34rem;
  font-size: 4.5rem;
  color: #d83431;
  text-align: center;
}

.Quoteup {
  margin-left: -81rem;
  color: grey;
}

.Quotedown {
  margin-left: 79rem;
  color: grey;
}

.broderSpacing {
  margin-bottom: 3rem;
}

.interwiewImgFull {
  /*   background-image: url('../images/home-banner.jpg'); */
  -webkit-background-size: cover; /* pour anciens Chrome et Safari */
  background-size: cover; /* version standardisÃ©e */
  background-position: center;
  height: 50rem;
  margin-bottom: 3rem;
}
.interwiewImg {
  padding: 0 16rem;
  margin-bottom: 3rem;

  height: 40rem;
}
.interwiewImgcenter {
  -webkit-background-size: cover; /* pour anciens Chrome et Safari */
  background-size: cover; /* version standardisÃ©e */
  background-position: center;
  width: 100%;
  height: 100%;
}
.interwiewImg img {
  width: 118rem;
}
.InterwiewContent img {
  width: 66rem;
  float: right;
  padding: 2rem;
}
.InterwiewContent cite {
  font-size: 1.5rem;
}
</style>

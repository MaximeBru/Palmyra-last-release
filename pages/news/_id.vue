<template>
    <section class="section">
        <div class="container">
            <div class="columns is-multiline">
                <div
                    class="column is-one-quarter"
                    v-for="(news, index) in news"
                    :key="index">
            <!--             <a :href="news.url" target="_blank"> -->
                            <div class="card">
                                <div class="card-image">
                                    <figure class="image is-3by2">
              <!--                           <img :src="news.urlToImage" :alt="news.title"> -->
                                    </figure>
                                </div>
                                <div class="card-content">
                                    <!-- <div class="content">{{ news.title }}</div> -->
                                </div>
                            </div>
                    <!--     </a> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  async asyncData({ app }) {
    const { news } = await app.$axios.$get(`https://127.0.0.1:1337/news`)

    return { news }
  }
}
console.log('news', news)
</script>

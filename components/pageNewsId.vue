  <template>
  <div>
    <newsAsDetail :news="news" />

    <AppSection v-if="news.category">
      <div class="container">
        <h3 class="title is-3 has-text-centered">More newss from category
          <strong>{{news.category.name}}</strong>
        </h3>
        <newssAsCards :newss="newssByCategory"></newssAsCards>
      </div>
    </AppSection>
  </div>
</template>

<script>
import newsAsDetail from '~/components/newsAsDetail'
import newssAsCards from '~/components/newssAsCards'
import AppSection from '~/components/AppSection'
export default {
  components: { newsAsDetail, newssAsCards, AppSection },
  props: {
    news: { type: Object, default: {} },
    newssByCategory: { type: Array, default: [] }
  }
}
</script>

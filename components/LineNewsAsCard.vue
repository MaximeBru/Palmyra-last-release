<template>
  <div class="newss">
    <BulmaGrid :items="newss" :itemsByRow="cardsByRow">
      <template slot-scope="props">
        <newsAsCard :news="props.item"></newsAsCard>
      </template>
    </BulmaGrid>
  </div>
</template>

<script>
import newsAsCard from '~/components/newsAsCard'
import BulmaGrid from '~/components/BulmaGrid'
export default {
  components: { newsAsCard, BulmaGrid },
  props: {
    cardsByRow: { type: String, default: '4' },
    title: { type: String, default: '' },
    moreLink: { type: String, default: '' },
    newss: { type: Array, default: () => [] }
  }
}
</script>

<style scoped>
.columns .card {
  height: 100%;
}
</style>

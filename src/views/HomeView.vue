<template>
  <div class="home">
    <Category/>
    <NewProduct/>
    <ListMostSell/>
    <NewsLatter/>
  </div>
</template>

<script>
import Category from '../components/Category.vue'
import NewProduct from '../components/products/NewProducts.vue'
import ListMostSell from '../components/most_sell/ListMostSell.vue'
import NewsLatter from '../components/new_latter/NewsLatter.vue'

export default {
  name: 'HomeView',
  components: {
    Category,
    NewProduct,
    ListMostSell,
    NewsLatter
  }
}
</script>

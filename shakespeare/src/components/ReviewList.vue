<template>
  <div>
    <h1>Reviews</h1>

    <div v-for="item in items">
      <router-link :to="{name: 'Detail', params: {reviewId:item.id }}">

      <span class="author">{{item.author}} |</span>
      <span class="rating">Rating: {{item.rating}} |</span>
      <span class="date">{{new Date(item.publish_date) | moment("MMMM Do, YYYY, h:mm a")}}</span>
      </router-link>
    </div>
  </div>
</template>


<script>
import VueFilterDateFormat from 'vue-filter-date-format';
  export default {
    name: 'ReviewList',
    data () {
      return {

      }
    },
    computed: {
      items: function(){
        return this.$store.getters.items;
      },
    },
    created: function(){
      this.getItems();
    },
    methods: {
      getItems: function() {
      console.log("reviewList.getItems");
        this.$store.dispatch('getItems');
      },
    }
  }

</script>


<style>
</style>

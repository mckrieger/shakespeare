<template>
  <div>
    <h1>{{review.author}}</h1>
    <h4>Rating: {{review.rating}}</h4>
    <div class="body">
      {{review.body}}
      </div>
      <p class="date">{{new Date(review.publish_date) | moment("MMMM Do, YYYY, h:mm a")}}</p>
  </div>
</template>


<script>
import VueFilterDateFormat from 'vue-filter-date-format';

export default {
  name: 'Detail',
  data () {
    return {

    }
  },
  computed: {
    review: function(){
      return this.$store.getters.review;
    },
  },
  created: function(){
    this.getReview();
  },
  methods: {
    getReview: function() {
    console.log("reviewList.getItems");
      this.$store.dispatch('getReview', this.$route.params.reviewId);
    },
  }
}
</script>

<style>

</style>

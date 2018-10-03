<template>
  <div>
    <h1>Reviews</h1>

    <div v-for="item in items">
      <p>{{item.id}}</p>
    </div>
  </div>
</template>


<script>
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

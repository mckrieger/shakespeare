import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);
var token = 'koOheljmQx'
var config = {
        headers: {'Authorization': token}
   };

export default new Vuex.Store({
  state: {
    items: [],
    review: {},
  },
  getters: {
    items: state => state.items,
    review: state => state.review,
  },
  mutations: {
      setItems (state, items) {
        state.items = items;
      },
      setReview(state, review) {
        state.review = reviews;
      }
  },
  actions: {
    getItems(context) {
      console.log("getting items");
      //axios.setHeader('Authorization', 'koOheljmQx');
      // axios.get("http://shakespeare.podium.co/api/reviews", {headers: {'Authorization': 'koOheljmQX'}})
      // .then(response => console.log(response.data));
      fetch("http://shakespeare.podium.co/api/reviews", {headers: {authorization: token}}).then(response => {
        console.log(response);
	context.commit('setItems', response.data);
	return true;
      }).catch(err => {
      });
    },
    getReview(context, id) {
      axios.setHeader('Authorization', 'koOheljmQx');

      axios.get("http://shakespeare.podium.co/api/reviews/:" + id).then(response => {
        context.commit('setReview', response.data);
        return true;
      }).catch(err => {
        console.log("Something went wrong in getItem");
      });
    },
    addItem(context, item) {
      //Could be implemented
    },
    updateItem(context, item) {
      //Could be implemented
    },
    deleteItem(context, item) {
      //Could be implemented
    }
  }
});

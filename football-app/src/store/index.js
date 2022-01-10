import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    areas : []
  },
  mutations: {
    SET_AREAS(state,payload){
      state.areas = payload
    }
  },
  actions: {
    fetchAreas(context){
    //   fetch(`https://api.football-data.org/v2/areas`)
    //     .then((response) => {
    //       if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //       }
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       const areas = data
    //       context.commit('SET_AREAS', areas)
    //       // setCategories(data);
    //       // dispatch(setCategories(data))
    //       // dispatch(setLoading(false))
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
      axios({
        method : 'GET',
        url : 'https://api.football-data.org/v2/areas'
      })
      .then(response => {
        console.log(response);
        const areas = response.data
        context.commit('SET_AREAS', areas)
      })
      .catch(err => {
        console.log(err);
      })
    }
  },
  modules: {
  }
})

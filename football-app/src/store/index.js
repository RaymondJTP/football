import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import http from '../baseUrl/baseUrl.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    areas : [],
    clubs: [],
    club: {},
    player : {}
  },
  mutations: {
    SET_AREAS(state,payload){
      state.areas = payload
    },
    SET_CLUBS_AREA(state,payload){
      state.clubs = payload
    },
    SET_CLUB(state,payload){
      state.club = payload
    },
    SET_PLAYER(state,payload){
      state.player = payload
    }
  },
  actions: {
    fetchAreas(context){
      http.get('/areas')
      .then(response => {
        console.log(response.data);
        context.commit('SET_AREAS', response.data)
      }) 
      .catch(err => {
        console.log(err);
      })
    },
    fetchClubsArea(context){
      http.get(`/teams?areas=2072`)
      .then(response => {
        console.log(response.data);
        context.commit('SET_CLUBS_AREA', response.data)
      })
      .catch(err =>{
        console.log(err);
      })
    },
    fetchClub(context){
      http.get(`/teams/57`)
      .then(response => {
        console.log(response.data);
        context.commit('SET_CLUB', response.data)
      })
      .catch(err =>{
        console.log(err);
      })
    },
    fetchPlayerDetail(context){
      http.get(`/players/110`)
      .then(response =>{
        console.log(response.data);
        context.commit('SET_PLAYER', response.data)
      })
      .catch(err =>{
        console.log(err);
      })
    }
  },
  modules: {
  }
})

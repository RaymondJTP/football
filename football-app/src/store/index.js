import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import http from '../baseUrl/baseUrl.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    areas : {},
    areaId : '',
    clubs: [],
    clubId : '',
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
    },
    SET_AREA_ID(state,payload){
      state.areaId = payload
    },
    SET_CLUB_ID(state,payload){
      state.clubId = payload
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
      const areaId = context.state.areaId
      http.get(`/teams?areas=${areaId}`)
      .then(response => {
        console.log('masuk fetch clubsarea');
        console.log(response.data);
        context.commit('SET_CLUBS_AREA', response.data)
      })
      .catch(err =>{
        console.log(err);
      })
    },
    fetchClub(context){
      const clubId = context.state.clubId
      http.get(`/teams/${clubId}`)
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

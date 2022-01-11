import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import http from '../baseUrl/baseUrl.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    areas : {},
    areaId : '',
    clubs: {},
    clubId : '',
    club: {},
    player : {},
    areaName : '',
    loading : ''
  },
  mutations: {
    SET_AREAS(state,payload){
      state.areas = payload
    },
    SET_CLUBS_AREA(state,payload){
      state.clubs = payload
      state.areaName = payload.teams.length? payload.teams[0].area.name : ''
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
    },
    SET_LOADING(state,payload){
      state.loading = payload
    }
  },
  actions: {
    fetchAreas(context){
      context.commit('SET_LOADING', true)
      http.get('/areas')
      .then(response => {
        console.log(response.data);
        context.commit('SET_AREAS', response.data)
        context.commit('SET_LOADING', false)

      }) 
      .catch(err => {
        console.log(err);
      })
    },
    fetchClubsArea(context){
      context.commit('SET_LOADING', true)
      const areaId = context.state.areaId
      http.get(`/teams?areas=${areaId}`)
      .then(response => {
        
        console.log(response.data);
        context.commit('SET_LOADING', false)
        context.commit('SET_CLUBS_AREA', response.data)

      })
      .catch(err =>{
        console.log(err);
      })
    },
    fetchClub(context){
      context.commit('SET_LOADING', true)
      const clubId = context.state.clubId
      http.get(`/teams/${clubId}`)
      .then(response => {
        console.log(response.data);
        context.commit('SET_CLUB', response.data)
        context.commit('SET_LOADING', false)

      })
      .catch(err =>{
        console.log(err);
      })
    },
    fetchPlayerDetail(context){
      context.commit('SET_LOADING', true)
      http.get(`/players/110`)
      .then(response =>{
        console.log(response.data);
        context.commit('SET_PLAYER', response.data)
        context.commit('SET_LOADING', false)
      })
      .catch(err =>{
        console.log(err);
      })
    }
  },
  modules: {
  }
})

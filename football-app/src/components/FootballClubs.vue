<template>
  <div>
    <div v-if="loading">
      <img src="../assets/ball.gif" alt="">
    </div>
    <div v-if="!loading">
      <h1 v-if="areaName">Table Clubs {{areaName}}</h1>
      <h1 v-if="!areaName">No Data Founded In This Area</h1>
      <football-clubs-table/>
    </div>
  </div>
</template>

<script>
import FootballClubsTable from '../components/FootballClubsTable.vue'
export default {
    name : "FootballClubs",
    computed: {
        clubs(){
            return this.$store.state.clubs
        },
        areaName(){
          return this.$store.state.areaName
        },
        loading(){
          return this.$store.state.loading
        }
    },
    components : {
        FootballClubsTable
    },
    created(){
        let areaId = this.$route.params.id;
        this.$store.commit("SET_AREA_ID", areaId);
        this.$store.dispatch("fetchClubsArea")
    }
}
</script>

<style>

</style>
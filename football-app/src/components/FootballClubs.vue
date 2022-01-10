<template>
  <div>
    <h1>Football Clubs</h1>
    <h1>Table Clubs</h1>
    <football-clubs-table/>
  </div>
</template>

<script>
import FootballClubsTable from '../components/FootballClubsTable.vue'
export default {
    name : "FootballClubs",
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
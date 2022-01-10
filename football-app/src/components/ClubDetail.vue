<template>
<div>
  <h1>Detail Club</h1>
  <h1>{{club.name}}</h1>
  <club-players/>
</div>
</template>

<script>
import ClubPlayers from '../components/ClubPlayers.vue'
export default {
    name : 'ClubDetail',
    computed : {
        club(){
            return this.$store.state.club
        }
    },
    components : {
        ClubPlayers
    },
    created(){
        let clubId = this.$route.params.id;
        this.$store.commit("SET_CLUB_ID", clubId);
        this.$store.dispatch("fetchClub")
    }
}
</script>

<style>

</style>
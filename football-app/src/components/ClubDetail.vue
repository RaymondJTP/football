<template>
    <div class="card mb-3" style="max-width: 75%;">
        <div class="row g-0">
            <div class="col-md-4">
            <img :src="club.crestUrl"  style="max-width: 170px;" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h3 class="card-title">{{club.name}}</h3>
                <p class="card-text">{{club.address}}</p>
                <p class="card-text">Info: {{club.email}}</p>
                <p class="card-text">Founded {{club.founded}}</p>
                
            </div>
            </div>
        </div>
        <club-players/>
    </div>
    <!-- <section >
        <div class="m-10">
            <div class="d-flex">
                <div>
                    <img :src="club.crestUrl" style="max-width: 150px;">
                    <h1>{{club.name}}</h1>
                </div>
            </div>
       
                <div>Tes</div>
            <club-players/>
        </div>
    </section> -->
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
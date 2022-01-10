<template>
   <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Logo</th>
          <th scope="col">Team Name</th>
          <th scope="col">Founded</th>
          <th scope="col">Link Website</th>
          <th scope="col">List Player</th>
        </tr>
      </thead>
      <tbody v-for="(club,index) in clubs.teams" :key="index">
        <tr>
          <th>{{index+1}}</th>
          <td>
              <img :src="club.crestUrl"  style="max-width: 100px;" alt="">
          </td>
          <td>{{club.name}}</td>
          <td>{{club.founded}}</td>
          <td>
              <a href="">{{club.website}}</a>
          </td>
          <td>
              <button @click="viewClub(club.id)">View Club</button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
    name : 'FootballClubsTable',
    computed: {
        clubs(){
            return this.$store.state.clubs
        }
    },
    methods : {
        viewClub(id){
            const clubId = id
            this.$router.push(`/clubdetail/${clubId}`);

        }
    }
}
</script>

<style>

</style>
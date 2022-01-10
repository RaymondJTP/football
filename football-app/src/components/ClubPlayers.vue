<template>
   <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Player Name</th>
          <th scope="col">Position</th>
          <th scope="col">Nationality</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody v-for="(player,index) in club.squad" :key="index">
        <tr>
          <th>{{index+1}}</th>
          <td>{{player.name}}</td>
          <td>{{player.position}}</td>
          <td>{{player.nationality}}</td>
          <td>
              <button @click="viewClubsArea(area.id)">View Clubs</button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
    name : 'ClubPlayers',
    computed : {
        club(){
            return this.$store.state.club
        }
    }
}
</script>

<style>

</style>
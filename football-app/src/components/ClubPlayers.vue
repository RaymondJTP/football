<template>
  <div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Player Name</th>
          <th scope="col">Position</th>
          <th scope="col">Nationality</th>
          <th scope="col">Detail</th>
        </tr>
      </thead>
      <tbody v-for="(player, index) in club.squad" :key="index">
        <tr>
          <th>{{ index + 1 }}</th>
          <td>{{ player.name }}</td>
          <td>{{ player.position }}</td>
          <td>{{ player.nationality }}</td>
          <td>
            <button class="btn btn-outline-info" @click="detailPlayer(player.id)"> 
              Player Detail
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <modal-player />
  </div>
</template>

<script>
import Swal from "sweetalert2";
import http from '../baseUrl/baseUrl.js'
import ModalPlayer from "../components/ModalPlayer.vue";
export default {
  name: "ClubPlayers",
  computed: {
    club() {
      return this.$store.state.club;
    },
  },
  components: {
    ModalPlayer,
  },
  methods: {
    detailPlayer(id){
      const playerId = id
      http.get(`/players/${playerId}`)
      .then(response =>{
        const player = response.data
        console.log(response.data);
        Swal.fire({
          title: `${player.name}`,
          html: 
        `<div readonly>Position: ${player.position}</div>` +
        `<div readonly>Nationality: ${player.nationality}</div>` +
        `<div readonly>Birth: ${player.countryOfBirth}, ${player.dateOfBirth}</div>` +
        
        `</div>`,
        })
      })
      .catch(err =>{
        console.log(err);
      })

    }
  }
};
</script>

<style></style>

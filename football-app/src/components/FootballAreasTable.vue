<template>
   <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Country Name</th>
          <th scope="col">Area</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody v-for="(area,index) in areas.areas" :key="index">
        <tr>
          <th>{{index+1}}</th>
          <td>{{area.name}}</td>
          <td>{{area.parentArea}}</td>
          <td>
              <button @click="viewClubsArea(area.id)">View Clubs</button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
    name : 'FootballAreasTable',
    computed: {
        areas() {
            return this.$store.state.areas;
        },
    },
    methods : {
        viewClubsArea(id){
            const areaId = id
            this.$router.push(`/footballclubs/${areaId}`);
        }
    }
}
</script>

<style>

</style>
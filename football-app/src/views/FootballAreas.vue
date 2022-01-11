<template>
  <div>
    <div v-if="loading">
      <img src="../assets/ball.gif" alt="">
    </div>
    <div v-if="!loading">
      <h3>Total Area: <span class="badge bg-success">{{ areas.count }}</span></h3>
      <football-areas-table/>
    </div>
    
  </div>
</template>

<script>
import FootballAreasTable from '../components/FootballAreasTable.vue'
export default {
  name: "FootballAreas",
  components : {
    FootballAreasTable
  },
  computed: {
    areas() {
      return this.$store.state.areas;
    },
    loading(){
      return this.$store.state.loading
    }
  },
  created() {
    this.$store.dispatch("fetchAreas");
  },
};
</script>

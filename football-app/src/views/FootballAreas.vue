<template>
  <div class="about">
    <h1>Football Search</h1>
    <h3>Total Area</h3>
    <h3>{{ areas.count }}</h3>
    <h1>Table List Area</h1>
    <football-areas-table/>
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
  },
  created() {
    this.$store.dispatch("fetchAreas");
  },
};
</script>

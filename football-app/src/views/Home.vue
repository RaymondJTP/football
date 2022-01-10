<template>
  <div class="home">
    <div>
      Ini Home
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
   
  },
  created(){
    // this.$store.dispatch('fetchAreas')
    // this.$store.dispatch('fetchClubsArea')
    // this.$store.dispatch('fetchClub')
    this.$store.dispatch('fetchPlayerDetail')


  }
}
</script>

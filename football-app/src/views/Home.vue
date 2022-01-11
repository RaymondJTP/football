<template>
  <div class="home">
    <div class="card mb-3 ms-auto me-auto shadow" style="max-width: 75%; max-height:50%">
        <div class="row g-0">
          <div class="d-flex justify-content-evenly">
            <div class="col-md-4">
              <h1 class="text-center">Football</h1>
                <p>
                  Football, also called association football or soccer, game in which two teams of 11 players, using any part of their bodies except their hands and arms, try to maneuver the ball into the opposing team’s goal. Only the goalkeeper is permitted to handle the ball and may do so only within the penalty area surrounding the goal. The team that scores more goals wins.
                </p>
                <iframe
                  class="youtube-home position-relative your-centered-div"
                  align="center"
                  src="https://www.youtube.com/embed/cTCgU4Vz0rE"
                >
                </iframe>
            </div>
            <img src="../assets/Football Home.png" style="width:30%" alt="">
          </div>
              
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
   
  },
  created(){
    this.$store.dispatch('fetchAreas')
  }
}
</script>

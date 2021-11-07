<template>
  <div>
    <nav-bar :connected="connected" @log-out="logOut"></nav-bar>
    <div  id="showcase">
      <h2>Bienvenue sur EasyTrain</h2>
      <reservation :resultat="resultat" @re-search="research"></reservation>
    </div>
  </div>
</template>

<script>
const NavBar = window.httpVueLoader("./components/Navbar.vue");
const Reservation = window.httpVueLoader("./components/Reservation.vue");
module.exports = {
  name: "HomePage",
  props: {
    connected: { type: Boolean },
    resultat: {type: Array},
    billets: { type: Array },
  },
  components: {
    NavBar,
    Reservation
  },

  methods: {
    logOut () {
      this.$emit('log-out')
    },
    research(donnees){
      this.$emit('re-search',donnees);
    }
  }
};
</script>

<style scoped>
#showcase {
  background: no-repeat url("../img/train_station.jpg");
  background-size: cover;
  height: calc(100vh - 70px);
  color: #fff;
  text-shadow: 0px 0px 10px #000;
  padding: 3em;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 80px;
  text-align: center;
  margin-bottom: 80px;
}
</style>
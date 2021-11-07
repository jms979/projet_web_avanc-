<template>
  <div>
    <nav-bar :connected="connected" @log-out="logOut"></nav-bar>
    <h2>Bienvenue sur Easy Train</h2>
    <reservation :resultat="resultat" @re-search="research"></reservation>
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
</style>
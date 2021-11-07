<template>
  <div>
    <nav-bar :connected="connected" @log-out="logOut"></nav-bar>
    <h2 class="titre">Trains disponibles</h2>
    <h4> &nbsp;</h4>
    <h5> &nbsp;</h5>
      <li class="container" v-for="don of resultat" :key="don.heure_depart">
        <p>Départ de {{ find(don.heure_depart).gare_depart}}  à  {{ find(don.heure_depart).heure_depart }}</p>
        <p> Arrivé   {{ find(don.heure_depart).gare_arrive}}  à  {{ find(don.heure_depart).heure_arrive }}</p>
        <button class="btn" @click="acheter(don)">{{ find(don.heure_depart).prix }} €</button>
      </li>
  </div>
</template>

<script>
const NavBar = window.httpVueLoader("./components/Navbar.vue");
module.exports = {
  name: "Resultat",
  components: {NavBar},
  props: {
    connected: {type: Boolean},
    resultat: {type: Array},
    billets: { type: Array },
  },

  methods: {
    acheter(achat){
      this.$emit("acheter",achat);
    },
    logOut () {
      this.$emit('log-out')
    },
    find (train) {
      let T = {}
      for (let i =0;i<this.resultat.length; i++) {
        if (this.resultat[i].heure_depart === train) {
            T = this.resultat[i]
        }
      }
      return T
    },
  }
}
</script>
<style scoped>
.btn {
  background-color: #42b983;
  border: none;
  color: white;
  transition: background-color 0.3s ease-in-out;
  font-weight: bold;
  margin: 20px;
  padding: 15px 30px;
  border-radius: 5px;
  position: relative;
  left:1000px;
  bottom: 100px;
}
.container{
  width: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  background-color: whitesmoke;
  list-style: none;
}
.titre{
  text-align: center;
}
</style>

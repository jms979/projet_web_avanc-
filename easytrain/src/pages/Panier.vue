<template>

  <div>
    <nav-bar :connected="connected" @log-out="logOut"></nav-bar>
    <div class="cart">
      <h2 class="titre">Panier</h2>
      <h4> &nbsp;</h4>
      <h5> &nbsp;</h5>
        <li class="container" v-for="don of billets" :key="don.heure_depart">
          <p>Départ de {{ find(don.heure_depart).gare_depart}}  à  {{ find(don.heure_depart).heure_depart }} le {{ find(don.heure_depart).jour }}</p>
          <p> Arrivé   {{ find(don.heure_depart).gare_arrive}}  à  {{ find(don.heure_depart).heure_arrive }}</p>
          <p1>{{ find(don.heure_depart).prix }} €</p1>
          <h5> &nbsp;</h5>
          <h5> &nbsp;</h5>
        </li>
      <h5> &nbsp;</h5>
      <h5> &nbsp;</h5>
      <p>Total à payer: {{total()}} €</p>
    </div>
  </div>
</template>

<script>
const NavBar = window.httpVueLoader("./components/Navbar.vue");
module.exports = {
  name: "Panier",
  components: {NavBar},
  props: {
    resultat: {type: Array},
    billets: { type: Array },
    connected: { type: Boolean },
  },

  methods: {
    logOut () {
      this.$emit('log-out')
    },
    find (train) {
      let T = {}
      for (let i =0;i<this.billets.length; i++) {
        if (this.billets[i].heure_depart === train) {
          T = this.billets[i]
        }
      }
      return T
    },
    total(){
      let T = 0
      for (let i =0;i<this.billets.length; i++) {
          T += this.billets[i].quantite * this.billets[i].prix
        }
      return T
    },
  }
}
</script>
<style scoped>

.titre{
  text-align: center;
}
.container{
  width: 100%;
  border: 1px solid black;
  box-sizing: border-box;
  background-color: whitesmoke;
  list-style: none;
}

.cart {
  min-height: calc(100vh - 306px);
}
</style>
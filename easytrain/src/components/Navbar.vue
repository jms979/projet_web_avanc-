<template>
  <header>
    <nav class="navbar navbar-expand">
      <router-link class="navbar-brand" to="/">
      <img
          src="../assets/logo.png"
          alt="logo"
          class="img-fluid"
          width="48"
        /><span>EasyTrain</span></router-link>
        <ul class="navbar-nav mr-auto w-100 d-flex justify-content-end">
          <div v-if="connected === true">
            <li class="nav-item">
              <router-link class="nav-link" to="/orders">Mes commandes</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/me">Bonjour @name</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="logOut()">Se déconnecter</a>
            </li>
          </div>
          <div v-else>
            <li class="nav-item">
              <router-link class="nav-link" to="/panier">Mes commandes</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signup">S'inscrire</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Se connecter</router-link>
            </li>
          </div>
        </ul>
    </nav>
  </header>
</template>

<script>
module.exports = {
  name: "NavBar",
  props: {
    connected: { type: Boolean },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    logOut() {
      this.$emit("log-out");
    },
  },
};
</script>

<style>
/* navbar */

header nav {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #282828;
  padding: 10px;
}

header img {
  height: 48px;
  width: 48px;
  border-radius: 5px;
}

header div {
  display: flex;
}

.navbar {
  background-color: #282828;
}

.navbar .navbar-brand span {
  margin-left: 15px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 700;
  color: #ddd;
}

.navbar .nav-item {
  margin: 0 1em;
  position: relative;
}

.navbar .nav-item:nth-child(n + 2):before {
  content: "";
  position: absolute;
  width: 2px;
  height: 15px;
  background-color: #fff;
  left: -1em;
  top: calc(50% - 7.5px);
  /* transform: rotate(25deg); */
}

@media (max-width: 768px) {
  .navbar .nav-item:nth-child(n + 2):before {
    display: none;
  }
}

.navbar .nav-item .nav-link {
  text-transform: uppercase;
  font-weight: 700;
  color: #ddd;
}

.navbar .nav-item .nav-link:first-letter {
  color: #e96d25;
}

.navbar-toggler-icon img {
  height: 100%;
}
#navbarNavDropdown {
  background-color: #282828;
}

.nav-link:hover {
  color: #FAE6CD !important;
}
</style>

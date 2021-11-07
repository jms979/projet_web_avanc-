<template>
    <div>
        <nav-bar :connected="connected" @log-out="logOut"></nav-bar>
        <section>
        <div id="us">
            <h3>Qui sommes-nous ?</h3>
            <div class="element content">
                <article>
                    Nous sommes une équipe de 2 étudiants en cursus ingénieur à EFREI
                    Paris.<br />Nous aspirons à proposer EasyTrain un site qui vous permet de réserver vos billets de train en toute simplicité.<br />
                    Notre devise : "Des outils pour tous, un monde meilleur."
                </article>
                <aside>
                    <img src="../img/efrei.jpg" alt="img" />
                </aside>
            </div>
        </div>
        <div id="about">
            <h3>Ce que propose EasyTrain</h3>
            <div class="element">
                <h4>Un transport facile</h4>
                <div class="content">
                    <aside>
                        <img src="../img/train.jpg" alt="img" />
                    </aside>
                    <article>
                        Réserver son billet de train n'a jamais été aussi facile !
                        Un outil intuitif qui permet de trouver facilement sa destination en quelques minutes.
                        Une liste de trains en fonction de votre demande et les trajets similaires sont proposés.
                    </article>
                </div>
            </div>
            <div class="element">
                <h4>Des conseils adaptés</h4>
                <div class="content">
                    <article>
                        Laissez-vous guider par un suivi rapide !
                        EasyTrain est un distributeur de voyages en ligne non officiel.
                        Cet outil est développé dans un but éducatif et convient à donner des suggestions non exhaustives.
                    </article>
                <aside>
                    <img src="../img/stats.jpg" alt="img" />
                </aside>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
const NavBar = window.httpVueLoader("./components/Navbar.vue");
module.exports = {
  name: "AboutUs",
  components: {
    NavBar,
  },
  props: {
    connected: { type: Boolean },
  },
  data() {
    return {};
  },
  methods: {
    logOut() {
      this.$emit("log-out");
    },
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
}

section .element {
  margin: auto 20%;
}

section .content {
  display: flex;
}

article,
aside {
  font-variant:initial;
  font-size: 18px;
  flex: 1;
}

aside img {
  width: 100%;
  border-radius: 4px;
}

section article,
section aside {
  margin: 20px;
}

section article {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#us {
  /* background-color:oldlace; */
  padding: 50px 0;
}

#about {
  /* background-color:oldlace; */
  background-color: #efefef;
  padding: 50px 0;
}

#about div,
#us div {
  padding: 10px 0;
}

h4 {
  padding-top: 30px;
  font-size: 30px;
}
</style>
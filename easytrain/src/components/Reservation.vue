<template xmlns="http://www.w3.org/1999/html">
  <div class="container">
    <form id="auto-suggest"  @submit.prevent="research">
      <input type="text" placeholder="Départ: ville" v-model="donnees.depart" required/>
      <input type="text" placeholder="Arivée: ville" v-model="donnees.arrive"  required/>
      <input type="text" placeholder="Jour de départ (JJ/MM/AAAA)" v-model="donnees.jour"  required/>

      <button  class="btn" type="submit">Rechercher</button>
    </form>
  </div>

</template>

<script>

module.exports = {
  name: "Reservation",
  props:{
    resultats:{type:Array},
    billets: { type: Array },
  },
  data(){
    const data = ["Bordeaux","Lille","Marseille","Paris"]
    return {
      data,
      donnees:{
        depart:"",
        arrive:"",
        jour:""
      }
    };
  },
  methods:
      {
        research(){
          this.$emit('re-search', this.donnees);

        }
      }
}
</script>
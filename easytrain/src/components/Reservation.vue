<template xmlns="http://www.w3.org/1999/html">
  <div class="container">
    <form id="auto-suggest"  @submit.prevent="research">
      <span>Départ: ville</span>
      <select v-model="donnees.depart" required>
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>Arrivée: ville</span>
      <select v-model="donnees.arrive" required>
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
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
      },
      options: [
        { text: 'Bordeaux', value: 'Bordeaux' },
        { text: 'Lille', value: 'Lille' },
        { text: 'Marseille', value: 'Marseille' },
        { text: 'Paris', value: 'Paris' }
      ]
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
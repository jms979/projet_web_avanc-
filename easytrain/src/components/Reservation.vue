<template xmlns="http://www.w3.org/1999/html">
  <div class="container">
    <form id="auto-suggest"  @submit.prevent="research">
      <div class="form-input">
        <div class="formfield-select">
          <label>Départ: ville</label>
          <div class="formfield-select--container">
            <select v-model="donnees.depart" required>
              <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>
        </div>
        <div class="formfield-select">
          <label>Arrivée: ville</label>
          <div class="formfield-select--container">
            <select v-model="donnees.arrive" required>
              <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>
        </div>
        <input type="text" placeholder="Jour de départ (JJ/MM/AAAA)" v-model="donnees.jour"  required/>
      </div>

      <button class="btn" type="submit">Rechercher</button>
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

<style scoped>
.container {
  text-shadow: none;
  color: black;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.2);
  justify-content: space-around;
  display: flex;
  min-height: 200px;
}

.formfield-select {
	position: relative;
}

.formfield-select--container {
	position: relative; 	
	background-color: #fff;
	border: #777 1px solid;
	overflow: hidden; 
  margin: 0 0 12px 5px;
  border-radius: 35px;
  width: 100%;
}

.formfield-select--container select {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	width: 110%; 
	height: auto;
	border: 0; 
	margin: 0;
	padding: .75em;
	border-radius: 0;
	overflow: hidden;
	text-overflow: ellipsis;
}

.formfield-select--container::after { 
	content: '';
	position: absolute;
	top: 50%; 
	margin-top: -3px;
	right: .75em;  
	display: block; 
	width: 0; height: 0;
	border-color: transparent;
	border-top-color: #444; 
	border-width: 6px;
	border-style: solid;
	pointer-events: none;
}

.form-input {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: center;
}

.formfield-select {
  display: flex;
  align-items: center;
  padding: 20px;
}

button {
  margin-top: 40px;
  width: 400px;
  height: 70px;
  border-radius: 35px;
  background-color: #e96d25;
}

input {
  border-radius: 35px;	
	overflow: hidden; 
  margin: 0 0 12px 5px;
  margin: 18px;
  height: 53px;
  width: 250px;
  border: 1px solid black;
}
</style>
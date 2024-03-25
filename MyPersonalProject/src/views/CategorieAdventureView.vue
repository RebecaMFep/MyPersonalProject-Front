<script setup>
import { useActivityStore } from "@/stores/activity";
import BunnerAdventure from "../components/home-components/BunnerAdventure.vue";


const store = useActivityStore()
store.getActivities()

</script>

<template>

  <div>
    <BunnerAdventure />
  </div>

  <div class="title">
    <h1>
    ¡Explora nuestras actividades más interesantes!
    </h1>
  </div>
  <main>
    <div v-for="activity in store.activities">
      <CardProperty :activity="activity" />
    </div>

 </main>
  
 

</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&family=Ribeye+Marrow&display=swap');

.title {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

h1 {
  font-family: "Lakki Reddy", serif;
  color: #00A5B8; 
  font-size: 6rem;

}

main {
  display: flex;
  justify-content: space-around;
  margin: 5%;
  flex-wrap: wrap;
  gap:  10px; 
 
  border-radius: 15px;

}

@media (max-width:  768px) {
  .CardProperty {
    width:  100%;
  }
}

</style>
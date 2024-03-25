<script setup>
import { useActivityStore } from "@/stores/activity";
import Carusel from "@/components/home-components/Carousel.vue";
import Bunner from "@/components/header-footer/Bunner.vue";
import CategoriesSection from "@/components/home-components/CategoriesSection.vue";


const store = useActivityStore()
store.getActivities()

</script>

<template>
  <Bunner />

  <section>
    <div>
      <h1>¿Quiénes somos?</h1>
      <h3>
        “Somos un equipo formado por apasionados profesionales dedicados a ofrecer experiencias emocionantes y enriquecedoras para niños durante los meses de julio y agosto en Gijón.”
      </h3>
    </div>
    <div>
      <h1>
        ¿Qué ofrecemos?
      </h1>

      <h3>
        “Tenemos el compromiso de proporcionar un entorno seguro, emocionante y educativo donde los niños puedan explorar, aprender y divertirse al máximo.  Nos enorgullece ofrecer una amplia gama de actividades diseñadas para fomentar la creatividad, el desarrollo físico y emocional, y la diversión al aire libre.”
      </h3>
    </div>
  </section>
  <div>
    <CategoriesSection />
  </div>
  <div> 
    <Carusel :activities="store.activities"/>
  </div>

</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&family=Ribeye+Marrow&display=swap');

section {
  display: flex;
  text-align: center;
  font-family: "Lakki Reddy", serif;
}

h1 {
  font-family: "Lakki Reddy", serif;
  color: #00A5B8; 
  font-size: 6rem;
}

h3 {
  font-family: "Lakki Reddy", serif;
  font-size: 3rem;
  color: #555B6E;
}

</style>
<script setup>

</script>

<template>
  <section class="banner">
    <div class="text">
      <h1>¡Deportes y Aventuras!</h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&family=Ribeye+Marrow&display=swap');

.banner {
  position: relative;
  background-image: url("src/assets/images/bunnerEscalada.jpg");
  background-size: cover;
  height: 50vh;
  background-size: cover; 
  background-position: center; 
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  
}

h1 {
  font-family: "Lakki Reddy", serif;
  font-size: 4rem;
  color: white;
}

</style> 
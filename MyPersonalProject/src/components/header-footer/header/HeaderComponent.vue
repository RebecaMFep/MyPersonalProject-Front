<script setup>
import HeaderButtons from '@/components/header-footer/header/HeaderButtons.vue';
</script>

<template>
  <header>
        
    <div class="logo">
      <div>
        <img src='/src/assets/images/logoHeader.jpg' alt="">
      </div>

      <HeaderButtons/>
    </div>

    <nav>
        <router-link to="/" exact-active-class="active">Inicio</router-link>
        <router-link to="/about" exact-active-class="active">Deporte</router-link>
        <router-link to="/about" exact-active-class="active">Talleres</router-link>
        <router-link to="/about" exact-active-class="active">Aire Libre</router-link>
    </nav>

  </header>
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&family=Ribeye+Marrow&display=swap');

header {
  position: fixed;
  width: 100%;
 
  > .logo {
    background-color:#00B8D4;
    height: 70 rem;

    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    filter: drop-shadow(0 0 0.5rem black);
  }
}

img {
    height: 12rem;
    width: 12rem;
    border-radius: 100px;
    margin: 2rem 0 2rem 

  }
  a > .logo {
    gap: 1rem;
    display: flex;
    align-items: center;
  }

nav {
  background-color:#00B8D4;
  height: 5rem;
  padding-left: 4rem;
  display: flex;
  align-items: center;
  gap: 4rem;

  a {
    font-family: "Lakki Reddy", serif;
    font-weight: 500;
    color: white;
    font-size: 1.7rem;
    transition: all 0.2s ease-in-out;
  }
  // a:hover {
  //   color:  #00A5CF;
  // }
}
.active {
color: #EFBB43;
 }

</style>
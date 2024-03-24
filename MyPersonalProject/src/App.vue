<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderComponent from './components/header-footer/header/HeaderComponent.vue';
import Footer from './components/header-footer/footer/Footer.vue';
import HeaderButtons from './components/header-footer/header/HeaderButtons.vue';

</script>

<template>
  <header>
    <HeaderComponent />
    <HeaderButtons />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
<v-app>
  <RouterView />
  <Footer />
</v-app>
</template>

<style scoped>
.wrapper {
  font-size: 1.5rem;
}
</style>

<script setup>
import AddButton from '../adminDashboard/AddButton.vue';
</script>

<template>
  <main>
  <v-container class="background">
    <v-row justify="space-between" class="ma-3">
      <div class="adminTitle">
      <h1> ¡Bienvenido Administrador! </h1>
      <h2>¡Administra tus actividades!</h2>
    </div>
      <AddButton />
    </v-row>
  </v-container>
</main>
</template>

<style lang="scss" scoped>

adminTitle {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

</style>
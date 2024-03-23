<script setup>

const icons = [
  'fab fa-youtube',
  'fab fa-facebook',
  'fab fa-google-plus',
  'fab fa-instagram'
];
</script>

<template>
  <v-footer class="footer">
    <v-container class="d-flex justify-center">
      <v-card class="flex" flat tile>
        <v-card-title>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
            <v-icon size="24px" :icon="icon"></v-icon>
          </v-btn>
        </v-card-title>

        <v-card-actions class="d-flex justify-center">
          <strong>&copy;2024 — "Esparcer en branu". Todos los derechos reservados.</strong>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-footer>
</template>

<style lang="scss" scoped>

.footer {
  bottom: 0;
  width: 100%;
  height: 125px;
  background-color: #00A5CF;
}
</style>
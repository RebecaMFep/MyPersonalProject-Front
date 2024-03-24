<script setup>
import AddForm from '@/components/adminDashboard/AddForm.vue'
import { ref } from 'vue';

let showAddForm = ref(false);

const openAddForm = () => {
  showAddForm.value = true;
};



const closeForm = () => {
  showAddForm.value = false;
};
</script>

<template>
    <div class="btn-open">
    <button class="custom-button"  @click="openAddForm"> Añadir actividad</button>
    <AddForm v-if="showAddForm" @close="closeForm"/>
</div>
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&family=Ribeye+Marrow&display=swap');

.btn-open {
display: flex;
justify-content: flex-end;
margin-top: 3rem;
padding-right: 2rem;
}

button.custom-button {
  font-family: "Lakki Reddy", serif;
  color: white;
  font-size: large;
  background-color: #00a5b8;
  border-radius: 1rem;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
}

button.custom-button:hover {
  background-color: #008299;
}

@media screen and (max-width: 600px) {
  .btn-open {
    justify-content: center;
    padding: 0 1rem; 
  }
}

</style>
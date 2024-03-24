<script setup>
import LoginForm from "./LoginForm.vue";
import RegisterForm from "./RegisterForm.vue";
import { ref } from 'vue';

let showRegisterForm = ref(false);
let showLoginForm = ref(false);

const openRegisterForm = () => {
  showRegisterForm.value = true;
  showLoginForm.value = false;
};

const openLoginForm = () => {
  showLoginForm.value = true;
  showRegisterForm.value = false;
};

const closeForm = () => {
  showRegisterForm.value = false;
  showLoginForm.value = false;
};
</script>

<template>
  <div class="action-btns">
    <div class="actions">
      <v-btn color="cyan-accent-4" style="border: 3px solid white" @click="openLoginForm()">
        Iniciar sesión
      </v-btn>

      <v-btn color="cyan-accent-4" style="border: 3px solid white" @click="openRegisterForm()">
        Registrarse
      </v-btn>
    </div>

    <div class="changed-btn">
      <RegisterForm v-if="showRegisterForm" @close="closeForm"/>
      <LoginForm v-if="showLoginForm" @close="closeForm"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&family=Ribeye+Marrow&display=swap');

.actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;


    //border: 3px solid #EFBB43;
    height: 4rem;
    text-align: center;
    margin-top: 9rem;
    margin-right: 2rem;
    border-radius: 5px;
    padding: 1.5rem 2rem;
    font-size: 2rem;
    color: #EFBB43;
    font-family: "Lakki Reddy", serif;
    transition: all 0.2s ease-in-out;
}
v-hover {
  background-color:  #00A5B8;
  color: white;
}
.action-btns{
  display: flex;
flex-direction: column;
}
.changed-btn {
  position: relative;
}

</style>
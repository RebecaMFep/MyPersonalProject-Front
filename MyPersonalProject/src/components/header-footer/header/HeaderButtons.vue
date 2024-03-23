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
  <div class="prueba">
    <div>
      <button @click="openLoginForm()">
        Iniciar sesión
      </button>
  
      <button @click="openRegisterForm()">
        Registrarse
      </button>
    </div>

    <div class="aqui">
      <RegisterForm v-if="showRegisterForm" @close="closeForm"/>
      <LoginForm v-if="showLoginForm" @close="closeForm"/>
    </div>
  </div>
</template>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&family=Ribeye+Marrow&display=swap');

div {
  display: flex;
  gap: 1rem;
}
button {
    border: 3px solid #EFBB43;
    height: 4rem;
    text-align: center;
    margin-top: 9rem;
    margin-right: 2rem;
    border-radius: 5px;
    padding: 1.5rem 2rem;
    font-size: 1.5rem;
    color: #EFBB43;
    font-family: "Lakki Reddy", serif;
    transition: all 0.2s ease-in-out;
}
button:hover {
  background-color:  #00A5CF;;
  color: white;
}
.prueba{
  display: flex;
flex-direction: column;
}
.aqui {
  position: relative;
}

</style>
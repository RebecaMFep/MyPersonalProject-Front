<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

let uri = import.meta.env.VITE_API_ENDPOINT_GENERAL

const route = useRoute()
const router = useRouter()
const store = useAuthStore()

let username = ref("")
let password = ref("")

const userRules = [
  value => {
    if (value?.length > 3) return true;
    return 'First name must be at least 3 characters.';
  },
];

const passwordRules = [
  value => {
    if (/[^0-9]/.test(value)) return true;
    return 'Last name can not contain digits.';
  },
];

async function login() {

  const dataConnection = {
    username: username.value,
    password: password.value
  }

  let isAuthenticated = await store.login(dataConnection)

  if (isAuthenticated && store.user.roles == "ROLE_ADMIN") {
    const redirectPath = route.query.redirect || '/dashboard'
    router.push(redirectPath)
  }

  if (isAuthenticated && store.user.roles == "ROLE_USER") {
    const redirectPath = route.query.redirect || '/' //si se loguea como usuario debe ir al bashboard de usuario
    router.push(redirectPath)
  }
}

const props = defineProps({
  onClose: Function
});

const closeForm = () => {
  props.onClose();
}
  
</script>

<template>
  <div class="container">

    <div class="login-container">

      <div id="cross-icon">
        <button @click.stop="closeForm">
          <img src='/src/assets/images/icon-cross.svg' alt="cross-icon">
        </button>
      </div>

      <h2>Iniciar Sesión</h2>

      <form @submit.prevent="login">

        <div class="input-group">
          <label for="user">Usuario</label>
          <input type="text" id="user" v-model="user" required placeholder="Usuario">
        </div>

        <div class="input-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" required placeholder="Contraseña">
        </div>

        <div class="button-container">
          <button class="btn-login" type="submit" @click="login()">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  </div>
</template>
  
 
  
  <style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&family=Ribeye+Marrow&display=swap');

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-container {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
  }
  
  .cross-icon {
  width: 100%;
 
  padding: 3rem;
  display: flex;
  justify-content: end;
}

  .login-container h2 {
    font-family: "Lakki Reddy", serif;
    font-size: 32px;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .input-group {
    margin-bottom: 15px;
    font-family: "Lakki Reddy", serif;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 3px;
    border: 1px solid #ccc;
  }
  
  .button-container {
  display: flex;
  justify-content: center;
}

  .btn-login {
    width: 40%;
    padding: 10px;
    background-color: #00A5B8;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-family: "Lakki Reddy", serif;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
    
  }
  
  btn-login:hover {
    background-color: #0056b3;
  }
  </style>
  
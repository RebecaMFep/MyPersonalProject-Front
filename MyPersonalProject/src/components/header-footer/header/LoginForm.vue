<script setup>
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

let uri = import.meta.env.VITE_API_ENDPOINT_GENERAL

const route = useRoute()
const router = useRouter()
const store = useAuthStore()

let username = ref("")
let password = ref("")


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


</script>
<template>
 
  <!-- <div class="login-box">
   

    <v-sheet class="mx-auto rounded-lg login-box" color="teal-lighten-5"> -->
      <div class="form">
        <v-form fast-fail class="mt-10 mb-13 pa-4 rounded-lg" @submit.prevent="login()">
          <v-card-title class="title d-flex justify-center">
            <h1 class="addTitle">Iniciar Sesión</h1>
          </v-card-title>


          <v-text-field class="rounded-lg" v-model="username" label="Usuario" :rules="userRules"></v-text-field>

          <v-text-field class="rounded-lg" v-model="password" label="Contraseña" :rules="passwordRules" type="password" ></v-text-field>

          <v-btn type="submit" color="orange-darken-1" block class="mt-4  rounded-lg">Iniciar sesión</v-btn>

        </v-form>
      </div>
    <!-- </v-sheet>
  </div> -->

</template>

<style lang="scss" scoped>


.login-box {
  
  width: 60%;
  // border: 3px solid blue; 
  border-radius: 20px;
  margin-left: 20%; 
}

.addTitle {
  color: #00695C;
}






</style>
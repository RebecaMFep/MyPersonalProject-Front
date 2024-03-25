<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const formData = ref({
  name: '',
  surname: '',
  phone: '',
  email: '',
  activity: '',
  message: ''
});


const resetForm = () => {
  Object.keys(formData.value).forEach(key => {
    formData.value[key] = '';
  });
};

const sendMessage = () => {
  emailjs
    .sendForm('service_xr15ek8', 'template_p1cgyak', $refs.form, {
      publicKey: 'Q8lC4Eql-6IyOUaib',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

const form = ref(null);
</script>

<template>
    <v-container>
      <v-form @submit.prevent="submitForm" ref="form">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="formData.name" label="Nombre" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="formData.surname" label="Apellidos" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="formData.phone" label="Teléfono" type="phone" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="formData.email" label="Email" type="email" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="formData.activity" label="Actividad Interesada" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea v-model="formData.message" label="Mensaje" required></v-textarea>
          </v-col>
          <v-col cols="12">
            <v-btn class="btn-actions" @click="resetForm">Borrar</v-btn>
            <v-btn class="btn-actions" type="submit" @click="sendMessage">Enviar</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
  </template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&family=Ribeye+Marrow&display=swap');

.btn-actions {
  font-family: "Lakki Reddy", serif;
  color: white;
  font-size: large;
  background-color: #00a5b8;
  border-radius: 1rem;
  padding: 1rem 2rem;
  transition: all 0.3s ease;
}
label {
    font-family: "Lakki Reddy", serif;   
}
</style>
  
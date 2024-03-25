<script setup>
import { ref } from 'vue';
 import axios from 'axios';
 import { useDate } from "vuetify";
 import { computed } from 'vue';
 import { useRouter } from "vue-router";

 const date = useDate()
 const router = useRouter()

const name = ref('');
const location = ref('');
const days = ref([]);
const month = ref('');
const selectedTime = ref('');
const ageRange = ref('');
const capacity = ref(0);
const description = ref('');

const resetForm = () => {
    name.value = '';
    location.value = '';
    days.value = [];
    month.value = '';
    selectedTime.value = '';
    ageRange.value = '';
    capacity.value = 0;
    description.value = '';
  }
 
const activityList = ref([])

const addActivity = async () => {
    const uri = import.meta.env.VITE_APP_API_ENDPOINT;
    const id = route.params.id;

    try {
      const data = {
        name: name.value,
        location: location.value,
        days: days.value,
        month: month.value,
        selectedTime: timeMenu.value,
        ageRange: ageRange.value,
        capacity: capacity.value,
        description: description.value,
      };

      const config = {
        withCredentials: true,
      };

      const response = await axios.put(`${uri}/activities/${id}`, data, config);
      if (response.status === 200) {
        router.push(`/activities/${id}`);
      } else {
        console.error("Error al editar la actividad");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
</script>

<template>
  <v-row justify="center" class="Back">
    <v-col cols="12" sm="10" md="8" lg="6">
    
    <v-card ref="form" class="mt-10 mb-13 pt-10 pb-10 rounded-lg">

      <v-card-title class="title d-flex justify-center">
        <h1 class="addTitle">Añadir Nueva Actividad</h1>
      </v-card-title>

      <v-spacer></v-spacer>
        
      <v-container>
          <v-row>
            <v-col cols="8">
              <v-text-field  label="Actividad" v-model="activity.name" outlined required></v-text-field>
            </v-col>

            <v-col cols="4">
              <v-text-field label="Lugar" v-model="activity.location" outlined required></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col cols="6">
              <v-select
                v-model="activity.days"
                :items="daysOfWeek"
                label="Día/s"
                multiple
                outlined
                chips
              ></v-select>
            </v-col>

            <v-col cols="3">
              <v-radio-group v-model="activity.month" row>
                <v-radio label="Julio" value="julio"></v-radio>
                <v-radio label="Agosto" value="agosto"></v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="3">
              <v-menu
                v-model="timeMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y>

                <template v-slot:activator="{ on, attrs }">
                  <v-text-field v-model="activity.time" label="Hora" outlined readonly v-bind="attrs" v-on="on"></v-text-field>
                </template>
                <v-time-picker v-model="activity.time" @input="timeMenu = false"></v-time-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col cols="8">
              <v-select
                v-model="activity.ageRange"
                :items="ageRanges"
                label="Rango de edad"
                outlined
                required
              ></v-select>
            </v-col>

            <v-col cols="4">
              <v-text-field v-model.number="activity.capacity" label="Aforo" outlined type="number" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <v-container>
          <v-row>
            <v-col cols="12">
              <v-textarea v-model="activity.description" label="Descripción" outlined rows="5" required></v-textarea>
            </v-col>
          </v-row>
       </v-container>
       

        <v-container class="d-flex justify-center gc-6">

          <v-btn class="btn-actions" id="reset" @click="resetForm()">Borrar</v-btn>
          <v-btn class="btn-actions" id="send" @click="addActivity()">Añadir</v-btn>

        </v-container>

    </v-card>
  </v-col>
  </v-row>
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
</style>
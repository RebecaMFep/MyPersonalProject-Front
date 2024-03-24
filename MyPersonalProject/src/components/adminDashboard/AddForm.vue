<script setup>
// import { ref } from 'vue';
// import axios from 'axios';
// import { useDate } from "vuetify";
// import { computed } from 'vue';
// import { useRouter } from "vue-router";

// const date = useDate()
// const router = useRouter()

// const title = ref('');
// const city = ref('');
// const selectedDate = ref(null);
// const selectedTime = ref('');
// const capacity = ref(0);
// const description = ref('');
// const showCalendar = ref(false);
// const isOutstanding = ref(false);
// const dateMenu = ref(false)

// const dateNow = Date.now()

// const openCalendar = () => {
//   console.log('changed');
//   showCalendar.value = true
// }

// const updateSelectedDate = (value) => {
//   selectedDate.value = value;
// }


// const resetForm = () => {

//   isOutstanding.value = '';
//   title.value = '';
//   city.value = '';
//   selectedDate.value = '';
//   selectedTime.value = '';
//   capacity.value = 0;
//   description.value = '';

// }
 
// const eventList = ref([])


// const addEvent = async () => {

//   try {

//     const uri = import.meta.env.VITE_APP_API_ENDPOINT

//     const data = {
//       title: title.value,
//       date: formattedDate.value,
//       hour: selectedTime.value,
//       place: city.value,
//       description: description.value,
//       capacity: capacity.value,
//       outstanding: isOutstanding.value
//     }

//     const config = {
//       withCredentials: true,
//     }

//     const response = await axios.post(uri + '/events', data, config)
//     const status = await response.status
    
//     if (status == 201) {
//       router.push("/dashboard")
//     }

//   } catch (error) {
//     throw new Error('Error calling api: ' + error)
//   }

// }

const formattedDate = computed(() => { return date.format(selectedDate.value, 'fullDateWithWeekday') })
</script>

<template>
  <v-row justify="center" class="Back">
    <v-col cols="12" sm="10" md="8" lg="6">
    
   <v-card ref="form" color="orange-lighten-3" class="mt-10 mb-13 pt-10 pb-10 rounded-lg">

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

        
        <v-col cols="12">
          <v-textarea v-model="activity.description" label="Descripción" outlined rows="5" required></v-textarea>
        </v-col>

      

       

        <v-container class="d-flex justify-center gc-6">

          <v-btn color="orange-darken-1" id="reset" @click="resetForm()">Borrar</v-btn>
          <v-btn color="orange-darken-1" id="send" @click="addEvent()">Añadir</v-btn>

        </v-container>

      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>

.Back {
  background-image: url(../../public/image/fondo4.jpg);
    background-size: cover;
    background-position:left;
    opacity: 0.9;
}

.addTitle {
  color:#00695C;
}
</style>